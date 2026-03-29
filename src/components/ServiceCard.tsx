"use client"

import { motion, useMotionValue, useTransform } from "framer-motion"

interface ServiceCardProps {
  title: string
  desc: string
  tags: string[]
  imageSrc?: string
}

export default function ServiceCard({ title, desc, tags, imageSrc }: ServiceCardProps) {
  const mouseX = useMotionValue(0)
  const mouseY = useMotionValue(0)

  function onMouseMove({ currentTarget, clientX, clientY }: React.MouseEvent) {
    const { left, top } = currentTarget.getBoundingClientRect()
    mouseX.set(clientX - left)
    mouseY.set(clientY - top)
  }

  return (
    <div className="relative w-full rounded-[26px] p-[2px] border-sweep shadow-[0_0_40px_rgba(0,212,255,0.1),0_0_60px_rgba(123,97,255,0.1),0_0_80px_rgba(255,122,0,0.05)] transition-transform duration-300 hover:-translate-y-1">
      <motion.div
        onMouseMove={onMouseMove}
        className="group relative bg-[#0F1115] text-white rounded-[24px] border border-white/10 p-6 sm:p-8 lg:p-10 overflow-hidden"
      >
        {/* Spotlight effect */}
        <motion.div
          className="pointer-events-none absolute -inset-px rounded-[24px] opacity-0 group-hover:opacity-100 transition duration-500"
          style={{
            background: useTemplate`
              radial-gradient(
                600px circle at ${mouseX}px ${mouseY}px,
                rgba(56, 189, 248, 0.05),
                transparent 80%
              )
            `,
          }}
        />

        {/* Cinematic Noise overlay */}
        <div className="noise opacity-[0.03] z-0" />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-12 items-start lg:items-center relative z-10">
          {/* IMAGE AREA */}
          <div className="relative h-48 sm:h-56 lg:h-[300px] flex items-center justify-center rounded-2xl border border-white/[0.08] bg-white/[0.01] overflow-hidden">
            {imageSrc ? (
              <>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={imageSrc}
                  alt=""
                  className="absolute inset-0 h-full w-full object-cover brightness-[0.7] blur-[0.3px] scale-[1.02]"
                  loading="lazy"
                  decoding="async"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
              </>
            ) : (
              <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle,white_0.5px,transparent_1px)] bg-[size:24px_24px] pointer-events-none" />
            )}
          </div>

          {/* TEXT CONTENT */}
          <div className="flex flex-col space-y-6 text-left">
            <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold tracking-tight text-white leading-tight">
              {title}
            </h3>
            <p className="text-zinc-400 text-sm sm:text-base lg:text-lg leading-relaxed font-medium">
              {desc}
            </p>
            <div className="flex flex-wrap gap-2 sm:gap-3 pt-2 sm:pt-4">
              {tags.map((tag) => (
                <span
                  key={tag}
                  className="px-3 sm:px-5 py-2 rounded-lg bg-white/[0.03] border border-white/[0.08] text-[10px] font-bold text-zinc-400 tracking-[0.2em] uppercase transition-all duration-500 group-hover:border-blue-500/20 group-hover:text-zinc-300"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom ambient glow */}
        <div className="absolute -bottom-20 -right-20 w-64 h-64 bg-blue-500/[0.02] blur-[100px] rounded-full pointer-events-none group-hover:bg-blue-500/[0.05] transition-colors duration-1000" />
      </motion.div>
    </div>
  )
}

// Helper for template strings with motion values
function useTemplate(strings: TemplateStringsArray, ...values: any[]) {
  return useTransform(values, (latestValues: unknown[]) => {
    return strings.reduce((acc, str, i) => {
      return acc + str + (latestValues[i] !== undefined ? latestValues[i] : "")
    }, "")
  })
}
