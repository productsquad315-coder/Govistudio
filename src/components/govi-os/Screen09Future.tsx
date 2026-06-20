'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

const heroLines = [
  {
    text: 'People move information today.',
    color: 'text-zinc-500',
  },
  {
    text: 'AI moves information tomorrow.',
    color: 'text-zinc-400',
  },
  {
    text: 'People move institutions forward.',
    color: 'text-white',
  },
];



export default function Screen09Future() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: '-60px' });

  return (
    <section
      ref={sectionRef}
      className="relative py-32 md:py-48 px-6 bg-[#05070A]"
    >
      <div className="max-w-4xl mx-auto text-center">
        {/* Hero Typography */}
        <div className="space-y-2 md:space-y-3">
          {heroLines.map((line, index) => (
            <motion.p
              key={index}
              initial={{ opacity: 0, y: 24 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{
                duration: 1,
                delay: 0.2 * index,
                ease: [0.16, 1, 0.3, 1],
              }}
              className={`text-[clamp(1.5rem,5vw,4rem)] font-bold leading-[1.1] ${line.color}`}
            >
              {line.text}
            </motion.p>
          ))}
        </div>


        {/* CTA Area */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1, delay: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="mt-16 md:mt-24"
        >
          <p className="text-[10px] sm:text-xs uppercase tracking-[0.2em] text-[#00E5FF] mb-6 font-semibold">
            Experience how Govi could transform your institution.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a
              href="https://calendly.com/govistudio/govi-os"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 bg-white text-black text-sm font-semibold hover:bg-zinc-200 transition-colors duration-300 w-full sm:w-auto text-center"
            >
              Book a strategy call
            </a>
            <a
              href="#contact"
              className="px-8 py-4 bg-transparent border border-white/20 text-white text-sm font-semibold hover:bg-white/5 transition-colors duration-300 w-full sm:w-auto text-center"
            >
              Calculate ROI
            </a>
          </div>
        </motion.div>

        {/* Minimal Footer */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{
            duration: 1,
            delay: 1.8,
            ease: [0.16, 1, 0.3, 1],
          }}
          className="mt-32 pt-8 border-t border-white/[0.06]"
        >
          <p className="text-sm font-bold text-white tracking-tight">
            GoviStudio
          </p>
          <p className="text-xs text-zinc-600 mt-2">
            &copy; {new Date().getFullYear()} GoviStudio. All rights reserved.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
