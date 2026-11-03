import type { Metadata } from 'next';
import { Suspense } from 'react';
import Footer from '@/components/Footer';
import Navigation from '@/components/Navigation';
import { CHECKLIST_PREVIEW } from '@/lib/checklist';
import ChecklistForm from './checklist-form';

const title = 'The SMB Lead-Leak Checklist | Govistudio';
const description =
  'A free 28-point checklist to find where your business loses leads: missed calls, slow replies, no-shows, lost follow-ups, after-hours enquiries and WhatsApp/DM leaks.';
const canonical = 'https://govistudio.com/checklist';
const ogImage = 'https://govistudio.com/og/checklist.png';

export const metadata: Metadata = {
  title: { absolute: title },
  description,
  alternates: { canonical },
  keywords: [
    'SMB lead checklist',
    'lead follow-up',
    'missed call text-back',
    'WhatsApp leads',
    'Govistudio',
  ],
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
  openGraph: {
    title,
    description,
    url: canonical,
    siteName: 'Govistudio',
    type: 'website',
    images: [
      {
        url: ogImage,
        width: 1200,
        height: 630,
        alt: 'The SMB Lead-Leak Checklist',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title,
    description,
    images: [ogImage],
  },
};

export default function ChecklistPage() {
  return (
    <main className="relative min-h-screen bg-black text-white">
      <a
        href="#checklist-form"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[70] focus:rounded-full focus:bg-white focus:px-4 focus:py-2 focus:text-sm focus:font-semibold focus:text-black"
      >
        Skip to form
      </a>
      <Navigation />

      <div className="pointer-events-none absolute inset-x-0 top-0 h-[32rem] bg-[radial-gradient(ellipse_at_top,rgba(107,63,214,0.28),transparent_62%)]" />

      <section className="relative px-4 pb-20 pt-28 sm:px-6 lg:px-8 lg:pt-32">
        <div className="mx-auto grid max-w-6xl gap-10 lg:grid-cols-[minmax(0,1fr)_minmax(0,26rem)] lg:items-start lg:gap-x-16">
          <div className="lg:col-start-1 lg:row-start-1">
            <p className="text-sm font-medium tracking-wide text-[#E4D4FF]">
              Free checklist for growing businesses
            </p>
            <h1 className="mt-4 max-w-xl text-4xl font-semibold tracking-tight text-white sm:text-5xl sm:leading-[1.08]">
              Find the leaks costing you leads.
            </h1>
            <p className="mt-5 max-w-xl text-base leading-relaxed text-zinc-300 sm:text-lg">
              The SMB Lead-Leak Checklist: 28 yes/no checks across calls, replies, bookings, follow-ups and DMs, each with a one-line fix. It takes about 10 minutes.
            </p>
            <a
              href="#checklist-form"
              className="mt-8 inline-flex w-full items-center justify-center rounded-full bg-[#6B3FD6] px-6 py-3 text-sm font-semibold text-white shadow-[0_0_32px_rgba(107,63,214,0.35)] transition hover:bg-[#7c52e0] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#E4D4FF] focus-visible:ring-offset-2 focus-visible:ring-offset-black sm:w-auto"
            >
              Get the free checklist
            </a>
          </div>

          <div id="checklist-form" className="scroll-mt-28 lg:col-start-2 lg:row-span-2 lg:row-start-1 lg:sticky lg:top-24">
            <Suspense fallback={<FormFallback />}>
              <ChecklistForm />
            </Suspense>
          </div>

          <div className="lg:col-start-1 lg:row-start-2">
            <h2 className="text-sm font-semibold uppercase tracking-wider text-zinc-400">
              Inside the checklist
            </h2>
            <ul className="mt-5 space-y-4">
              {CHECKLIST_PREVIEW.map((item) => (
                <li key={item} className="flex gap-3 text-sm leading-relaxed text-zinc-200 sm:text-base">
                  <span
                    aria-hidden="true"
                    className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#6B3FD6]/20 text-[#E4D4FF]"
                  >
                    <svg viewBox="0 0 16 16" className="h-3 w-3" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M3.5 8.5 6.5 11.5 12.5 4.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <Footer tagline="AI systems and automation for growing businesses." />
    </main>
  );
}

function FormFallback() {
  return (
    <div
      aria-hidden="true"
      className="h-[40rem] rounded-2xl border border-white/10 bg-white/[0.03]"
    />
  );
}
