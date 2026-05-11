'use client';

const FinalCTA = () => (
  <section id="contact" className="relative py-16 sm:py-20 lg:py-24 overflow-hidden bg-black flex flex-col items-center justify-center">

    {/* Noise Texture Overlay */}
    <div className="noise z-0 opacity-[0.05]" />

    {/* Subtle central glow */}
    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] sm:w-[600px] h-[300px] sm:h-[400px] pointer-events-none z-0">
      <div className="absolute w-full h-full bg-gradient-to-r from-cyan-500/10 via-purple-500/10 to-orange-500/10 blur-[120px] opacity-60" />
    </div>

    <div className="relative z-10 w-full max-w-5xl mx-auto px-4 sm:px-6">
      <div className="bg-[#12141A] rounded-[24px] sm:rounded-[32px] border border-white/[0.05] p-8 sm:p-10 md:p-16 lg:p-20 flex flex-col md:flex-row items-center gap-8 sm:gap-12 relative overflow-hidden group">

        {/* Animated border sweep on container hover */}
        <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none">
          <div className="absolute inset-0 border-[1px] border-white/20 rounded-[24px] sm:rounded-[32px] border-sweep" />
        </div>

        <div className="flex-1 text-center md:text-left">
          <span className="text-[11px] tracking-[0.3em] uppercase text-zinc-500 font-bold mb-4 sm:mb-6 block">
            Start Your Journey
          </span>
          <h2 className="text-[28px] sm:text-[36px] md:text-[44px] lg:text-[52px] font-bold tracking-tight text-white mb-4 sm:mb-6 leading-[1.1]">
            Ready to Build Your<br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-purple-400 to-orange-400">AI Advantage?</span>
          </h2>
          <p className="text-zinc-400 text-base sm:text-lg max-w-md leading-relaxed mx-auto md:mx-0">
            Book a discovery call. We&apos;ll understand your business, identify AI opportunities, and map next steps.
          </p>
        </div>

        <div className="md:w-auto w-full flex flex-col items-center md:items-end gap-4 sm:gap-6 shrink-0">
          <a
            href="https://calendly.com/vijay-01"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full md:w-auto px-8 sm:px-10 py-4 sm:py-5 bg-white text-black font-bold rounded-full hover:bg-zinc-100 hover:scale-105 active:scale-95 transition-all duration-200 text-[15px] sm:text-[16px] shadow-[0_20px_40px_rgba(255,255,255,0.1)] relative z-20 overflow-hidden group/btn inline-block text-center"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-cyan-400/10 via-purple-400/10 to-orange-400/10 opacity-0 group-hover/btn:opacity-100 transition-opacity" />
            <span className="relative z-10">Schedule a Discovery Call</span>
          </a>

          <div className="flex flex-wrap items-center justify-center md:justify-end gap-x-3 sm:gap-x-4 gap-y-2 text-zinc-600 text-[11px] sm:text-[12px] font-medium tracking-wide">
            <span className="flex items-center gap-1.5"><div className="w-1.5 h-1.5 rounded-full bg-green-500/50" /> 30-minute session</span>
            <span className="w-1 h-1 rounded-full bg-zinc-800 hidden sm:block" />
            <span>No pressure</span>
            <span className="w-1 h-1 rounded-full bg-zinc-800 hidden sm:block" />
            <span>Clear direction</span>
          </div>
        </div>

        {/* Diagonal Light Beam Aesthetic */}
        <div className="absolute -top-1/2 -right-1/4 w-px h-[200%] bg-gradient-to-b from-transparent via-white/5 to-transparent rotate-45 pointer-events-none" />
      </div>
    </div>
  </section>
);

export default FinalCTA;

