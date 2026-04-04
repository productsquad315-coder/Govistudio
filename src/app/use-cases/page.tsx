import Link from 'next/link';
import UseCaseCard from '@/components/UseCaseCard';
import { useCases } from '@/lib/useCases';
import Footer from '@/components/Footer';
import Logo from '@/components/Logo';

export const metadata = {
  title: 'Use Cases | GOVI Studio',
  description: 'Real workflows we transform into automated, intelligence-driven systems. See how we recover lost revenue and improve operations for traditional businesses.',
};

export default function UseCasesPage() {
  return (
    <article className="min-h-screen bg-black text-white selection:bg-blue-500/30">
      <nav className="fixed top-0 w-full z-50 px-8 py-5 flex justify-between items-center backdrop-blur-2xl border-b border-white/[0.06] bg-black/60">
        <Logo showText={false} />
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

      <main className="max-w-7xl mx-auto px-8 pt-32 pb-24">
        <header className="mb-20">
          <h1 className="text-5xl font-bold tracking-tight mb-6">Use Cases</h1>
          <p className="text-xl text-gray-400 leading-relaxed max-w-2xl">
            Real workflows we transform into automated, intelligence-driven systems. Each use case shows how we recover lost revenue and improve operations.
          </p>
        </header>

        <section className="mb-20 p-8 rounded-3xl border border-white/[0.08] bg-white/[0.02]">
          <h2 className="text-2xl font-bold mb-4">What This Actually Solves</h2>
          <p className="text-gray-400 leading-relaxed mb-6">
            This is not about adding more tools. It&apos;s about removing the silent losses inside a business:
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="p-4 rounded-xl border border-white/[0.06] bg-black/20">
              <span className="text-gray-500 text-sm">Missed follow-ups</span>
            </div>
            <div className="p-4 rounded-xl border border-white/[0.06] bg-black/20">
              <span className="text-gray-500 text-sm">Delayed decisions</span>
            </div>
            <div className="p-4 rounded-xl border border-white/[0.06] bg-black/20">
              <span className="text-gray-500 text-sm">Poor execution</span>
            </div>
            <div className="p-4 rounded-xl border border-white/[0.06] bg-black/20">
              <span className="text-gray-500 text-sm">Stuck payments</span>
            </div>
          </div>
          <p className="text-gray-300 leading-relaxed mt-6">
            Most businesses don&apos;t need more demand. They need to stop leaking revenue they&apos;ve already earned. That&apos;s what these systems fix.
          </p>
        </section>

        <section>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {useCases.map((useCase, index) => (
              <UseCaseCard
                key={useCase.slug}
                title={useCase.title}
                problem={useCase.problem}
                solution={useCase.solution}
                impact={useCase.impact.map(i => `${i.metric}: ${i.value}`).join(' • ')}
                index={index}
                slug={useCase.slug}
              />
            ))}
          </div>
        </section>

        <section className="mt-20 p-10 rounded-3xl border border-blue-500/20 bg-blue-500/[0.02]">
          <h2 className="text-2xl font-bold mb-4">See How This Applies to Your Business</h2>
          <p className="text-gray-400 mb-6 max-w-lg">
            Every business has different bottlenecks. Let&apos;s identify where your revenue is leaking and what systems would fix it.
          </p>
          <a href="https://calendly.com/vijay-01" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 bg-white text-black px-6 py-3 rounded-full font-bold hover:bg-gray-200 transition-all text-sm">
            Schedule a Call
          </a>
        </section>
      </main>

      <Footer />
    </article>
  );
}
