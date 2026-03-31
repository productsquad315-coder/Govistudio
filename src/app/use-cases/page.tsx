import Link from 'next/link';
import UseCaseCard from '@/components/UseCaseCard';

export const metadata = {
  title: 'Use Cases | GOVI Studio',
  description: 'Real workflows we transform into automated, intelligence-driven systems. See how we recover lost revenue and improve operations for traditional businesses.',
};

const useCases = [
  {
    title: 'Turning Missed Enquiries into Closed Deals',
    problem: 'Most businesses don\'t lose deals because of competition. They lose them because no one followed up properly. Leads come from calls, website forms, referrals, text messages. Some get tracked, most don\'t. Follow-ups are inconsistent. The deal doesn\'t get rejected. It just fades.',
    solution: 'We build a system that captures every lead, assigns ownership, and ensures consistent follow-up until there\'s a clear outcome. No lead sits idle.',
    impact: '20–40% increase in conversion from existing leads. No additional ad spend required. A business doing $100K/month can realistically add $20K–$40K/month just by fixing follow-ups.',
  },
  {
    title: 'Faster Quotes, Higher Margins',
    problem: 'Quoting is where deals are won or lost. In most businesses: pricing is inconsistent, quotes take hours or days, approvals slow everything down. By the time the quote is sent, the buyer has already moved forward.',
    solution: 'We build a system where pricing logic is structured, quotes are generated instantly, and approvals are streamlined. No delays. No guesswork.',
    impact: 'Faster response increases win rate. Better pricing discipline improves margins. 5–15% lift in revenue per deal. For a business doing $250K/month, this adds $12K–$35K/month.',
  },
  {
    title: 'Real-Time Visibility Without Chasing Your Team',
    problem: 'Owners and operators spend too much time asking questions: What got done today? What\'s pending? Where are we stuck? Information exists, but it\'s scattered.',
    solution: 'We build systems that pull data from daily operations and present it clearly. Automated summaries, key metrics, and issues are visible without asking anyone. No chasing updates.',
    impact: 'Faster decisions reduce delays and missed work. Issues are caught early before they turn into losses. 5–10% increase in operational output. On a $500K/month operation, even a 5% lift = $25K/month.',
  },
  {
    title: 'Work Gets Done Without Constant Follow-Ups',
    problem: 'Most teams rely on verbal instructions and memory. Tasks are assigned, but: no clear ownership, no tracking, no accountability. Things slip. Deadlines move. Clients feel it.',
    solution: 'We build execution systems where every task is tracked, owned, and visible. Delays trigger action automatically. No micromanagement needed.',
    impact: 'More work completed in the same time. Fewer errors and rework costs. Better delivery → higher retention. Repeat business alone can increase revenue by 15–25% annually.',
  },
  {
    title: 'Getting Paid Faster (Without Awkward Follow-Ups)',
    problem: 'Revenue isn\'t real until it\'s collected. Most businesses: don\'t track receivables properly, follow up late, let payments slip. Cash gets stuck for weeks or months.',
    solution: 'We build systems that track every invoice, automate reminders, and flag delays early. No dependence on manual tracking.',
    impact: '15–30 day reduction in payment cycles. Stronger cash flow without increasing sales. More capital available to reinvest. For a business with $1M tied in receivables, even a 20-day improvement unlocks ~$50K–$70K in usable cash.',
  },
];

export default function UseCasesPage() {
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
                key={index}
                title={useCase.title}
                problem={useCase.problem}
                solution={useCase.solution}
                impact={useCase.impact}
                index={index}
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

      <footer className="py-16 border-t border-white/[0.06] bg-black">
        <div className="max-w-7xl mx-auto px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
            <div>
              <div className="font-bold text-lg tracking-tight mb-4">
                <span className="text-white">GOVI</span>
                <span className="text-gray-500 ml-1 font-normal">STUDIO</span>
              </div>
              <p className="text-gray-500 text-sm leading-relaxed">
                Systems that make businesses run better.
              </p>
            </div>
            <div>
              <h4 className="text-white text-sm font-semibold mb-4 uppercase tracking-wider">Company</h4>
              <ul className="space-y-2">
                <li><a href="/about" className="text-gray-500 hover:text-white transition-colors text-sm">About Us</a></li>
                <li><a href="/use-cases" className="text-white transition-colors text-sm">Use Cases</a></li>
                <li><a href="/blog" className="text-gray-500 hover:text-white transition-colors text-sm">Blog</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-white text-sm font-semibold mb-4 uppercase tracking-wider">Legal</h4>
              <ul className="space-y-2">
                <li><a href="/privacy" className="text-gray-500 hover:text-white transition-colors text-sm">Privacy Policy</a></li>
                <li><a href="/terms" className="text-gray-500 hover:text-white transition-colors text-sm">Terms</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-white text-sm font-semibold mb-4 uppercase tracking-wider">Contact</h4>
              <ul className="space-y-2">
                <li><a href="https://calendly.com/vijay-01" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-white transition-colors text-sm">Schedule a Call</a></li>
                <li><a href="mailto:hello@govistudio.com" className="text-gray-500 hover:text-white transition-colors text-sm">hello@govistudio.com</a></li>
              </ul>
            </div>
          </div>
          <div className="pt-8 border-t border-white/[0.06] text-center">
            <p className="text-gray-600 text-sm">
              © {new Date().getFullYear()} GOVI STUDIO. AI Systems & Product Engineering.
            </p>
          </div>
        </div>
      </footer>
    </article>
  );
}
