import Link from 'next/link';

export interface UseCaseData {
  slug: string;
  title: string;
  subtitle: string;
  problem: string;
  solution: string;
  steps: { label: string; description: string }[];
  impact: { metric: string; value: string }[];
  beforeAfter: { before: string[]; after: string[] };
  whoItsFor: string[];
}

interface UseCasePageProps {
  data: UseCaseData;
}

export default function UseCasePage({ data }: UseCasePageProps) {
  return (
    <article className="min-h-screen bg-black text-white selection:bg-blue-500/30">
      <nav className="fixed top-0 w-full z-50 px-8 py-5 flex justify-between items-center backdrop-blur-2xl border-b border-white/[0.06] bg-black/60">
        <Link href="/" className="font-bold text-xl tracking-tight">
          <span className="text-white">GOVI</span>
          <span className="text-gray-500 ml-1 font-normal">STUDIO</span>
        </Link>
        <div className="hidden md:flex items-center gap-8 text-sm text-gray-400 font-medium">
          <a href="/#services" className="hover:text-white transition-colors">Services</a>
          <a href="/#process" className="hover:text-white transition-colors">Process</a>
          <a href="/about" className="hover:text-white transition-colors">About</a>
          <a href="/#contact" className="hover:text-white transition-colors">Contact</a>
        </div>
        <a href="https://calendly.com/vijay-01" target="_blank" rel="noopener noreferrer" className="px-5 py-2 rounded-full text-sm font-medium border border-white/10 text-white hover:bg-white/5 transition-all">
          Schedule a Call
        </a>
      </nav>

      <main className="max-w-4xl mx-auto px-8 pt-32 pb-24">
        {/* Section 1: Title + One-line clarity */}
        <header className="mb-16">
          <Link href="/use-cases" className="text-sm text-gray-500 hover:text-white transition-colors mb-4 inline-block">
            ← All Use Cases
          </Link>
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">{data.title}</h1>
          <p className="text-xl text-gray-400 leading-relaxed">{data.subtitle}</p>
        </header>

        {/* Section 2: The Problem */}
        <section className="mb-16">
          <h2 className="text-2xl font-semibold text-white mb-6">The Problem</h2>
          <p className="text-[17px] leading-[1.8] text-gray-300">{data.problem}</p>
        </section>

        {/* Section 3: What We Build */}
        <section className="mb-16">
          <h2 className="text-2xl font-semibold text-white mb-6">What We Build</h2>
          <p className="text-[17px] leading-[1.8] text-gray-300">{data.solution}</p>
        </section>

        {/* Section 4: How It Works */}
        <section className="mb-16">
          <h2 className="text-2xl font-semibold text-white mb-6">How It Works</h2>
          <div className="space-y-4">
            {data.steps.map((step, index) => (
              <div key={index} className="flex items-start gap-4 p-5 rounded-xl border border-white/[0.08] bg-white/[0.02]">
                <div className="w-8 h-8 rounded-full bg-blue-500/10 border border-blue-500/20 flex items-center justify-center flex-shrink-0">
                  <span className="text-blue-400 font-bold text-sm">{index + 1}</span>
                </div>
                <div>
                  <div className="text-white font-medium mb-1">{step.label}</div>
                  <div className="text-gray-400 text-sm">{step.description}</div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Section 5: Revenue Impact (highlighted) */}
        <section className="mb-16 p-8 rounded-2xl border border-blue-500/20 bg-blue-500/[0.02]">
          <h2 className="text-2xl font-semibold text-white mb-6">Revenue Impact</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {data.impact.map((item, index) => (
              <div key={index} className="p-4 rounded-xl bg-black/20 border border-white/[0.06]">
                <div className="text-blue-400 text-2xl font-bold mb-1">{item.value}</div>
                <div className="text-gray-400 text-sm">{item.metric}</div>
              </div>
            ))}
          </div>
        </section>

        {/* Section 6: Before vs After */}
        <section className="mb-16">
          <h2 className="text-2xl font-semibold text-white mb-6">Before vs After</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="p-6 rounded-xl border border-white/[0.08] bg-white/[0.02]">
              <h3 className="text-gray-500 text-sm font-semibold uppercase tracking-wider mb-4">Before</h3>
              <ul className="space-y-3">
                {data.beforeAfter.before.map((item, index) => (
                  <li key={index} className="flex items-start gap-2 text-gray-400 text-sm">
                    <span className="text-red-400 mt-0.5">✕</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="p-6 rounded-xl border border-blue-500/20 bg-blue-500/[0.02]">
              <h3 className="text-blue-400 text-sm font-semibold uppercase tracking-wider mb-4">After</h3>
              <ul className="space-y-3">
                {data.beforeAfter.after.map((item, index) => (
                  <li key={index} className="flex items-start gap-2 text-gray-300 text-sm">
                    <span className="text-green-400 mt-0.5">✓</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* Section 7: Who This Is For */}
        <section className="mb-16">
          <h2 className="text-2xl font-semibold text-white mb-6">Who This Is For</h2>
          <div className="flex flex-wrap gap-3">
            {data.whoItsFor.map((item, index) => (
              <div key={index} className="px-4 py-2 rounded-full border border-white/[0.08] bg-white/[0.02] text-gray-300 text-sm">
                {item}
              </div>
            ))}
          </div>
        </section>

        {/* Section 8: CTA */}
        <section className="p-8 rounded-2xl border border-white/[0.08] bg-white/[0.02]">
          <h2 className="text-2xl font-bold mb-4">See How This Applies to Your Business</h2>
          <p className="text-gray-400 mb-6 max-w-lg">
            Let&apos;s identify where your revenue is leaking and what systems would fix it.
          </p>
          <a href="https://calendly.com/vijay-01" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 bg-white text-black px-6 py-3 rounded-full font-bold hover:bg-gray-200 transition-all text-sm">
            Schedule a Call
          </a>
        </section>
      </main>

      <footer className="py-8 border-t border-white/[0.04] bg-black">
        <div className="max-w-7xl mx-auto px-8 text-center">
          <p className="text-gray-700 text-xs">
            © {new Date().getFullYear()} Govistudio. AI Systems & Product Engineering.
          </p>
        </div>
      </footer>
    </article>
  );
}
