import React from 'react';
import { Search, CheckCircle2, ArrowRight } from 'lucide-react';

export default function Positioning() {
  return (
    <section id="positioning" className="bg-[#0A0A0B] py-20 sm:py-28 lg:py-32 relative overflow-hidden">
      {/* Background Grid & Glow */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f10_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f10_1px,transparent_1px)] bg-[size:24px_24px] opacity-20" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-[500px] bg-cyan-500/10 blur-[120px] rounded-full mix-blend-screen transform-gpu will-change-transform" />
      
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 relative z-10">
        
        {/* Heading */}
        <div className="text-center mb-16 sm:mb-24">
          <h2 className="animate-fade-in-up text-[32px] sm:text-[40px] md:text-[52px] font-bold tracking-tight leading-[1.1] text-white">
            We don't start with AI.<br/>
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 via-purple-400 to-orange-400">
              We start with your clinic.
            </span>
          </h2>
        </div>

        {/* Two Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center mb-20">
          
          {/* Left Column - Copy */}
          <div className="space-y-12 animate-fade-in animation-delay-100">
            <div className="space-y-4">
              <p className="text-zinc-500 text-[12px] font-bold uppercase tracking-widest">Other tools</p>
              <p className="text-zinc-400 text-[28px] leading-tight">"Here's what our software does."</p>
            </div>

            <div className="space-y-4">
              <p className="text-cyan-400 text-[12px] font-bold uppercase tracking-widest">Govistudio</p>
              <p className="text-white font-medium text-[36px] leading-tight">"Show us how your clinic works."</p>
            </div>
          </div>

          {/* Right Column - Mock UI */}
          <div className="relative animate-fade-in-up animation-delay-200">
            {/* Glow behind card */}
            <div className="absolute inset-0 bg-purple-500/20 blur-3xl rounded-3xl" />
            
            <div className="relative bg-[#12141A] rounded-2xl border border-white/[0.05] shadow-2xl overflow-hidden">
              {/* Title Bar */}
              <div className="flex items-center gap-3 px-5 py-4 border-b border-white/[0.05] bg-[#0A0A0B]/50">
                <Search className="w-4 h-4 text-zinc-500" />
                <span className="text-[14px] text-zinc-300 font-medium">What We Learn</span>
              </div>
              
              {/* List */}
              <div className="p-3">
                {[
                  "How new patients find the clinic",
                  "How enquiries are handled",
                  "How appointments are booked",
                  "How staff communicate",
                  "Where follow-ups happen",
                  "What the team repeatedly does",
                  "Where patients get lost",
                  "Which systems are already being used"
                ].map((item, i) => (
                  <div 
                    key={i} 
                    className="flex items-center gap-3 px-3 py-2.5 rounded-lg hover:bg-white/[0.02] transition-colors group"
                  >
                    <CheckCircle2 className="w-4 h-4 text-cyan-400/50 group-hover:text-cyan-400 transition-colors flex-shrink-0" />
                    <span className="text-[14px] text-zinc-400 group-hover:text-zinc-200 transition-colors">
                      {item}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Closing Copy */}
        <div className="text-center max-w-3xl mx-auto space-y-6">
          <p className="text-[20px] sm:text-[24px] text-white font-medium mb-8">
            We identify where technology can actually help.
          </p>
          
          <div className="flex flex-col gap-3 text-zinc-400 text-[16px] sm:text-[18px]">
            <p className="animate-fade-in animation-delay-300">Sometimes that's AI.</p>
            <p className="animate-fade-in animation-delay-400">Sometimes it's automation.</p>
            <p className="animate-fade-in animation-delay-500">Sometimes it's an integration.</p>
            <p className="animate-fade-in animation-delay-600">Sometimes it's custom software.</p>
          </div>
          
          <p className="text-[20px] sm:text-[24px] text-white font-bold mt-12 animate-fade-in animation-delay-700">
            And sometimes we'll tell you not to build anything.
          </p>
        </div>

      </div>
    </section>
  );
}
