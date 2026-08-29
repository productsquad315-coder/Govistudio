import Link from 'next/link';
import { getLatestBlogs, type BlogMeta } from '@/lib/content';
import Logo from '@/components/Logo';

const CLINIC_SYSTEMS = [
  { label: 'AI Systems for Dental Clinics', href: '/ai/dental' },
  { label: 'AI Systems for Dermatology Clinics', href: '/ai/dermatology' },
  { label: 'AI Systems for Physiotherapy Clinics', href: '/ai/physiotherapy' },
  { label: 'AI Systems for Cosmetic Clinics', href: '/ai/cosmetic' },
];

export default function Footer() {
  // Limit to keep the footer compact
  const latest = getLatestBlogs(3);

  return (
    <footer className="relative border-t border-white/[0.05] bg-black overflow-hidden">
      {/* Subtle background glow, consistent with the rest of the site */}
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-[300px] rounded-full pointer-events-none"
        style={{ background: 'radial-gradient(closest-side, rgba(6,182,212,0.08), transparent 70%)' }}
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* CTA banner */}
        <div className="py-14 lg:py-16 border-b border-white/[0.05] flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8">
          <div>
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-white">
              Ready to stop losing patients to broken systems?
            </h2>
            <p className="text-zinc-500 mt-2 max-w-lg">
              Tell us what&apos;s slowing your clinic down — we&apos;ll show you what a system built around it actually looks like.
            </p>
          </div>
          <a
            href="https://calendly.com/vijay-01"
            target="_blank"
            rel="noopener noreferrer"
            className="shrink-0 inline-flex items-center gap-2 bg-white text-black px-6 py-3 rounded-full font-bold hover:bg-gray-200 transition-all text-sm whitespace-nowrap"
          >
            Talk to Govistudio
          </a>
        </div>

        {/* Columns */}
        <div className="py-12 lg:py-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">

          {/* Column 1: Brand & Contact */}
          <div className="space-y-4">
            <Logo href="/" showText={true} />
            <p className="text-sm leading-relaxed text-zinc-500 max-w-xs">
              Personalized business systems for growing clinics.
            </p>
            <div className="pt-2">
              <a href="mailto:hello@govistudio.com" className="text-sm text-zinc-400 hover:text-white transition-colors">
                hello@govistudio.com
              </a>
            </div>
          </div>

          {/* Column 2: Navigation */}
          <div className="space-y-4">
            <div className="text-[11px] font-bold text-zinc-300 uppercase tracking-wider">Navigation</div>
            <div className="flex flex-col space-y-2.5 text-sm">
              <Link className="text-zinc-500 hover:text-white transition-colors" href="/#problems">How We Help</Link>
              <Link className="text-zinc-500 hover:text-white transition-colors" href="/#solutions">What We Build</Link>
              <Link className="text-zinc-500 hover:text-white transition-colors" href="/#process">How It Works</Link>
              <Link className="text-zinc-500 hover:text-white transition-colors" href="/about">About</Link>
              <Link className="text-zinc-500 hover:text-white transition-colors" href="/case-studies">Case Studies</Link>
              <Link className="text-zinc-500 hover:text-white transition-colors" href="/faq">FAQ</Link>
            </div>
          </div>

          {/* Column 3: Clinic Systems (primary ICP) */}
          <div className="space-y-4">
            <div className="text-[11px] font-bold text-zinc-300 uppercase tracking-wider">Clinic Systems</div>
            <div className="flex flex-col space-y-2.5 text-sm">
              {CLINIC_SYSTEMS.map((item) => (
                <Link key={item.href} className="text-zinc-500 hover:text-white transition-colors line-clamp-1" href={item.href}>
                  {item.label}
                </Link>
              ))}
              <Link className="text-cyan-500 hover:text-cyan-400 transition-colors pt-2" href="/ai">Explore All AI Feeds →</Link>
            </div>
          </div>

          {/* Column 4: Articles */}
          <div className="space-y-4">
            <div className="text-[11px] font-bold text-zinc-300 uppercase tracking-wider">Articles</div>
            <div className="flex flex-col space-y-2.5 text-sm">
              {latest.map((post: BlogMeta) => (
                <Link key={post.path} className="text-zinc-500 hover:text-white transition-colors line-clamp-1" href={post.path}>
                  {post.title}
                </Link>
              ))}
              <Link className="text-cyan-500 hover:text-cyan-400 transition-colors pt-2" href="/blog">View All →</Link>
            </div>
          </div>

        </div>
      </div>

      {/* Bottom strip */}
      <div className="relative py-6 border-t border-white/[0.05]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-zinc-600 text-xs">
            © {new Date().getFullYear()} Govistudio. All rights reserved.
          </p>
          <Link className="text-zinc-600 text-xs hover:text-white transition-colors" href="/privacy">
            Privacy Policy
          </Link>
        </div>
      </div>
    </footer>
  );
}
