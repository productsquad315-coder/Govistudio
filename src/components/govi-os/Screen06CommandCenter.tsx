'use client';

import { useEffect, useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';

const statusItems = [
  {
    department: 'Admissions',
    dotColor: 'bg-red-400',
    text: 'Document verification is increasing turnaround time.',
  },
  {
    department: 'Finance',
    dotColor: 'bg-yellow-400',
    text: 'Purchase approvals exceed SLA.',
  },
];

export default function Screen06CommandCenter() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: '-100px' });

  const [visibleWords, setVisibleWords] = useState(0);
  const [activeCard, setActiveCard] = useState(-1);

  const prefixText = 'Scanning operational data across departments...';
  const prefixWords = prefixText.split(' ');
  const totalPrefixWords = prefixWords.length;

  // Typewriter effect for prefix text
  useEffect(() => {
    if (!isInView) return;

    // Start after a brief delay for the user message to appear
    const startDelay = setTimeout(() => {
      let wordIndex = 0;
      const interval = setInterval(() => {
        wordIndex++;
        setVisibleWords(wordIndex);
        if (wordIndex >= totalPrefixWords) {
          clearInterval(interval);
        }
      }, 40);
      return () => clearInterval(interval);
    }, 600);

    return () => clearTimeout(startDelay);
  }, [isInView, totalPrefixWords]);

  // Reveal status cards sequentially after prefix is done
  useEffect(() => {
    if (visibleWords < totalPrefixWords) return;

    let cardIndex = 0;
    const cardInterval = setInterval(() => {
      setActiveCard(cardIndex);
      cardIndex++;
      if (cardIndex >= statusItems.length) {
        clearInterval(cardInterval);
      }
    }, 500);

    return () => clearInterval(cardInterval);
  }, [visibleWords, totalPrefixWords]);

  return (
    <section
      ref={sectionRef}
      className="relative py-24 md:py-32 px-6 bg-[#05070A]"
    >
      <div className="max-w-3xl mx-auto">
        {/* Section Title */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="text-center mb-12"
        >
          <p className="text-[10px] sm:text-xs uppercase tracking-[0.2em] text-[#00E5FF] mb-4 font-semibold">
            NATURAL LANGUAGE
          </p>
          <h2 className="text-[clamp(1.5rem,4vw,3rem)] font-bold text-white leading-[1.1]">
            <span className="block text-white">No dashboards first.</span>
            <span className="block text-zinc-500">Natural language first.</span>
          </h2>
        </motion.div>

        {/* Terminal Surface */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{
            duration: 1,
            delay: 0.2,
            ease: [0.16, 1, 0.3, 1],
          }}
          className="bg-[#0A0A0B] rounded-2xl border border-white/[0.08] overflow-hidden"
        >
          {/* Terminal Header */}
          <div className="flex items-center gap-2 px-5 py-3 border-b border-white/[0.04]">
            <div className="w-2.5 h-2.5 rounded-full bg-white/10" />
            <div className="w-2.5 h-2.5 rounded-full bg-white/10" />
            <div className="w-2.5 h-2.5 rounded-full bg-white/10" />
            <span className="ml-3 text-xs text-zinc-600 font-mono">
              govi-os / command
            </span>
          </div>

          {/* Chat Area */}
          <div className="p-5 md:p-8 space-y-6">
            {/* User Message */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="flex justify-end"
            >
              <div className="bg-white/[0.05] rounded-xl px-5 py-3 max-w-xs md:max-w-sm">
                <p className="text-sm text-white">
                  Where are my bottlenecks today?
                </p>
              </div>
            </motion.div>

            {/* AI Response */}
            <div className="space-y-4">
              {/* Prefix text with typewriter */}
              {visibleWords > 0 && (
                <div className="text-sm text-zinc-400 leading-relaxed">
                  {prefixWords.slice(0, visibleWords).join(' ')}
                  {visibleWords < totalPrefixWords && (
                    <span className="inline-block w-0.5 h-4 bg-cyan-400 ml-1 animate-pulse align-middle" />
                  )}
                </div>
              )}

              {/* Status Cards */}
              <div className="space-y-3">
                {statusItems.map((item, index) => (
                  <motion.div
                    key={item.department}
                    initial={{ opacity: 0, y: 12 }}
                    animate={
                      activeCard >= index
                        ? { opacity: 1, y: 0 }
                        : { opacity: 0, y: 12 }
                    }
                    transition={{
                      duration: 0.5,
                      ease: [0.16, 1, 0.3, 1],
                    }}
                    className="bg-[#0F1115] rounded-lg p-4 border border-white/[0.04]"
                  >
                    <div className="flex items-start gap-3">
                      <div
                        className={`w-2 h-2 rounded-full ${item.dotColor} mt-1.5 shrink-0`}
                      />
                      <div>
                        <p className="text-xs font-semibold text-zinc-300 uppercase tracking-wide mb-1">
                          {item.department}
                        </p>
                        <p className="text-sm text-zinc-400">{item.text}</p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
