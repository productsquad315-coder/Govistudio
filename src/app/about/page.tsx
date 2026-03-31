import Link from 'next/link';
import Footer from '@/components/Footer';

export const metadata = {
  title: 'About Us | GOVI Studio',
  description: 'We build software-driven AI systems for traditional businesses. Reduce manual work, make decisions clearer, and improve how the business runs day to day.',
};

export default function AboutPage() {
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
          <a href="/about" className="text-white transition-colors">About</a>
          <a href="/#contact" className="hover:text-white transition-colors">Contact</a>
        </div>
        <a href="https://calendly.com/vijay-01" target="_blank" rel="noopener noreferrer" className="px-5 py-2 rounded-full text-sm font-medium border border-white/10 text-white hover:bg-white/5 transition-all">
          Schedule a Call
        </a>
      </nav>

      <main className="max-w-3xl mx-auto px-8 pt-32 pb-24">
        <header className="mb-16">
          <h1 className="text-5xl font-bold tracking-tight mb-6">About Us</h1>
          <p className="text-xl text-gray-400 leading-relaxed">
            We build software-driven AI systems for traditional businesses.
          </p>
        </header>

        <section className="space-y-8 text-gray-300 leading-relaxed">
          <div>
            <h2 className="text-2xl font-semibold text-white mb-4">Where We Started</h2>
            <p className="text-[17px] leading-[1.8]">
              Govistudio came from working closely with businesses that were doing well, but still running on messy systems.
            </p>
            <p className="text-[17px] leading-[1.8] mt-4">
              Orders tracked on calls and WhatsApp. Data sitting in different places. People spending hours on things that should take minutes.
            </p>
            <p className="text-[17px] leading-[1.8] mt-4">
              Nothing was completely broken, but nothing was really working properly either.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-white mb-4">How We Work</h2>
            <p className="text-[17px] leading-[1.8]">
              We didn&apos;t start with a big idea. We started by fixing small things.
            </p>
            <ul className="mt-4 space-y-3 text-[17px]">
              <li className="flex items-start gap-3">
                <span className="text-blue-400 mt-1">→</span>
                <span>Automating a report that someone was making every night.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-blue-400 mt-1">→</span>
                <span>Cleaning up a process that kept causing delays.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-blue-400 mt-1">→</span>
                <span>Building a simple system so the owner didn&apos;t have to keep asking for updates.</span>
              </li>
            </ul>
            <p className="text-[17px] leading-[1.8] mt-4">
              Over time, those small fixes turned into full systems.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-white mb-4">What We Do</h2>
            <p className="text-[17px] leading-[1.8]">
              Today, we build software-driven AI systems for traditional businesses. The focus is simple: reduce manual work, make decisions clearer, and improve how the business runs day to day.
            </p>
            <p className="text-[17px] leading-[1.8] mt-4">
              We are a team of developers, designers, product managers, and AI engineers. But most of our work doesn&apos;t feel like &quot;building tech&quot;. It feels like sitting inside a business, understanding how things actually move, and then structuring it properly.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-white mb-4">Our Approach</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
              <div className="p-6 rounded-2xl border border-white/[0.08] bg-white/[0.02]">
                <h3 className="text-white font-semibold mb-2">AI Where It Helps</h3>
                <p className="text-gray-400 text-sm">We don&apos;t push AI where it&apos;s not needed. In many cases, basic systems solve more problems than complex models.</p>
              </div>
              <div className="p-6 rounded-2xl border border-white/[0.08] bg-white/[0.02]">
                <h3 className="text-white font-semibold mb-2">Direct Communication</h3>
                <p className="text-gray-400 text-sm">If something won&apos;t work, we say it early. If something can be simpler, we don&apos;t overbuild it.</p>
              </div>
              <div className="p-6 rounded-2xl border border-white/[0.08] bg-white/[0.02]">
                <h3 className="text-white font-semibold mb-2">Ongoing Involvement</h3>
                <p className="text-gray-400 text-sm">Once a system is live, that&apos;s where the real work starts. Real businesses change. We stay involved and keep improving.</p>
              </div>
              <div className="p-6 rounded-2xl border border-white/[0.08] bg-white/[0.02]">
                <h3 className="text-white font-semibold mb-2">Outcome-Focused</h3>
                <p className="text-gray-400 text-sm">The goal is not to deliver software. The goal is to make the business run with less friction and more clarity.</p>
              </div>
            </div>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-white mb-4">Values</h2>
            <div className="space-y-4 mt-6">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-blue-500/10 border border-blue-500/20 flex items-center justify-center flex-shrink-0">
                  <span className="text-blue-400 font-bold">1</span>
                </div>
                <div>
                  <h3 className="text-white font-semibold">Honesty</h3>
                  <p className="text-gray-400 text-sm mt-1">We say what works and what doesn&apos;t. No overselling, no hiding problems.</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-blue-500/10 border border-blue-500/20 flex items-center justify-center flex-shrink-0">
                  <span className="text-blue-400 font-bold">2</span>
                </div>
                <div>
                  <h3 className="text-white font-semibold">Ownership</h3>
                  <p className="text-gray-400 text-sm mt-1">We build systems we&apos;re responsible for. Not just code we hand off and forget.</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-blue-500/10 border border-blue-500/20 flex items-center justify-center flex-shrink-0">
                  <span className="text-blue-400 font-bold">3</span>
                </div>
                <div>
                  <h3 className="text-white font-semibold">Clarity</h3>
                  <p className="text-gray-400 text-sm mt-1">Simple explanations, clear outcomes. No jargon, no unnecessary complexity.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="mt-20 p-10 rounded-3xl border border-white/[0.08] bg-white/[0.02]">
          <h2 className="text-2xl font-bold mb-4">Work With Us</h2>
          <p className="text-gray-400 mb-6 max-w-lg">
            If your business has workflows that should run smoother, let&apos;s talk.
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
