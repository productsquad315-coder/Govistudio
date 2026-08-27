import React from 'react';

interface ServiceCardProps {
  title: string
  desc: string
  tags: string[]
}

export default function ServiceCard({ title, desc, tags }: ServiceCardProps) {
  return (
    <div className="w-full">
      <div className="bg-[#0F1115] text-white rounded-[24px] border border-white/10 p-8 sm:p-10">
        <div className="flex flex-col space-y-4 text-left">
          <h3 className="text-2xl sm:text-3xl font-bold tracking-tight text-white leading-tight">
            {title}
          </h3>
          {desc && (
            <p className="text-zinc-400 text-base sm:text-lg leading-relaxed font-medium">
              {desc}
            </p>
          )}
          <div className="flex flex-wrap gap-2 pt-4">
            {tags.map((tag) => (
              <span
                key={tag}
                className="px-4 py-2 rounded-lg bg-white/[0.03] border border-white/[0.05] text-[11px] font-bold text-zinc-400 tracking-wider uppercase"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
