'use client';

import Link from 'next/link';

export default function GoviOSNav() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 py-4 px-6 backdrop-blur-2xl bg-black/60 border-b border-white/[0.06]">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Wordmark */}
        <Link
          href="/"
          className="text-white font-bold text-sm tracking-tight hover:opacity-80 transition-opacity"
        >
          GoviStudio
        </Link>

        {/* CTA */}
        <a
          href="https://calendly.com/vijay-01"
          target="_blank"
          rel="noopener noreferrer"
          className="px-4 py-1.5 rounded-full text-sm font-medium border border-white/10 text-white hover:bg-white/5 transition-colors"
        >
          Talk to Us
        </a>
      </div>
    </nav>
  );
}
