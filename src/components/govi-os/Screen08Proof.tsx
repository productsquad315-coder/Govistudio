'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

const comparisons = [
  {
    current: '17 manual steps',
    future: '3 human approvals',
  },
  {
    current: '7 departments',
    future: '1 operational workflow',
  },
  {
    current: 'No visibility',
    future: 'Real-time execution',
  },
];

export default function Screen08Proof() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: '-80px' });

  return (
    <section ref={sectionRef} className="relative py-24 md:py-32 px-6 bg-[#05070A]">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="mb-16 md:mb-20 text-center"
        >
          <p className="text-[10px] sm:text-xs uppercase tracking-[0.2em] text-[#00E5FF] mb-4 font-semibold">
            OPERATIONAL PROOF
          </p>
          <h2 className="text-[clamp(1.5rem,4vw,3rem)] font-bold text-white leading-[1.1]">
            <span className="block text-white">Workflow: Admissions.</span>
            <span className="block text-zinc-500">Before and after Govi.</span>
          </h2>
        </motion.div>

        {/* Column Headers */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="grid grid-cols-2 gap-8 mb-4 px-4"
        >
          <p className="text-[10px] uppercase tracking-[0.15em] text-zinc-600 font-semibold">
            Current
          </p>
          <p className="text-[10px] uppercase tracking-[0.15em] text-cyan-400 font-semibold">
            With Govi OS
          </p>
        </motion.div>

        {/* Comparison Rows */}
        <div className="flex flex-col border-t border-white/10">
          {comparisons.map((row, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 10 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{
                duration: 0.8,
                delay: 0.3 + index * 0.1,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="grid grid-cols-2 gap-8 border-b border-white/10 py-5 px-4"
            >
              <div className="text-zinc-500 font-medium text-sm md:text-base">
                {row.current}
              </div>
              <div className="text-white font-medium text-sm md:text-base flex items-center gap-3">
                <div className="w-1 h-1 rounded-full bg-cyan-400 shrink-0 hidden sm:block" />
                {row.future}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
