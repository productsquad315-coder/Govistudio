'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

const STEPS = [
  { num: '01', text: 'Application submitted.', color: 'text-white' },
  { num: '02', text: 'Documents missing.', color: 'text-[#FFB000]' },
  { num: '03', text: 'Admissions waits.', color: 'text-zinc-500' },
  { num: '04', text: 'Student waits.', color: 'text-zinc-500' },
  { num: '05', text: 'Seven days lost.', color: 'text-[#FFB000]' },
];

export default function Screen03Workflow() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: '-80px' });

  return (
    <section ref={sectionRef} className="relative bg-[#05070A] py-24 md:py-32 px-6 overflow-hidden">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="mb-16 md:mb-20"
        >
          <p className="text-[10px] sm:text-xs uppercase tracking-[0.2em] text-[#00E5FF] mb-4 font-semibold">
            THE SYMPTOM
          </p>
          <h2 className="text-[clamp(1.5rem,4vw,3rem)] font-bold tracking-tight leading-[1.15] text-white">
            <span className="block">One application.</span>
            <span className="block text-zinc-400">Seven departments.</span>
            <span className="block text-zinc-500">Four days of waiting.</span>
          </h2>
        </motion.div>

        <div className="relative border-l border-white/10 ml-2 md:ml-0 pl-8 md:pl-12 py-4">
          <div className="space-y-12">
            {STEPS.map((step, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -20 }}
                animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                transition={{
                  duration: 0.8,
                  delay: 0.3 + i * 0.15,
                  ease: [0.16, 1, 0.3, 1],
                }}
                className="relative"
              >
                {/* Timeline dot */}
                <div className="absolute -left-[37px] md:-left-[53px] top-2.5 w-1.5 h-1.5 rounded-full bg-white/20" />
                
                <p className="text-xl md:text-2xl font-medium tracking-tight">
                  <span className="font-mono text-sm text-zinc-600 mr-4 tracking-normal align-middle">{step.num}</span>
                  <span className={step.color}>{step.text}</span>
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
