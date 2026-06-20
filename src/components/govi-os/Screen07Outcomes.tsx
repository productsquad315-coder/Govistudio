'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

const outcomes = [
  {
    title: 'Operational Capacity',
    description: 'Increase throughput without increasing staff.',
  },
  {
    title: 'Operational Visibility',
    description: 'See where work stops. Before students notice.',
  },
  {
    title: 'Governance',
    description: 'Every approval. Every workflow. Every decision. Traceable.',
  },
  {
    title: 'Decision Velocity',
    description: 'Less time waiting for reports. More time making decisions.',
  },
];

export default function Screen07Outcomes() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: '-80px' });

  return (
    <section ref={sectionRef} className="relative py-24 md:py-32 px-6 bg-[#05070A]">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="mb-16 md:mb-20"
        >
          <p className="text-[10px] sm:text-xs uppercase tracking-[0.2em] text-[#00E5FF] mb-4 font-semibold">
            OPERATIONAL OUTCOMES
          </p>
          <h2 className="text-[clamp(1.5rem,4vw,3rem)] font-bold text-white leading-[1.1]">
            <span className="block text-white">We don&apos;t sell features.</span>
            <span className="block text-zinc-500">We deliver outcomes.</span>
          </h2>
        </motion.div>

        <ul className="flex flex-col border-t border-white/10">
          {outcomes.map((item, index) => (
            <motion.li
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{
                duration: 0.8,
                delay: 0.15 * index,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="flex flex-col md:flex-row border-b border-white/10 py-6 md:py-8 items-start md:items-center gap-2 md:gap-8"
            >
              <div className="w-full md:w-1/3 flex items-center gap-3">
                <div className="w-1.5 h-1.5 rounded-full bg-cyan-400 shrink-0" />
                <h3 className="text-white font-semibold text-[15px]">
                  {item.title}
                </h3>
              </div>
              <div className="w-full md:w-2/3 pl-4 md:pl-0">
                <p className="text-zinc-400 text-[15px] leading-relaxed">
                  {item.description}
                </p>
              </div>
            </motion.li>
          ))}
        </ul>
      </div>
    </section>
  );
}
