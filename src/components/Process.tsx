'use client';

import { motion } from 'framer-motion';
import FeatureCard from './FeatureCard';

const processSteps = [
  { number: '01', title: 'Discovery', desc: 'Identify high-impact opportunities' },
  { number: '02', title: 'System Design', desc: 'Design workflows and architecture' },
  { number: '03', title: 'Development', desc: 'Build with modern AI infrastructure' },
  { number: '04', title: 'Deployment', desc: 'Launch and ensure reliability' },
];

const ProcessSection = () => {
  return (
    <section id="process" className="bg-[#0A0A0B] pt-24 pb-24 relative overflow-hidden">

      {/* Subtle grid dot overlay */}
      <div className="absolute inset-0 opacity-[0.03] bg-[radial-gradient(circle,white_1px,transparent_1px)] bg-[size:24px_24px] z-0 pointer-events-none" />
      {/* GPU glow for premium dark feel */}
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] bg-gradient-to-r from-blue-500/10 via-purple-500/10 to-transparent blur-[120px] opacity-40 pointer-events-none" />

      <div className="max-w-[1200px] mx-auto px-6 relative z-10 w-full">

        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-[48px] font-bold tracking-tight text-white mb-4 leading-[1.1]"
          >
            From Idea to Production
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-zinc-400 text-[16px] max-w-2xl mx-auto leading-relaxed"
          >
            Every system is built for real-world use — not demos.
          </motion.p>
        </div>

        {/* ── Mock Pipeline UI (Hero FeatureCard) ── */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="w-full max-w-4xl mx-auto mb-16"
        >
          <FeatureCard
            title="Pipeline Deployments."
            description="Track every stage of development in real-time."
            className="h-auto pb-24" // Override height
            mockUI={
              <div className="w-full h-full flex flex-col p-6 bg-[#09090B]">
                {/* Pipeline Stages */}
                <div className="grid grid-cols-4 gap-3 mb-8">
                  {['Discovery', 'Design', 'Development', 'Deployment'].map((stage, i) => (
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
                    <span className="text-blue-400/80">Deploying API core...</span>
                  </div>
                  <div className="flex gap-4 mb-2">
                    <span className="text-zinc-700">❯</span>
                    <span className="text-emerald-500/80">✓ Systems initialized</span>
                  </div>
                  <div className="flex gap-4 mb-2 opacity-40">
                    <span className="text-zinc-700">❯</span>
                    <span className="text-zinc-500 animate-pulse">Running health checks...</span>
                  </div>
                </div>
              </div>
            }
          />
        </motion.div>

        {/* Step Text explanations */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 max-w-5xl mx-auto">
          {processSteps.map((step, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08, duration: 0.5 }}
              className="group"
            >
              <span className="text-4xl font-extrabold text-white/5 block mb-4 group-hover:text-blue-500/20 transition-all duration-500">
                {step.number}
              </span>
              <h3 className="text-[18px] font-bold text-white mb-2">{step.title}</h3>
              <p className="text-zinc-400 leading-relaxed text-[14px]">{step.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;
