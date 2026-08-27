import Footer from '@/components/Footer';
import Navigation from '@/components/Navigation';

export const metadata = {
  title: 'About | Govistudio',
  description: 'We build technology around businesses, not the other way around. Govistudio combines business thinking, product strategy, AI, automation and software engineering to make businesses work better.',
};

export default function AboutPage() {
  return (
    <article className="min-h-screen bg-black text-white selection:bg-blue-500/30">
      <Navigation />

      <main className="max-w-3xl mx-auto px-8 pt-32 pb-24">
        <header className="mb-16">
          <h1 className="text-5xl font-bold tracking-tight mb-6">
            We build technology around businesses,<br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-purple-400 to-orange-400">
              not the other way around.
            </span>
          </h1>
          <p className="text-xl text-gray-400 leading-relaxed">
            Govistudio exists because businesses often have problems that generic software cannot properly solve.
          </p>
        </header>

        <section className="space-y-8 text-gray-300 leading-relaxed">
          <div>
            <h2 className="text-2xl font-semibold text-white mb-4">Where We Started</h2>
            <p className="text-[17px] leading-[1.8]">
              Govistudio came from working closely with clinics and businesses that were doing well, but still running on messy systems.
            </p>
            <p className="text-[17px] leading-[1.8] mt-4">
              Enquiries tracked on WhatsApp. Patient data sitting in different places. Staff spending hours on things that should take minutes.
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
                <span className="text-cyan-400 mt-1">→</span>
                <span>Building a system so the clinic didn&apos;t miss enquiries when reception was busy.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-purple-400 mt-1">→</span>
                <span>Automating follow-ups that nobody had time to do manually.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-orange-400 mt-1">→</span>
                <span>Connecting systems so staff didn&apos;t have to keep entering the same information in three places.</span>
              </li>
            </ul>
            <p className="text-[17px] leading-[1.8] mt-4">
              Over time, those small fixes turned into full systems. And we realised this is what we do best — understand a business, find where things are breaking, and build technology that actually fits.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-white mb-4">What We Do</h2>
            <p className="text-[17px] leading-[1.8]">
              Today, we build personalized business systems for growing clinics. The focus is simple: help clinics attract, communicate with, follow up with, and manage patients more effectively.
            </p>
            <p className="text-[17px] leading-[1.8] mt-4">
              We combine business thinking, product strategy, UX, AI, automation, software engineering, and integrations. But most of our work doesn&apos;t feel like &quot;building tech&quot;. It feels like sitting inside a clinic, understanding how things actually work, and then building around that reality.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-white mb-4">Our Approach</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
              <div className="p-6 rounded-2xl border border-white/[0.08] bg-white/[0.02]">
                <h3 className="text-white font-semibold mb-2">Business First</h3>
                <p className="text-gray-400 text-sm">We understand your operations before we touch any technology. The goal is not to use the newest technology — it&apos;s to make the business work better.</p>
              </div>
              <div className="p-6 rounded-2xl border border-white/[0.08] bg-white/[0.02]">
                <h3 className="text-white font-semibold mb-2">Honest Assessment</h3>
                <p className="text-gray-400 text-sm">If something won&apos;t work, we say it early. If something can be simpler, we don&apos;t overbuild it. Sometimes we&apos;ll tell you not to build anything.</p>
              </div>
              <div className="p-6 rounded-2xl border border-white/[0.08] bg-white/[0.02]">
                <h3 className="text-white font-semibold mb-2">Ongoing Partnership</h3>
                <p className="text-gray-400 text-sm">Once a system is live, that&apos;s where the real work starts. Real clinics change. We stay involved and keep improving.</p>
              </div>
              <div className="p-6 rounded-2xl border border-white/[0.08] bg-white/[0.02]">
                <h3 className="text-white font-semibold mb-2">Outcome-Focused</h3>
                <p className="text-gray-400 text-sm">The goal is not to deliver software. The goal is to make the clinic run with less friction, fewer missed opportunities, and more clarity.</p>
              </div>
            </div>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-white mb-4">Values</h2>
            <div className="space-y-4 mt-6">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center flex-shrink-0">
                  <span className="text-cyan-400 font-bold">1</span>
                </div>
                <div>
                  <h3 className="text-white font-semibold">Honesty</h3>
                  <p className="text-gray-400 text-sm mt-1">We say what works and what doesn&apos;t. No overselling, no hiding problems.</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-purple-500/10 border border-purple-500/20 flex items-center justify-center flex-shrink-0">
                  <span className="text-purple-400 font-bold">2</span>
                </div>
                <div>
                  <h3 className="text-white font-semibold">Ownership</h3>
                  <p className="text-gray-400 text-sm mt-1">We build systems we&apos;re responsible for. Not just code we hand off and forget.</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-orange-500/10 border border-orange-500/20 flex items-center justify-center flex-shrink-0">
                  <span className="text-orange-400 font-bold">3</span>
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
          <h2 className="text-2xl font-bold mb-4">Tell Us What&apos;s Slowing You Down</h2>
          <p className="text-gray-400 mb-6 max-w-lg">
            If your clinic has workflows that should run smoother, patients who aren&apos;t being followed up, or systems that don&apos;t connect — let&apos;s talk.
          </p>
          <a href="https://calendly.com/vijay-01" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 bg-white text-black px-6 py-3 rounded-full font-bold hover:bg-gray-200 transition-all text-sm">
            Talk to Govistudio
          </a>
        </section>
      </main>

      <Footer />
    </article>
  );
}
