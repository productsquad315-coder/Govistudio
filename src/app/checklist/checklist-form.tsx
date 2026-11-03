'use client';

import { useEffect, useId, useRef, useState, type FormEvent, type ReactNode } from 'react';
import Link from 'next/link';
import { useSearchParams } from 'next/navigation';
import {
  BUSINESS_TYPES,
  CALENDLY_URL,
  OTHER_COUNTRIES,
  PINNED_COUNTRIES,
  UTM_KEYS,
  UTM_STORAGE_KEY,
  capUtm,
  checklistSchema,
  zodFieldErrors,
  type UtmKey,
} from '@/lib/checklist';

type Utms = Record<UtmKey, string>;

const EMPTY_UTMS: Utms = {
  utm_source: '',
  utm_medium: '',
  utm_campaign: '',
  utm_content: '',
};

const GENERIC_ERROR = 'Something went wrong, please try again or email sales@govistudio.com.';

const FIELD_ORDER = ['name', 'email', 'businessType', 'country', 'phone', 'consent'] as const;

function readStoredUtms(): Partial<Utms> {
  try {
    const raw = sessionStorage.getItem(UTM_STORAGE_KEY);
    if (!raw) return {};
    const parsed = JSON.parse(raw) as Record<string, unknown>;
    const stored: Partial<Utms> = {};
    for (const key of UTM_KEYS) {
      if (typeof parsed[key] === 'string') stored[key] = capUtm(parsed[key]);
    }
    return stored;
  } catch {
    return {};
  }
}

function mergeUtms(searchParams: { get: (key: string) => string | null }): Utms {
  const stored = readStoredUtms();
  const next = { ...EMPTY_UTMS };
  for (const key of UTM_KEYS) {
    const fromUrl = capUtm(searchParams.get(key));
    next[key] = fromUrl || stored[key] || '';
  }
  return next;
}

export default function ChecklistForm() {
  const searchParams = useSearchParams();
  const honeypotRef = useRef<HTMLInputElement>(null);
  const thanksRef = useRef<HTMLHeadingElement>(null);
  const errorSummaryId = useId();

  const [utms, setUtms] = useState<Utms>(EMPTY_UTMS);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [businessType, setBusinessType] = useState('');
  const [country, setCountry] = useState('');
  const [phone, setPhone] = useState('');
  const [consent, setConsent] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [formError, setFormError] = useState('');
  const [liveMessage, setLiveMessage] = useState('');
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    const next = mergeUtms(searchParams);
    setUtms(next);
    try {
      sessionStorage.setItem(UTM_STORAGE_KEY, JSON.stringify(next));
    } catch {
      // Session storage can be blocked. The hidden fields still submit.
    }
  }, [searchParams]);

  useEffect(() => {
    if (submitted) thanksRef.current?.focus();
  }, [submitted]);

  function clearFieldError(field: string) {
    setErrors((current) => {
      if (!current[field]) return current;
      const next = { ...current };
      delete next[field];
      return next;
    });
  }

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (submitting) return;

    setFormError('');
    const payload = {
      name,
      email,
      businessType,
      country,
      phone,
      consent,
      utm_source: utms.utm_source,
      utm_medium: utms.utm_medium,
      utm_campaign: utms.utm_campaign,
      utm_content: utms.utm_content,
      referrer: typeof document !== 'undefined' ? document.referrer.slice(0, 500) : '',
      company_website: honeypotRef.current?.value ?? '',
    };

    const parsed = checklistSchema.safeParse(payload);
    if (!parsed.success) {
      const fieldErrors = zodFieldErrors(parsed.error);
      setErrors(fieldErrors);
      const summary = Object.values(fieldErrors).join(' ');
      setLiveMessage(summary);
      const first = FIELD_ORDER.find((field) => fieldErrors[field]);
      if (first) document.getElementById(first)?.focus();
      return;
    }

    setErrors({});
    setSubmitting(true);

    try {
      const response = await fetch('/api/checklist', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        cache: 'no-store',
        body: JSON.stringify(payload),
      });

      let data: { ok?: boolean; error?: string; errors?: Record<string, string> } | null = null;
      try {
        data = await response.json();
      } catch {
        data = null;
      }

      if (response.ok && data?.ok) {
        trackLeadMagnetSubmit(utms);
        setSubmitted(true);
        setLiveMessage('Your checklist is ready.');
        return;
      }

      if (response.status === 400 && data?.errors) {
        setErrors(data.errors);
        const summary = Object.values(data.errors).join(' ');
        setLiveMessage(summary);
        const first = FIELD_ORDER.find((field) => data?.errors?.[field]);
        if (first) document.getElementById(first)?.focus();
        return;
      }

      const message = response.status === 502 ? GENERIC_ERROR : data?.error || GENERIC_ERROR;
      setFormError(message);
      setLiveMessage(message);
    } catch {
      setFormError(GENERIC_ERROR);
      setLiveMessage(GENERIC_ERROR);
    } finally {
      setSubmitting(false);
    }
  }

  if (submitted) {
    return (
      <div className="rounded-2xl border border-white/10 bg-zinc-950/80 p-6 shadow-[0_20px_80px_rgba(107,63,214,0.12)] sm:p-8">
        <h2
          ref={thanksRef}
          tabIndex={-1}
          className="text-2xl font-semibold tracking-tight text-white outline-none"
        >
          Your checklist is ready.
        </h2>
        <a
          href="/checklist.pdf"
          download="the-smb-lead-leak-checklist.pdf"
          target="_blank"
          rel="noopener"
          className="mt-6 inline-flex w-full items-center justify-center rounded-full bg-[#6B3FD6] px-5 py-3 text-sm font-semibold text-white transition hover:bg-[#7c52e0] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#E4D4FF] focus-visible:ring-offset-2 focus-visible:ring-offset-black"
        >
          Download the checklist (PDF)
        </a>
        <p className="mt-6 text-sm leading-relaxed text-zinc-300">
          Want help fixing the leaks you find? Book a free 30-minute call with Govistudio.
        </p>
        <a
          href={CALENDLY_URL}
          target="_blank"
          rel="noopener"
          className="mt-4 inline-flex w-full items-center justify-center rounded-full border border-white/15 px-5 py-3 text-sm font-semibold text-white transition hover:bg-white/5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#E4D4FF] focus-visible:ring-offset-2 focus-visible:ring-offset-black"
        >
          Book a 30-min call
        </a>
      </div>
    );
  }

  return (
    <form
      onSubmit={onSubmit}
      noValidate
      aria-labelledby="checklist-form-heading"
      aria-busy={submitting}
      className="relative rounded-2xl border border-white/10 bg-zinc-950/80 p-5 shadow-[0_20px_80px_rgba(107,63,214,0.12)] sm:p-7"
    >
      <h2 id="checklist-form-heading" className="text-xl font-semibold tracking-tight text-white">
        Get the free checklist
      </h2>
      <p className="mt-1 text-sm text-zinc-400">The PDF is ready on the next screen.</p>

      <div aria-live="polite" aria-atomic="true" className="sr-only">
        {liveMessage}
      </div>

      <div className="mt-5 space-y-4">
        <Field
          id="name"
          label="Name"
          error={errors.name}
          errorId="name-error"
        >
          <input
            id="name"
            name="name"
            type="text"
            autoComplete="name"
            required
            maxLength={100}
            value={name}
            onChange={(event) => {
              setName(event.target.value);
              clearFieldError('name');
            }}
            aria-invalid={errors.name ? true : undefined}
            aria-describedby={errors.name ? 'name-error' : undefined}
            className={inputClass(Boolean(errors.name))}
          />
        </Field>

        <Field id="email" label="Work email" error={errors.email} errorId="email-error">
          <input
            id="email"
            name="email"
            type="email"
            autoComplete="email"
            inputMode="email"
            required
            maxLength={200}
            spellCheck={false}
            value={email}
            onChange={(event) => {
              setEmail(event.target.value);
              clearFieldError('email');
            }}
            aria-invalid={errors.email ? true : undefined}
            aria-describedby={errors.email ? 'email-error' : undefined}
            className={inputClass(Boolean(errors.email))}
          />
        </Field>

        <Field
          id="businessType"
          label="Business type"
          error={errors.businessType}
          errorId="businessType-error"
        >
          <select
            id="businessType"
            name="businessType"
            required
            value={businessType}
            onChange={(event) => {
              setBusinessType(event.target.value);
              clearFieldError('businessType');
            }}
            aria-invalid={errors.businessType ? true : undefined}
            aria-describedby={errors.businessType ? 'businessType-error' : undefined}
            className={inputClass(Boolean(errors.businessType))}
          >
            <option value="">Select a business type</option>
            {BUSINESS_TYPES.map((type) => (
              <option key={type} value={type}>
                {type}
              </option>
            ))}
          </select>
        </Field>

        <Field id="country" label="Country" error={errors.country} errorId="country-error">
          <select
            id="country"
            name="country"
            required
            autoComplete="country-name"
            value={country}
            onChange={(event) => {
              setCountry(event.target.value);
              clearFieldError('country');
            }}
            aria-invalid={errors.country ? true : undefined}
            aria-describedby={errors.country ? 'country-error' : undefined}
            className={inputClass(Boolean(errors.country))}
          >
            <option value="">Select a country</option>
            <optgroup label="Suggested">
              {PINNED_COUNTRIES.map((item) => (
                <option key={item} value={item}>
                  {item}
                </option>
              ))}
            </optgroup>
            <optgroup label="All countries">
              {OTHER_COUNTRIES.map((item) => (
                <option key={item} value={item}>
                  {item}
                </option>
              ))}
            </optgroup>
          </select>
        </Field>

        <Field id="phone" label="Phone (optional)" error={errors.phone} errorId="phone-error">
          <input
            id="phone"
            name="phone"
            type="tel"
            autoComplete="tel"
            inputMode="tel"
            maxLength={40}
            value={phone}
            onChange={(event) => {
              setPhone(event.target.value);
              clearFieldError('phone');
            }}
            aria-invalid={errors.phone ? true : undefined}
            aria-describedby={errors.phone ? 'phone-error' : undefined}
            className={inputClass(Boolean(errors.phone))}
          />
        </Field>

        <div>
          <div className="flex items-start gap-3">
            <input
              id="consent"
              name="consent"
              type="checkbox"
              required
              checked={consent}
              onChange={(event) => {
                setConsent(event.target.checked);
                clearFieldError('consent');
              }}
              aria-invalid={errors.consent ? true : undefined}
              aria-describedby={errors.consent ? 'consent-error' : undefined}
              className="mt-1 h-4 w-4 shrink-0 rounded border-white/20 bg-black accent-[#6B3FD6] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#E4D4FF] focus-visible:ring-offset-2 focus-visible:ring-offset-black"
            />
            <label htmlFor="consent" className="text-sm leading-relaxed text-zinc-300">
              I agree to receive the checklist and occasional emails from Govistudio. Unsubscribe anytime. See our{' '}
              <Link
                href="/privacy"
                className="underline decoration-white/30 underline-offset-2 hover:decoration-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#E4D4FF] rounded-sm"
              >
                Privacy Policy
              </Link>
              .
            </label>
          </div>
          {errors.consent ? (
            <p id="consent-error" className="mt-1.5 text-sm text-red-400">
              {errors.consent}
            </p>
          ) : null}
        </div>
      </div>

      {UTM_KEYS.map((key) => (
        <input key={key} type="hidden" name={key} value={utms[key]} />
      ))}

      <div aria-hidden="true">
        <label htmlFor="company_website" style={{ position: 'absolute', left: '-9999px' }}>
          Company website
        </label>
        <input
          ref={honeypotRef}
          id="company_website"
          name="company_website"
          type="text"
          tabIndex={-1}
          autoComplete="off"
          aria-hidden="true"
          defaultValue=""
          style={{ position: 'absolute', left: '-9999px' }}
        />
      </div>

      {formError ? (
        <p id={errorSummaryId} className="mt-4 text-sm text-red-400" role="alert">
          {formError}
        </p>
      ) : null}

      <button
        type="submit"
        disabled={submitting}
        className="mt-5 inline-flex w-full items-center justify-center rounded-full bg-[#6B3FD6] px-5 py-3 text-sm font-semibold text-white transition hover:bg-[#7c52e0] disabled:cursor-not-allowed disabled:opacity-60 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#E4D4FF] focus-visible:ring-offset-2 focus-visible:ring-offset-black"
      >
        {submitting ? 'Sending…' : 'Send me the checklist'}
      </button>
    </form>
  );
}

function trackLeadMagnetSubmit(utms: Utms) {
  if (typeof window === 'undefined') return;
  const props = {
    utm_source: utms.utm_source,
    utm_medium: utms.utm_medium,
    utm_campaign: utms.utm_campaign,
    utm_content: utms.utm_content,
  };
  const win = window as Window & {
    gtag?: (...args: unknown[]) => void;
    dataLayer?: Record<string, unknown>[];
    plausible?: (event: string, options?: { props?: Record<string, string> }) => void;
  };
  if (typeof win.gtag === 'function') win.gtag('event', 'lead_magnet_submit', props);
  if (Array.isArray(win.dataLayer)) win.dataLayer.push({ event: 'lead_magnet_submit', ...props });
  if (typeof win.plausible === 'function') win.plausible('lead_magnet_submit', { props });
}

function inputClass(invalid: boolean): string {
  return [
    'mt-1.5 w-full rounded-lg border bg-black px-3 py-2.5 text-sm text-white',
    'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#6B3FD6] focus-visible:ring-offset-2 focus-visible:ring-offset-black',
    invalid ? 'border-red-400/80' : 'border-white/10',
  ].join(' ');
}

function Field({
  id,
  label,
  error,
  errorId,
  children,
}: {
  id: string;
  label: string;
  error?: string;
  errorId: string;
  children: ReactNode;
}) {
  return (
    <div>
      <label htmlFor={id} className="block text-sm font-medium text-zinc-200">
        {label}
      </label>
      {children}
      {error ? (
        <p id={errorId} className="mt-1.5 text-sm text-red-400">
          {error}
        </p>
      ) : null}
    </div>
  );
}
