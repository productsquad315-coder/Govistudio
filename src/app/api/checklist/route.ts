import { NextResponse } from 'next/server';
import { Resend } from 'resend';
import {
  checklistSchema,
  isHoneypotTripped,
  leadEmailSubject,
  leadEmailText,
  zodFieldErrors,
} from '@/lib/checklist';

export const runtime = 'nodejs';

const WINDOW_MS = 60 * 60 * 1000;
const MAX_PER_WINDOW = 5;
const hits = new Map<string, number[]>();

function clientIp(request: Request): string {
  const forwarded = request.headers.get('x-forwarded-for');
  const ip = forwarded?.split(',')[0]?.trim() || request.headers.get('x-real-ip')?.trim();
  return ip || 'unknown';
}

function withinRateLimit(ip: string): boolean {
  const now = Date.now();
  const recent = (hits.get(ip) ?? []).filter((timestamp) => now - timestamp < WINDOW_MS);
  if (recent.length >= MAX_PER_WINDOW) {
    hits.set(ip, recent);
    return false;
  }
  recent.push(now);
  hits.set(ip, recent);
  if (hits.size > 5000) {
    for (const [key, timestamps] of hits) {
      if (timestamps.every((timestamp) => now - timestamp >= WINDOW_MS)) hits.delete(key);
    }
  }
  return true;
}

function missingEnv(): string[] {
  const missing: string[] = [];
  if (!process.env.RESEND_API_KEY?.trim()) missing.push('RESEND_API_KEY');
  if (!process.env.LEAD_TO_EMAIL?.trim()) missing.push('LEAD_TO_EMAIL');
  if (!process.env.LEAD_FROM_EMAIL?.trim()) missing.push('LEAD_FROM_EMAIL');
  return missing;
}

function looksLikeEmail(value: string): boolean {
  const match = value.match(/<([^>]+)>/);
  const email = (match ? match[1] : value).trim();
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

export async function POST(request: Request) {
  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ ok: false, error: 'Invalid request' }, { status: 400 });
  }

  if (!body || typeof body !== 'object' || Array.isArray(body)) {
    return NextResponse.json({ ok: false, error: 'Invalid request' }, { status: 400 });
  }

  const record = body as Record<string, unknown>;

  // Silent drop. Bots get the same success response and no email is sent.
  if (isHoneypotTripped(record.company_website)) {
    return NextResponse.json({ ok: true });
  }

  const parsed = checklistSchema.safeParse(record);
  if (!parsed.success) {
    return NextResponse.json({ ok: false, errors: zodFieldErrors(parsed.error) }, { status: 400 });
  }

  const missing = missingEnv();
  if (missing.length > 0) {
    const error = `Checklist email is not configured. Set ${missing.join(', ')} in the project environment.`;
    console.error(error);
    return NextResponse.json({ ok: false, error }, { status: 503 });
  }

  const apiKey = process.env.RESEND_API_KEY!.trim();
  const from = process.env.LEAD_FROM_EMAIL!.trim();
  const toRaw = process.env.LEAD_TO_EMAIL!.trim();
  const to = toRaw.includes(',')
    ? toRaw.split(',').map((part) => part.trim()).filter(Boolean)
    : toRaw;

  if (!looksLikeEmail(from) || (Array.isArray(to) ? to.some((address) => !looksLikeEmail(address)) : !looksLikeEmail(to))) {
    const error = 'Checklist email is not configured. LEAD_FROM_EMAIL and LEAD_TO_EMAIL must be valid email addresses.';
    console.error(error);
    return NextResponse.json({ ok: false, error }, { status: 503 });
  }

  if (!withinRateLimit(clientIp(request))) {
    return NextResponse.json(
      {
        ok: false,
        error: 'Too many requests. Please try again later or email sales@govistudio.com.',
      },
      { status: 429 },
    );
  }

  const lead = parsed.data;
  const headerReferrer = (request.headers.get('referer') ?? '').trim().slice(0, 500);
  const referrer = lead.referrer || headerReferrer;
  const userAgent = (request.headers.get('user-agent') ?? '').trim().slice(0, 500);
  const submittedAt = new Date().toISOString();

  try {
    const resend = new Resend(apiKey);
    const { error } = await resend.emails.send({
      from,
      to,
      replyTo: lead.email,
      subject: leadEmailSubject(lead),
      text: leadEmailText(lead, { submittedAt, referrer, userAgent }),
    });

    if (error) {
      console.error('Checklist lead email failed', error);
      return NextResponse.json({ ok: false }, { status: 502 });
    }
  } catch (err) {
    console.error('Checklist lead email failed', err);
    return NextResponse.json({ ok: false }, { status: 502 });
  }

  return NextResponse.json({ ok: true });
}
