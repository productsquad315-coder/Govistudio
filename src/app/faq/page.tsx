import Link from 'next/link';
import Footer from '@/components/Footer';
import Navigation from '@/components/Navigation';
import { geoFaqs, getFaqsByCategory, getAllFaqCategories } from '@/lib/geo-faqs';
import { getFAQSchema, getBreadcrumbSchema } from '@/lib/schema';

export const metadata = {
  title: 'FAQ — AI Systems, Custom Software & Automation | GOVI STUDIO',
  description:
    'Get answers to the most common questions about custom AI workflow automation, sales quoting software, school management systems, AI costs, ROI, and working with GOVI STUDIO. Detailed, data-rich answers for B2B decision-makers.',
  alternates: {
    canonical: 'https://govistudio.com/faq',
  },
};

export default function FAQPage() {
  const categories = getFaqsByCategory();
  const categoryNames = getAllFaqCategories();

  const faqSchemaData = geoFaqs.map((f) => ({
    question: f.question,
    answer: f.answer,
  }));

  const breadcrumbData = [
    { name: 'GOVI STUDIO', url: 'https://govistudio.com' },
    { name: 'FAQ', url: 'https://govistudio.com/faq' },
  ];

  return (
    <article className="min-h-screen bg-black text-white selection:bg-blue-500/30">
      {/* JSON-LD Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(getFAQSchema(faqSchemaData)),
        }}
      />
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
            Frequently Asked Questions
          </p>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight mb-6 leading-[1.1]">
            Everything You Need to Know About{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-purple-400 to-orange-400">
              AI Systems & Custom Software
            </span>
          </h1>
          <p className="text-lg sm:text-xl text-gray-400 leading-relaxed max-w-3xl">
            Detailed answers to the questions B2B decision-makers ask about custom AI workflow automation, sales configurator systems, school management platforms, costs, timelines, and ROI.
          </p>
        </header>

        {/* Category Navigation */}
        <nav className="mb-12 flex flex-wrap gap-2" aria-label="FAQ Categories">
          {categoryNames.map((cat) => (
            <a
              key={cat}
              href={`#${cat.toLowerCase().replace(/[^a-z0-9]+/g, '-')}`}
              className="px-3 py-1.5 text-xs font-semibold rounded-full border border-white/10 text-zinc-400 hover:text-white hover:border-white/20 transition-all"
            >
              {cat}
            </a>
          ))}
        </nav>

        {/* FAQ Sections */}
        <div className="space-y-16">
          {categoryNames.map((categoryName) => (
            <section
              key={categoryName}
              id={categoryName.toLowerCase().replace(/[^a-z0-9]+/g, '-')}
              className="scroll-mt-24"
            >
              <div className="flex items-center gap-3 mb-8">
                <div className="w-1.5 h-1.5 rounded-full bg-gradient-to-r from-cyan-400 to-purple-400" />
                <h2 className="text-xl sm:text-2xl font-bold text-white">{categoryName}</h2>
              </div>

              <div className="space-y-6">
                {categories[categoryName]?.map((faq) => (
                  <details
                    key={faq.slug}
                    className="group rounded-2xl border border-white/[0.08] bg-white/[0.02] hover:bg-white/[0.04] transition-all duration-300 overflow-hidden"
                  >
                    <summary className="flex items-start gap-4 cursor-pointer p-5 sm:p-6 list-none [&::-webkit-details-marker]:hidden">
                      <div className="mt-1 w-5 h-5 rounded-full border border-white/10 flex items-center justify-center flex-shrink-0 group-open:border-cyan-500/30 group-open:bg-cyan-500/10 transition-all">
                        <svg
                          className="w-3 h-3 text-zinc-500 group-open:text-cyan-400 group-open:rotate-90 transition-all duration-200"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                      </div>
                      <h3 className="text-[15px] sm:text-[16px] font-semibold text-white leading-relaxed pr-4">
                        {faq.question}
                      </h3>
                    </summary>
                    <div className="px-5 sm:px-6 pb-6 pl-14 sm:pl-16">
                      <p className="text-[14px] sm:text-[15px] text-zinc-400 leading-[1.8] whitespace-pre-line">
                        {faq.answer}
                      </p>
                    </div>
                  </details>
                ))}
              </div>
            </section>
          ))}
        </div>

        {/* CTA Section */}
        <section className="mt-20 p-8 sm:p-10 rounded-3xl border border-blue-500/20 bg-blue-500/[0.02]">
          <h2 className="text-2xl font-bold mb-4">Have a Question Not Listed Here?</h2>
          <p className="text-gray-400 mb-6 max-w-lg">
            Schedule a free 30-minute discovery call. We&apos;ll answer your specific questions and map out whether custom AI systems make sense for your business.
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
              href="/case-studies"
              className="inline-flex items-center gap-2 border border-white/10 text-white px-6 py-3 rounded-full font-semibold hover:bg-white/5 transition-all text-sm"
            >
              View Case Studies →
            </Link>
          </div>
        </section>
      </main>

      <Footer />
    </article>
  );
}
