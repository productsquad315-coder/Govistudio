import FeatureCard from './FeatureCard';

const processSteps = [
  { number: '01', title: 'Understand', desc: 'We learn how your clinic actually operates.' },
  { number: '02', title: 'Find', desc: "We identify where you're losing time, patients or money." },
  { number: '03', title: 'Build', desc: 'We design and build the right solution around your existing workflow.' },
  { number: '04', title: 'Improve', desc: 'We keep improving the system as your clinic and its needs change.' },
];

const stepColors = [
  'from-cyan-400 to-blue-500',
  'from-purple-400 to-indigo-500',
  'from-blue-400 to-cyan-500',
  'from-orange-400 to-amber-500',
];

const ProcessSection = () => {
  return (
    <section id="process" className="bg-[#0A0A0B] pt-12 sm:pt-16 lg:pt-24 pb-12 sm:pb-16 lg:pb-24 relative overflow-hidden">

      {/* Subtle grid dot overlay */}
      <div className="absolute inset-0 opacity-[0.03] bg-[radial-gradient(circle,white_1px,transparent_1px)] bg-[size:24px_24px] z-0 pointer-events-none" />
      {/* GPU glow for premium dark feel */}
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[520px] sm:w-[700px] lg:w-[800px] h-[360px] sm:h-[460px] lg:h-[500px] bg-gradient-to-r from-blue-500/10 via-purple-500/10 to-transparent blur-[64px] opacity-40 pointer-events-none" />

      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 relative z-10 w-full">

        <div className="text-center mb-8 sm:mb-12 lg:mb-16">
          <h2 className="animate-fade-in-up text-[28px] sm:text-[36px] md:text-[40px] lg:text-[48px] font-bold tracking-tight text-white mb-4 leading-[1.1]">
            From a problem to<br />a system that works.
          </h2>

          <p className="animate-fade-in animation-delay-100 text-zinc-400 text-[15px] sm:text-[16px] max-w-2xl mx-auto leading-relaxed px-2">
            Every system starts with understanding. Not technology.
          </p>
        </div>

        {/* ── Mock Pipeline UI (Hero FeatureCard) ── */}
        <div className="animate-fade-in-up animation-delay-300 w-full max-w-4xl mx-auto mb-10 sm:mb-14 lg:mb-16">
          {/* Mobile/tablet: dedicated layout */}
          <div className="lg:hidden">
            <div className="relative rounded-2xl border border-white/[0.08] bg-[#09090B] overflow-hidden">
              <div className="p-4 sm:p-5">
                <div className="relative min-h-[240px] sm:min-h-[280px] h-auto overflow-hidden rounded-xl border border-white/[0.06] bg-[#0F1117]">
                  <div className="absolute inset-0 opacity-[0.06] bg-[radial-gradient(circle,white_1px,transparent_1px)] bg-[size:24px_24px]" />
                  <div className="relative h-full w-full p-3 sm:p-4 pb-6 sm:pb-8">
                    <div className="grid grid-cols-4 gap-1.5 sm:gap-2 mb-4">
                      {['Understand', 'Find', 'Build', 'Improve'].map((stage, i) => (
                        <div
                          key={stage}
                          className={`text-center py-1.5 sm:py-2 rounded-md text-[8px] sm:text-[9px] uppercase tracking-widest font-bold ${
                            i === 2
                              ? 'bg-blue-500/10 text-blue-400 border border-blue-500/20'
                              : 'bg-white/5 text-zinc-500 border border-white/5'
                          }`}
                        >
                          {stage}
                        </div>
                      ))}
                    </div>

                    <div className="w-full h-1 bg-white/5 rounded-full mb-4 overflow-hidden">
                      <div className="h-full w-[65%] bg-blue-500 rounded-full" />
                    </div>

                    <div className="rounded-lg border border-white/[0.05] bg-black/30 p-2.5 sm:p-3 font-mono text-[10px] leading-relaxed text-zinc-500">
                      <div className="flex gap-3">
                        <span className="text-zinc-700">❯</span>
                        <span className="text-blue-400/80">Connecting WhatsApp integration...</span>
                      </div>
                      <div className="flex gap-3 mt-2">
                        <span className="text-zinc-700">❯</span>
                        <span className="text-emerald-500/80">✓ Patient follow-up system live</span>
                      </div>
                    </div>
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent pointer-events-none" />
                </div>

                <div className="mt-5 sm:mt-6">
                  <h3 className="text-white text-lg sm:text-xl font-semibold">Clinic System Deployment.</h3>
                  <p className="mt-2 text-white/60 text-sm leading-relaxed">
                    Track every stage from understanding to live system.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Desktop: existing FeatureCard */}
          <div className="hidden lg:block">
            <FeatureCard
              title="Clinic System Deployment."
              description="Track every stage from understanding to live system."
              className="h-auto pb-24"
              mockUI={
                <div className="w-full h-full flex flex-col p-6 bg-[#09090B]">
                  {/* Pipeline Stages */}
                  <div className="grid grid-cols-4 gap-3 mb-8">
                    {['Understand', 'Find', 'Build', 'Improve'].map((stage, i) => (
                      <div key={i} className={`text-center py-3 rounded-lg text-[10px] uppercase tracking-widest font-bold transition-all ${i === 2
                          ? 'bg-blue-500/10 text-blue-400 border border-blue-500/20 shadow-[inset_0_0_15px_rgba(59,130,246,0.1)]'
                          : i < 2
                            ? 'bg-white/5 text-zinc-500 border border-white/5'
                            : 'bg-black text-zinc-700 border border-white/[0.02]'
                        }`}>
                        {stage}
                      </div>
                    ))}
                  </div>

                  {/* Progress bar */}
                  <div className="w-full h-1 bg-white/5 rounded-full mb-10 overflow-hidden">
                    <div className="h-full w-[65%] bg-blue-500 shadow-[0_0_15px_rgba(59,130,246,0.5)] rounded-full" />
                  </div>

                  {/* Terminal Log Output UI */}
                  <div className="bg-black/40 rounded-xl border border-white/[0.05] p-4 font-mono text-[11px] leading-relaxed text-zinc-500 relative overflow-hidden">
                    <div className="flex gap-4 mb-2">
                      <span className="text-zinc-700">❯</span>
                      <span className="text-blue-400/80">Connecting WhatsApp integration...</span>
                    </div>
                    <div className="flex gap-4 mb-2">
                      <span className="text-zinc-700">❯</span>
                      <span className="text-emerald-500/80">✓ Patient follow-up system live</span>
                    </div>
                    <div className="flex gap-4 mb-2 opacity-40">
                      <span className="text-zinc-700">❯</span>
                      <span className="text-zinc-500 animate-pulse">Running recall campaign test...</span>
                    </div>
                  </div>
                </div>
              }
            />
          </div>
        </div>

        {/* Step Text explanations — numbers now visible */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 max-w-5xl mx-auto">
          {processSteps.map((step, i) => (
            <div
              key={i}
              className="relative animate-fade-in-up group p-4 sm:p-5 rounded-2xl border border-white/[0.06] bg-white/[0.02] hover:bg-white/[0.04] transition-all duration-500"
              style={{ animationDelay: `${i * 150}ms` }}
            >
              <span className={`text-[40px] sm:text-[48px] lg:text-[56px] font-black block mb-3 sm:mb-4 leading-none bg-gradient-to-b ${stepColors[i]} bg-clip-text text-transparent opacity-30 group-hover:opacity-60 transition-opacity duration-500`}>
                {step.number}
              </span>
              <h3 className="text-[16px] sm:text-[18px] font-bold text-white mb-1.5 sm:mb-2">{step.title}</h3>
              <p className="text-zinc-400 leading-relaxed text-[13px] sm:text-[14px]">{step.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;
