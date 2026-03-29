'use client';

import React from 'react';

type Props = {
  title: string
  description: string
  mockUI: React.ReactNode
  className?: string
}

export default function FeatureCard({
  title,
  description,
  mockUI,
  className = ""
}: Props) {
  
  const handleMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (typeof window !== "undefined") {
      const isFinePointer = window.matchMedia?.("(pointer: fine)").matches ?? false
      if (!isFinePointer) return
    }
    const rect = e.currentTarget.getBoundingClientRect()
    const x = e.clientX - rect.left
    const y = e.clientY - rect.top
    e.currentTarget.style.setProperty("--x", `${x}px`)
    e.currentTarget.style.setProperty("--y", `${y}px`)
  }

  return (
    <div className={`relative rounded-xl p-[1px] gradient-border ${className}`}>
      <div 
        onMouseMove={handleMove}
        className="relative overflow-hidden rounded-[16px] bg-[#09090B] h-[420px] sm:h-[420px] group border border-white/[0.03] shadow-2xl hover:scale-[1.01] transition-transform duration-500"
      >
        {/* Mouse-follow spotlight glow */}
        <div
          className="pointer-events-none absolute inset-0 opacity-0 transition duration-500 group-hover:opacity-100 z-0 hidden sm:block"
          style={{
            background: `radial-gradient(600px circle at var(--x, 50%) var(--y, 50%), rgba(56,189,248,0.04), transparent 40%)`
          }}
        />

        {/* Top Edge Beam */}
        <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-blue-400/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 z-10" />

        {/* Dot texture grid */}
        <div className="dot-grid absolute inset-0 opacity-[0.15] z-0 hidden sm:block" />

        {/* Custom Screenshot / Mock UI Layer */}
        <div className="absolute top-10 left-6 right-6 bottom-36 sm:top-12 sm:left-12 sm:right-12 sm:bottom-0 z-10 transition-transform duration-700 sm:group-hover:-translate-y-3">
          <div className="w-full h-full rounded-t-xl bg-[#0F1117] border border-white/[0.05] overflow-hidden shadow-[0_-20px_50px_rgba(0,0,0,0.6)] flex flex-col group-hover:shadow-[0_-5px_60px_rgba(56,189,248,0.1)] transition-shadow duration-700">
            <div className="w-full h-full scale-[0.94] sm:scale-100 origin-top">
              {mockUI}
            </div>
          </div>
        </div>

        {/* Cinematic fade mask */}
        <div className="absolute inset-0 z-20 pointer-events-none bg-gradient-to-t from-[#09090B] via-transparent to-transparent opacity-100" />

        {/* Cinematic Noise overlay */}
        <div className="noise z-20 opacity-[0.02]" />

        {/* Caption text */}
        <div className="absolute bottom-6 left-6 right-6 sm:bottom-8 sm:left-8 sm:right-8 z-30 pointer-events-none">
          <span className="text-white text-base sm:text-lg font-bold block mb-2 tracking-tight line-clamp-2 sm:line-clamp-none">
            {title}
          </span>
          <span className="text-zinc-500 text-[13px] sm:text-[14px] leading-relaxed block font-medium line-clamp-3 sm:line-clamp-none">
            {description}
          </span>
        </div>
      </div>
    </div>
  )
}
