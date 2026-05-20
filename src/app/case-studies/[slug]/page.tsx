import { notFound } from 'next/navigation';
import Link from 'next/link';
import Footer from '@/components/Footer';
import Navigation from '@/components/Navigation';
import { getCaseStudyBySlug, getAllCaseStudySlugs } from '@/lib/case-studies';
import { getCaseStudySchema, getBreadcrumbSchema } from '@/lib/schema';

export function generateStaticParams() {
  return getAllCaseStudySlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const resolvedParams = await params;
  const cs = getCaseStudyBySlug(resolvedParams.slug);
  if (!cs) return {};

  return {
    title: `${cs.title} | GOVI STUDIO Blueprint`,
    description: cs.subtitle + '. ' + cs.results.slice(0, 3).map(r => `${r.metric}: ${r.value}`).join('. ') + '.',
    alternates: {
      canonical: `https://govistudio.com/case-studies/${cs.slug}`,
    },
    openGraph: {
      title: cs.title,
      description: cs.subtitle,
      type: 'article',
      url: `https://govistudio.com/case-studies/${cs.slug}`,
    },
  };
}

export default async function CaseStudyPage({ params }: { params: { slug: string } }) {
  const resolvedParams = await params;
  const cs = getCaseStudyBySlug(resolvedParams.slug);
  if (!cs) return notFound();

  const schemaData = getCaseStudySchema({
    title: cs.title,
    slug: cs.slug,
    description: cs.subtitle,
    industry: cs.industry,
    technologies: cs.technologies,
    results: cs.results.map(r => `${r.metric}: ${r.value}`),
  });

  const breadcrumbData = [
    { name: 'GOVI STUDIO', url: 'https://govistudio.com' },
    { name: 'Solution Blueprints', url: 'https://govistudio.com/case-studies' },
    { name: cs.industry, url: `https://govistudio.com/case-studies/${cs.slug}` },
  ];

  const stepColors = [
    'from-cyan-400 to-blue-500',
    'from-purple-400 to-indigo-500',
    'from-blue-400 to-cyan-500',
    'from-orange-400 to-amber-500',
    'from-emerald-400 to-teal-500',
  ];

  return (
    <article className="min-h-screen bg-black text-white selection:bg-blue-500/30">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(getBreadcrumbSchema(breadcrumbData)) }}
      />

      <Navigation />

      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pt-28 sm:pt-32 pb-20 sm:pb-24">
        {/* Breadcrumb */}
        <nav className="mb-8 text-sm text-zinc-500" aria-label="Breadcrumb">
          <Link href="/" className="hover:text-white transition-colors">Home</Link>
          <span className="mx-2">→</span>
          <Link href="/case-studies" className="hover:text-white transition-colors">Solution Blueprints</Link>
          <span className="mx-2">→</span>
          <span className="text-zinc-400">{cs.industry}</span>
        </nav>

        {/* Header */}
        <header className="mb-12 sm:mb-16">
          <div className="flex flex-wrap items-center gap-3 mb-6">
            <span className="text-[10px] font-bold uppercase tracking-widest text-cyan-400 bg-cyan-500/10 px-2.5 py-1 rounded">
              {cs.industry}
            </span>
            <span className="text-[10px] font-bold uppercase tracking-widest text-orange-400 bg-orange-500/10 px-2.5 py-1 rounded">
              Proposed Blueprint
            </span>
            <span className="text-[10px] font-bold uppercase tracking-widest text-zinc-500 bg-white/5 px-2.5 py-1 rounded">
              Est. {cs.duration}
            </span>
            <span className="text-[10px] font-bold uppercase tracking-widest text-zinc-500 bg-white/5 px-2.5 py-1 rounded">
              Est. {cs.investment}
            </span>
          </div>

          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight mb-4 leading-[1.15]">
            {cs.title}
          </h1>
          <p className="text-lg text-gray-400 leading-relaxed">
            {cs.subtitle}
          </p>
        </header>

        {/* Expected Outcomes Grid */}
        <section className="mb-14 sm:mb-16">
          <h2 className="text-xl font-bold text-white mb-6">Expected Outcomes</h2>
          <div className="grid grid-cols-2 lg:grid-cols-3 gap-4">
            {cs.results.map((r, i) => (
              <div
                key={i}
                className="rounded-2xl border border-white/[0.08] bg-white/[0.02] p-5"
              >
                <div className="text-2xl sm:text-3xl font-bold text-white mb-1">{r.value}</div>
                <div className="text-[11px] text-zinc-500 uppercase tracking-wider font-bold mb-2">{r.metric}</div>
                <p className="text-[13px] text-zinc-400 leading-relaxed">{r.context}</p>
              </div>
            ))}
          </div>
        </section>

        {/* The Problem */}
        <section className="mb-14 sm:mb-16">
          <h2 className="text-xl font-bold text-white mb-4">The Problem This Solves</h2>
          <div className="rounded-2xl border border-white/[0.08] bg-white/[0.02] p-6 sm:p-8">
            <p className="text-[15px] text-zinc-300 leading-[1.8]">{cs.challenge}</p>
          </div>
        </section>

        {/* Our Approach */}
        <section className="mb-14 sm:mb-16">
          <h2 className="text-xl font-bold text-white mb-4">How We Would Approach This</h2>
          <p className="text-[15px] text-zinc-300 leading-[1.8] mb-8">{cs.approach}</p>
        </section>

        {/* Proposed Architecture */}
        <section className="mb-14 sm:mb-16">
          <h2 className="text-xl font-bold text-white mb-8">Proposed System Architecture</h2>
          <div className="space-y-6">
            {cs.architecture.map((step, i) => (
              <div
                key={step.phase}
                className="relative rounded-2xl border border-white/[0.06] bg-white/[0.02] p-6 sm:p-8"
              >
                <div className="flex items-start gap-4 sm:gap-6">
                  <span
                    className={`text-[36px] sm:text-[48px] font-black leading-none bg-gradient-to-b ${stepColors[i % stepColors.length]} bg-clip-text text-transparent opacity-40 flex-shrink-0`}
                  >
                    {step.phase}
                  </span>
                  <div>
                    <h3 className="text-[16px] sm:text-[18px] font-bold text-white mb-3">
                      {step.title}
                    </h3>
                    <p className="text-[14px] sm:text-[15px] text-zinc-400 leading-[1.8]">
                      {step.detail}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Technology Stack */}
        <section className="mb-14 sm:mb-16">
          <h2 className="text-xl font-bold text-white mb-6">Proposed Technology Stack</h2>
          <div className="flex flex-wrap gap-2">
            {cs.technologies.map((tech) => (
              <span
                key={tech}
                className="px-3 py-1.5 text-[12px] font-semibold rounded-lg border border-white/[0.08] bg-white/[0.03] text-zinc-300"
              >
                {tech}
              </span>
            ))}
          </div>
        </section>

        {/* Key Insight */}
        <section className="mb-14 sm:mb-16">
          <div className="rounded-2xl border border-orange-500/20 bg-orange-500/[0.03] p-6 sm:p-8">
            <h2 className="text-lg font-bold text-orange-400 mb-4">💡 Why This Matters</h2>
            <p className="text-[15px] text-zinc-300 leading-[1.8] italic">
              &ldquo;{cs.keyInsight}&rdquo;
            </p>
          </div>
        </section>

        {/* CTA */}
        <section className="mt-16 p-8 sm:p-10 rounded-3xl border border-blue-500/20 bg-blue-500/[0.02]">
          <h2 className="text-2xl font-bold mb-4">Want Us to Build This for Your Institution?</h2>
          <p className="text-gray-400 mb-6 max-w-lg">
            Every blueprint starts with a 30-minute discovery call where we understand your specific workflows and identify what would create the most impact.
          </p>
          <div className="flex flex-wrap gap-4">
            <a
              href="https://calendly.com/vijay-01"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-white text-black px-6 py-3 rounded-full font-bold hover:bg-gray-200 transition-all text-sm"
            >
              Schedule a Discovery Call →
            </a>
            <Link
              href="/case-studies"
              className="inline-flex items-center gap-2 border border-white/10 text-white px-6 py-3 rounded-full font-semibold hover:bg-white/5 transition-all text-sm"
            >
              ← All Blueprints
            </Link>
          </div>
        </section>
      </main>

      <Footer />
    </article>
  );
}
