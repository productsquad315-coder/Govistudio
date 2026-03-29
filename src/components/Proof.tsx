'use client';

import { motion } from 'framer-motion';

const metrics = [
  { value: '15+', label: 'Systems Deployed' },
  { value: '$5M+', label: 'Value Created' },
  { value: '40K+', label: 'Processes Automated' },
  { value: '100%', label: 'Projects Shipped on Time' },
];

export default function Proof() {
  return (
    <section className="bg-[#0A0A0B] border-y border-white/[0.04] py-16 relative overflow-hidden">

      {/* Very subtle separator glow */}
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
      <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />

      <div className="max-w-[1200px] mx-auto px-6 sm:px-8">
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center text-[11px] font-bold tracking-[0.3em] uppercase text-zinc-600 mb-10"
        >
          Trusted by AI teams building the future
        </motion.p>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-px bg-white/[0.04] border border-white/[0.04] rounded-2xl overflow-hidden">
          {metrics.map((m, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className="bg-[#0B0C10] px-8 py-8 flex flex-col items-center text-center group hover:bg-white/[0.02] transition-colors duration-300"
            >
              <span className="text-[36px] font-bold text-white tracking-tight leading-none mb-2 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-cyan-400 group-hover:to-purple-400 transition-all duration-500">
                {m.value}
              </span>
              <span className="text-[12px] text-zinc-400 font-medium leading-relaxed">
                {m.label}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
