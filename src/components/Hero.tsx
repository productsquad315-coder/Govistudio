'use client';

import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-[#0A0A0B] text-white py-24 flex flex-col items-center justify-center">
      
      {/* Noise Texture Overlay */}
      <div className="noise z-0" />

      {/* Grid Texture Overlay */}
      <div className="absolute inset-0 opacity-[0.03] bg-[radial-gradient(circle,white_1px,transparent_1px)] bg-[size:24px_24px] z-0 pointer-events-none" />

      {/* GPU Blur Glow Behind Frame */}
      <div className="absolute left-1/2 top-[60%] -translate-x-1/2 -translate-y-1/2 w-[900px] h-[600px] pointer-events-none z-0">
        <div className="absolute w-full h-full bg-gradient-to-r from-cyan-500/30 via-purple-500/20 to-orange-500/30 blur-[120px] opacity-50" />
      </div>

      {/* Minimal decorative nodes — static, no infinite animations */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.15] z-0 overflow-hidden">
        <svg className="absolute w-full h-full" viewBox="0 0 1200 800" fill="none">
          <motion.path
            d="M200 300 L600 400 L1000 350 M600 400 L600 700 M400 550 L600 400 L800 550"
            stroke="white"
            strokeWidth="0.5"
            strokeDasharray="4 4"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ pathLength: 1, opacity: 1 }}
            transition={{ duration: 2, delay: 1 }}
          />
        </svg>
        {/* Static dots instead of infinite animations */}
        <div className="absolute left-[20%] top-[30%] w-1.5 h-1.5 bg-cyan-400 rounded-full shadow-[0_0_10px_rgba(34,211,238,0.5)]" />
        <div className="absolute right-[20%] top-[40%] w-1.5 h-1.5 bg-purple-400 rounded-full shadow-[0_0_10px_rgba(168,85,247,0.5)]" />
        <div className="absolute left-[40%] top-[70%] w-1.5 h-1.5 bg-orange-400 rounded-full shadow-[0_0_10px_rgba(251,146,60,0.5)]" />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-6 text-center mt-12 w-full">
        
        <motion.div initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.2 }} className="mb-6">
          <span className="text-[13px] tracking-[0.2em] uppercase text-zinc-500 font-medium">GOVI STUDIO</span>
        </motion.div>

        <motion.h1
          className="text-[clamp(3.5rem,8vw,5.5rem)] font-bold tracking-tight text-white mb-6 leading-[1.05]"
          initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          Build AI Systems<br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-purple-400 to-orange-400">That Drive Revenue.</span>
        </motion.h1>

        <motion.p
          className="mt-6 text-zinc-400 max-w-2xl mx-auto text-lg leading-relaxed"
          initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3, duration: 0.8 }}
        >
          We build production-ready AI systems that automate operations and unlock new revenue streams.
        </motion.p>

        <motion.div
           className="mt-10 mb-10 flex flex-col items-center gap-4"
           initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.5, duration: 0.8 }}
        >
           <a href="https://calendly.com/vijay-01" target="_blank" rel="noopener noreferrer" className="px-8 py-3.5 bg-white text-black font-semibold rounded-full hover:bg-zinc-200 transition-all text-[15px] shadow-[0_0_30px_rgba(255,255,255,0.1)] inline-block">
             Schedule a Discovery Call
           </a>
           <div className="text-zinc-500 text-sm max-w-sm mx-auto text-center leading-relaxed">
             <p>30-min working session. No pitch. Just clarity.</p>
           </div>
        </motion.div>

        {/* Mock UI */}
        <motion.div
          initial={{ opacity: 0, y: 40, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ delay: 0.7, duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="w-full max-w-5xl mx-auto flex justify-center"
        >
          <div className="relative w-full rounded-[18px] p-[2px] border-sweep shadow-[0_0_40px_rgba(0,212,255,0.1),0_0_60px_rgba(123,97,255,0.1),0_0_80px_rgba(255,122,0,0.05)]">
            
            <div className="bg-[#0F1115] rounded-[16px] border border-white/10 overflow-hidden text-left relative z-10 h-[420px] md:h-auto flex flex-col">
              
              {/* Fake UI Header */}
              <div className="flex items-center gap-2 px-5 py-3 border-b border-white/[0.04] bg-[#0A0A0B]/80 backdrop-blur-md">
                <div className="flex gap-1.5">
                  <div className="w-2.5 h-2.5 rounded-full bg-red-500/80" />
                  <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/80" />
                  <div className="w-2.5 h-2.5 rounded-full bg-green-500/80" />
                </div>
                <div className="ml-4 flex items-center bg-white/5 rounded-md px-3 py-1 text-[11px] text-zinc-500 font-mono w-64 border border-white/[0.05]">
                  <svg className="w-3 h-3 mr-2 opacity-50" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
                  Search projects...
                </div>
              </div>

              {/* Fake UI Content */}
              <div className="p-6 md:p-8 flex-1 overflow-hidden flex flex-col">
                
                {/* Stats */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
                  {[
                    { label: 'System Uptime', val: '99.99%', color: 'text-cyan-400 border-l-cyan-500/50' },
                    { label: 'Ops Automated', val: '+240%', color: 'text-purple-400 border-l-purple-500/50' },
                    { label: 'Revenue Growth', val: '$1.2M', color: 'text-orange-400 border-l-orange-500/50' },
                    { label: 'Active Agents', val: '14/14', color: 'text-green-400 border-l-green-500/50' },
                  ].map((s, i) => (
                    <div key={i} className={`bg-transparent p-3 border-l-2 ${s.color}`}>
                      <div className="text-[11px] text-zinc-500 uppercase tracking-widest font-semibold mb-1">{s.label}</div>
                      <div className="text-xl font-semibold text-white">{s.val}</div>
                    </div>
                  ))}
                </div>

                {/* Workflow Rows */}
                <div className="bg-[#12141A] rounded-xl border border-white/[0.04] overflow-hidden flex-1 flex flex-col">
                  <div className="px-5 py-2.5 border-b border-white/[0.04] flex items-center gap-2">
                     <svg className="w-4 h-4 text-zinc-400" viewBox="0 0 24 24" fill="none" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
                     <span className="text-[10px] text-zinc-400 font-bold uppercase tracking-widest">In Progress — 4</span>
                  </div>
                  <div className="flex-1 overflow-auto">
                    {[
                      { icon: '◉', title: 'Automated Lead Qualification Pipeline', badge: 'MVP', bg: 'bg-cyan-500/20 text-cyan-400', date: 'Just now' },
                      { icon: '◐', title: 'Customer Support LLM RAG Agent', badge: 'PreMVP', bg: 'bg-purple-500/20 text-purple-400', date: '2 hrs ago' },
                      { icon: '○', title: 'Internal Operations Dashboard', badge: 'Marketing', bg: 'bg-orange-500/20 text-orange-400', date: 'Yesterday' },
                      { icon: '◉', title: 'Revenue Engine Integration', badge: 'MVP', bg: 'bg-cyan-500/20 text-cyan-400', date: '2 days ago' },
                    ].map((row, i) => (
                      <div key={i} className="flex items-center px-5 py-3 border-b border-white/[0.02] last:border-0 hover:bg-white/[0.02] transition-colors cursor-pointer group">
                        <span className={`text-[10px] mr-3 ${i === 0 || i === 3 ? 'text-cyan-400' : i === 1 ? 'text-purple-400' : 'text-zinc-600'}`}>{row.icon}</span>
                        <span className="text-sm font-medium text-zinc-300 group-hover:text-white transition-colors">{row.title}</span>
                        
                        <div className="ml-auto flex items-center gap-4">
                          <div className={`px-2.5 py-1 rounded-[4px] text-[10px] font-bold tracking-wide uppercase ${row.bg}`}>
                            {row.badge}
                          </div>
                          <div className="text-[12px] text-zinc-600 flex items-center gap-1.5 w-20 justify-end">
                            <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                            {row.date}
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

              </div>
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
