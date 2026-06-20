'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

const PRESSURES = [
  {
    title: 'Budget Pressure',
    description:
      'Universities are expected to do more with fewer resources.',
    citation: 'NACUBO Annual Survey',
  },
  {
    title: 'Administrative Burden',
    description:
      'Routine operational work continues to grow while strategic capacity remains flat.',
    citation: 'EDUCAUSE Research',
  },
  {
    title: 'Staff Shortages',
    description:
      'Hiring is not keeping pace with institutional demand.',
    citation: 'UCISA Digital Capabilities Survey',
  },
  {
    title: 'Student Expectations',
    description:
      'Fast, digital-first experiences are now the baseline expectation.',
    citation: 'Microsoft Work Trend Index',
  },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const cardVariants = {
  hidden: {
    opacity: 0,
    y: 30,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.9,
      ease: [0.16, 1, 0.3, 1] as [number, number, number, number],
    },
  },
};

export default function Screen02Pressure() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section className="relative bg-black py-24 md:py-32 px-6">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="mb-16 md:mb-20"
        >
          <p className="text-[10px] sm:text-xs uppercase tracking-[0.2em] text-[#00E5FF] mb-4 font-semibold">
            THE PROBLEM
          </p>
          <h2 className="text-[clamp(1.8rem,4.5vw,3.5rem)] font-bold tracking-tight leading-[1.1] text-white">
            Operational complexity keeps increasing.
          </h2>
          <p className="text-[clamp(1.4rem,3.5vw,2.5rem)] font-bold tracking-tight leading-[1.15] text-zinc-500 mt-2 md:mt-3">
            Administrative capacity doesn&apos;t.
          </p>
        </motion.div>

        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-5"
        >
          {PRESSURES.map((item) => (
            <motion.div
              key={item.title}
              variants={cardVariants}
              className="bg-[#0F1115] border border-white/[0.06] rounded-2xl p-6 md:p-8 flex flex-col justify-between"
            >
              <div>
                <h3 className="text-white text-lg font-semibold mb-3">
                  {item.title}
                </h3>
                <p className="text-zinc-400 text-[15px] leading-relaxed">
                  {item.description}
                </p>
              </div>
              <p className="text-zinc-600 text-xs mt-4">
                Source: {item.citation}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
