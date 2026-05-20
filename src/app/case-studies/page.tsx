import Link from 'next/link';
import Footer from '@/components/Footer';
import Navigation from '@/components/Navigation';
import { caseStudies } from '@/lib/case-studies';
import { getBreadcrumbSchema } from '@/lib/schema';

export const metadata = {
  title: 'Solution Blueprints — AI Systems for Schools & Businesses | GOVI STUDIO',
  description:
    'Detailed technical blueprints showing how GOVI STUDIO would build AI systems for schools, colleges, and traditional businesses. See our proposed architectures for enrollment automation, fee collection, and operations visibility.',
  alternates: {
    canonical: 'https://govistudio.com/case-studies',
  },
};

export default function CaseStudiesPage() {
  const breadcrumbData = [
    { name: 'GOVI STUDIO', url: 'https://govistudio.com' },
    { name: 'Solution Blueprints', url: 'https://govistudio.com/case-studies' },
  ];

  return (
    <article className="min-h-screen bg-black text-white selection:bg-blue-500/30">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(getBreadcrumbSchema(breadcrumbData)),
        }}
      />

      <Navigation />

      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pt-28 sm:pt-32 pb-20 sm:pb-24">
        <header className="mb-12 sm:mb-16">
          <p className="text-blue-400 text-[11px] font-bold uppercase tracking-[0.5em] mb-4">
            Solution Blueprints
          </p>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight mb-6 leading-[1.1]">
            How We Would{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-purple-400 to-orange-400">
              Build These AI Systems
            </span>
          </h1>
          <p className="text-lg sm:text-xl text-gray-400 leading-relaxed max-w-3xl">
            Detailed technical blueprints for real problems schools, colleges, and businesses face. Each blueprint shows exactly what we would build, how we would architect it, and the outcomes you can expect.
          </p>
        </header>

        {/* Case Study Cards */}
        <div className="space-y-8">
          {caseStudies.map((cs) => (
            <Link
              key={cs.slug}
              href={`/case-studies/${cs.slug}`}
              className="block group"
            >
              <div className="rounded-2xl border border-white/[0.08] bg-white/[0.02] hover:bg-white/[0.04] hover:border-white/[0.12] transition-all duration-300 overflow-hidden p-6 sm:p-8">
                <div className="flex flex-wrap items-center gap-3 mb-4">
                  <span className="text-[10px] font-bold uppercase tracking-widest text-cyan-400 bg-cyan-500/10 px-2.5 py-1 rounded">
                    {cs.industry}
                  </span>
                  <span className="text-[10px] font-bold uppercase tracking-widest text-zinc-500 bg-white/5 px-2.5 py-1 rounded">
                    {cs.duration}
                  </span>
                  <span className="text-[10px] font-bold uppercase tracking-widest text-zinc-500 bg-white/5 px-2.5 py-1 rounded">
                    {cs.investment}
                  </span>
                </div>

                <h2 className="text-lg sm:text-xl font-bold text-white mb-3 leading-tight group-hover:text-cyan-400 transition-colors">
                  {cs.title}
                </h2>
                <p className="text-sm text-zinc-400 leading-relaxed mb-6">
                  {cs.subtitle}
                </p>

                {/* Key Results Preview */}
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                  {cs.results.slice(0, 3).map((r, i) => (
                    <div
                      key={i}
                      className="bg-black/30 rounded-xl border border-white/[0.05] p-3"
                    >
                      <div className="text-lg sm:text-xl font-bold text-white mb-1">{r.value}</div>
                      <div className="text-[11px] text-zinc-500 uppercase tracking-wider font-medium">{r.metric}</div>
                    </div>
                  ))}
                </div>

                {/* Technologies */}
                <div className="mt-5 flex flex-wrap gap-1.5">
                  {cs.technologies.slice(0, 6).map((tech) => (
                    <span
                      key={tech}
                      className="text-[10px] font-medium text-zinc-500 border border-white/[0.06] rounded px-2 py-0.5"
                    >
                      {tech}
                    </span>
                  ))}
                  {cs.technologies.length > 6 && (
                    <span className="text-[10px] font-medium text-zinc-600 px-2 py-0.5">
                      +{cs.technologies.length - 6} more
                    </span>
                  )}
                </div>

                <div className="mt-6 text-sm font-semibold text-cyan-400 group-hover:translate-x-1 transition-transform">
                  Read Full Blueprint →
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* CTA */}
        <section className="mt-20 p-8 sm:p-10 rounded-3xl border border-blue-500/20 bg-blue-500/[0.02]">
          <h2 className="text-2xl font-bold mb-4">Want to See a System Like This For Your Business?</h2>
          <p className="text-gray-400 mb-6 max-w-lg">
            Every case study started with a 30-minute discovery call where we identified the highest-ROI automation targets. Let&apos;s find yours.
          </p>
          <div className="flex flex-wrap gap-4">
            <a
              href="https://calendly.com/vijay-01"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-white text-black px-6 py-3 rounded-full font-bold hover:bg-gray-200 transition-all text-sm"
            >
              Schedule a Discovery Call
            </a>
            <Link
              href="/faq"
              className="inline-flex items-center gap-2 border border-white/10 text-white px-6 py-3 rounded-full font-semibold hover:bg-white/5 transition-all text-sm"
            >
              Read FAQ →
            </Link>
          </div>
        </section>
      </main>

      <Footer />
    </article>
  );
}
