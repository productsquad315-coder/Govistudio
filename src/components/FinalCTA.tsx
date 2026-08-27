const FinalCTA = () => (
  <section id="contact" className="relative py-24 sm:py-32 bg-black flex flex-col items-center justify-center border-t border-white/[0.05]">
    <div className="relative z-10 w-full max-w-4xl mx-auto px-4 sm:px-6 text-center">
      <h2 className="text-[36px] sm:text-[48px] md:text-[60px] font-bold tracking-tight text-white mb-6 leading-[1.1]">
        What&apos;s slowing your clinic down?
      </h2>
      <p className="text-zinc-400 text-lg sm:text-xl max-w-2xl mx-auto leading-relaxed mb-10">
        Tell us what&apos;s happening in your own words. We&apos;ll look at it, identify the opportunity, and tell you what we&apos;d do.
      </p>

      <a
        href="https://calendly.com/vijay-01"
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center justify-center px-8 py-4 bg-white text-black font-bold rounded-full hover:bg-zinc-200 transition-colors text-[16px]"
      >
        Tell Us About Your Clinic
      </a>
    </div>
  </section>
);

export default FinalCTA;
