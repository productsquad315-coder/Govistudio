'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

const PERIPHERAL_NODES = [
  { label: 'Student System', angle: 270 },
  { label: 'HR', angle: 330 },
  { label: 'Finance', angle: 30 },
  { label: 'CRM', angle: 90 },
  { label: 'Email', angle: 150 },
  { label: 'SharePoint', angle: 210 },
];

function getNodePosition(
  angleDeg: number,
  radius: number,
  cx: number,
  cy: number
) {
  const rad = (angleDeg * Math.PI) / 180;
  return {
    x: cx + radius * Math.cos(rad),
    y: cy + radius * Math.sin(rad),
  };
}

function Particle({
  x1,
  y1,
  x2,
  y2,
  delay,
}: {
  x1: number;
  y1: number;
  x2: number;
  y2: number;
  delay: number;
}) {
  return (
    <motion.circle
      r="2.5"
      fill="#22d3ee"
      initial={{ cx: x1, cy: y1, opacity: 0 }}
      animate={{
        cx: [x1, x2, x1],
        cy: [y1, y2, y1],
        opacity: [0, 0.8, 0],
      }}
      transition={{
        duration: 4,
        delay: delay + 2,
        repeat: Infinity,
        ease: 'easeInOut',
      }}
    />
  );
}

export default function Screen04MeetGovi() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const cx = 300;
  const cy = 250;
  const radius = 160;

  return (
    <section className="relative bg-black py-24 md:py-32 px-6 overflow-hidden">
      <div ref={ref} className="max-w-4xl mx-auto">
        {/* SVG Diagram */}
        <div className="flex justify-center mb-16 md:mb-20">
          <svg
            viewBox="0 0 600 500"
            className="w-full max-w-[500px] md:max-w-[600px] h-auto"
            fill="none"
          >
            {/* Connection lines */}
            {PERIPHERAL_NODES.map((node, i) => {
              const pos = getNodePosition(node.angle, radius, cx, cy);
              return (
                <motion.line
                  key={`line-${i}`}
                  x1={cx}
                  y1={cy}
                  x2={pos.x}
                  y2={pos.y}
                  stroke="rgba(255,255,255,0.12)"
                  strokeWidth="1"
                  initial={{ pathLength: 0, opacity: 0 }}
                  animate={
                    isInView
                      ? { pathLength: 1, opacity: 1 }
                      : { pathLength: 0, opacity: 0 }
                  }
                  transition={{
                    duration: 1.5,
                    delay: 0.3 + i * 0.12,
                    ease: [0.16, 1, 0.3, 1],
                  }}
                />
              );
            })}

            {/* Particles */}
            {isInView &&
              PERIPHERAL_NODES.map((node, i) => {
                const pos = getNodePosition(node.angle, radius, cx, cy);
                return (
                  <Particle
                    key={`particle-${i}`}
                    x1={pos.x}
                    y1={pos.y}
                    x2={cx}
                    y2={cy}
                    delay={i * 0.5}
                  />
                );
              })}

            {/* Peripheral nodes */}
            {PERIPHERAL_NODES.map((node, i) => {
              const pos = getNodePosition(node.angle, radius, cx, cy);
              const labelWidth = node.label.length * 7 + 24;
              return (
                <motion.g
                  key={`node-${i}`}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={
                    isInView
                      ? { opacity: 1, scale: 1 }
                      : { opacity: 0, scale: 0.8 }
                  }
                  transition={{
                    duration: 0.8,
                    delay: 0.5 + i * 0.1,
                    ease: [0.16, 1, 0.3, 1],
                  }}
                >
                  <rect
                    x={pos.x - labelWidth / 2}
                    y={pos.y - 14}
                    width={labelWidth}
                    height={28}
                    rx={6}
                    fill="#0F1115"
                    stroke="rgba(255,255,255,0.12)"
                    strokeWidth="1"
                  />
                  <text
                    x={pos.x}
                    y={pos.y + 4}
                    textAnchor="middle"
                    fill="white"
                    fontSize="11"
                    fontFamily="ui-sans-serif, system-ui, sans-serif"
                  >
                    {node.label}
                  </text>
                </motion.g>
              );
            })}

            {/* Central Govi OS node */}
            <motion.g
              initial={{ opacity: 0, scale: 0.5 }}
              animate={
                isInView
                  ? { opacity: 1, scale: 1 }
                  : { opacity: 0, scale: 0.5 }
              }
              transition={{
                duration: 1,
                delay: 0.2,
                ease: [0.16, 1, 0.3, 1],
              }}
            >
              {/* Glow */}
              <circle
                cx={cx}
                cy={cy}
                r="42"
                fill="none"
                stroke="rgba(34,211,238,0.15)"
                strokeWidth="1"
              />
              <circle
                cx={cx}
                cy={cy}
                r="50"
                fill="none"
                stroke="rgba(34,211,238,0.06)"
                strokeWidth="1"
              />
              <circle cx={cx} cy={cy} r="34" fill="#0F1115" />
              <circle
                cx={cx}
                cy={cy}
                r="34"
                fill="none"
                stroke="rgba(34,211,238,0.3)"
                strokeWidth="1.5"
              />
              <text
                x={cx}
                y={cy - 2}
                textAnchor="middle"
                fill="white"
                fontSize="12"
                fontWeight="600"
                fontFamily="ui-sans-serif, system-ui, sans-serif"
              >
                Govi OS
              </text>
              <text
                x={cx}
                y={cy + 12}
                textAnchor="middle"
                fill="rgba(34,211,238,0.6)"
                fontSize="8"
                fontFamily="ui-sans-serif, system-ui, sans-serif"
              >
                CORE
              </text>
            </motion.g>
          </svg>
        </div>

        {/* Headline */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="text-center"
        >
          <p className="text-[10px] sm:text-xs uppercase tracking-[0.2em] text-[#00E5FF] mb-4 font-semibold">
            THE SOLUTION
          </p>
          <h2 className="text-[clamp(1.8rem,4.5vw,3.5rem)] font-bold tracking-tight leading-[1.1] text-white">
            Your software stores information.
          </h2>
          <p className="text-[clamp(1.4rem,3.5vw,2.8rem)] font-bold tracking-tight leading-[1.15] mt-2 md:mt-3">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">
              Govi moves work.
            </span>
          </p>
          <p className="text-lg text-zinc-400 max-w-2xl mx-auto mt-6 md:mt-8 font-medium leading-relaxed">
            The operational intelligence layer that sits across your existing systems. No replacements required.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
