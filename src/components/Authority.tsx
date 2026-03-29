'use client';

import { motion } from 'framer-motion';
import FeatureCard from './FeatureCard';

export default function Authority() {
  return (
    <section id="authority" className="bg-[#F4F4F5] pt-24 pb-20 relative overflow-hidden">

      {/* Seamless Grey Depth Overlay */}
      <div className="absolute inset-x-0 top-0 h-[600px] bg-[radial-gradient(1200px_circle_at_50%_-100px,rgba(0,0,0,0.045),transparent)] z-0" />

      <div className="max-w-[1200px] mx-auto px-6 relative z-10">

        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
            className="text-[48px] font-bold tracking-tight text-default leading-[1.1] text-[#111827]"
          >
            From Manual Workflows<br/>to Intelligent Systems
          </motion.h2>

          <motion.p
            initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ delay: 0.1 }}
            className="mt-6 text-[#6B7280] max-w-2xl mx-auto text-[16px] leading-[1.6]"
          >
            Most companies run on fragmented tools. We replace that with AI systems that think, decide, and act.
          </motion.p>
        </div>

        {/* 
          Huly Grid Layout: 
          Row 1: Card 1 (Normal), Card 2 (Wide)
          Row 2: Card 3 (Wide), Card 4 (Normal) 
          Using a 5-column grid to achieve the asymmetrical 2:3 and 3:2 ratio 
        */}
        <div className="grid grid-cols-1 md:grid-cols-5 gap-6">

          {/* Card 1: Normal (Span 2) */}
          <FeatureCard
            className="md:col-span-2"
            title="AI Is Not a Feature. It’s Infrastructure."
            description="Companies that win with AI don’t experiment with tools. They build systems that automate decisions and create compounding leverage."
            mockUI={
              <div className="w-full h-full flex items-start justify-center pt-8 px-4">
                {/* Spotlight glow behind mock search box */}
                <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-32 h-32 bg-orange-500/40 blur-3xl rounded-full" />

                <div className="w-full max-w-[280px] bg-[#12141A] rounded-xl border border-white/5 shadow-2xl overflow-hidden relative z-10">
                  <div className="flex items-center gap-3 px-4 py-3 border-b border-white/[0.04]">
                    <svg className="w-4 h-4 text-zinc-500" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
                    <span className="text-[13px] text-zinc-500 font-mono">Run command...</span>
                  </div>
                  <div className="p-2 space-y-1">
                    <div className="text-[10px] text-zinc-600 px-2 py-1 font-bold uppercase tracking-widest">Actions</div>
                    {['Mark Task as Done', 'Open To-Do List', 'Switch to Timeline View'].map((item, i) => (
                      <div key={i} className={`flex items-center justify-between px-3 py-2 rounded-lg text-[13px] ${i === 0 ? 'bg-white/5 text-white' : 'text-zinc-400 hover:bg-white/[0.02]'}`}>
                        <span>{item}</span>
                        <span className="text-[11px] text-zinc-600 border border-white/5 rounded px-1 min-w-[16px] text-center bg-[#0F1115]">
                          {i === 0 ? 'D' : i === 1 ? 'L' : 'V'}
                        </span>
                      </div>
                    ))}
                  </div>
                  <div className="px-4 py-3 bg-[#0A0A0B] border-t border-white/5 flex gap-1 justify-center">
                    {['A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L'].map(k => <div key={k} className="w-6 h-6 rounded bg-[#1A1C23] border border-white/5 flex items-center justify-center text-[10px] text-zinc-500">{k}</div>)}
                  </div>
                </div>
              </div>
            }
          />

          {/* Card 2: Wide (Span 3) */}
          <FeatureCard
            className="md:col-span-3"
            title="Where Most AI Initiatives Fail."
            description="Experiments that never ship. Workflows that don’t scale. AI doesn’t fail. Execution does."
            mockUI={
              <div className="w-full h-full flex flex-col pt-8 px-8 gap-4 relative">
                {/* Spotlight glow behind mock search box */}
                <div className="absolute top-0 left-1/3 w-64 h-32 bg-cyan-400/20 blur-3xl rounded-full" />

                <div className="flex gap-4 relative z-10 w-[120%]">
                  {/* Column 1 */}
                  <div className="w-64 flex-shrink-0 flex flex-col gap-3 opacity-40">
                    <div className="flex items-center justify-between text-[11px] font-bold text-zinc-400 mb-1">
                      <span>Yesterday</span>
                      <div className="w-4 h-4 rounded bg-white/5 flex items-center justify-center"><svg className="w-3 h-3 text-zinc-500" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg></div>
                    </div>
                    <div className="bg-[#12141A] rounded-xl border border-white/5 p-4 shadow-xl mb-24">
                      <div className="text-[10px] text-zinc-500 uppercase font-bold tracking-widest mb-2 flex items-center gap-1.5"><div className="w-1.5 h-1.5 rounded-full bg-orange-500" /> Update hero section</div>
                      <p className="text-[13px] text-zinc-300 font-medium">Align the hero section with the latest designs from the client</p>
                    </div>
                  </div>

                  {/* Column 2 (Active) */}
                  <div className="w-72 flex-shrink-0 flex flex-col gap-3 -mt-4">
                    <div className="flex items-center justify-between text-[11px] font-bold text-white mb-1">
                      <span>Today</span>
                      <div className="w-4 h-4 rounded bg-white/10 flex items-center justify-center"><span className="text-white">+</span></div>
                    </div>
                    <div className="bg-white rounded-xl p-4 shadow-xl">
                      <div className="text-[10px] text-red-500 uppercase font-bold tracking-widest mb-2 px-1.5 py-0.5 bg-red-500/10 rounded w-max">High</div>
                      <p className="text-[13px] text-black font-semibold mb-3">Implement new features according to project requirements</p>
                      <div className="flex items-center justify-between text-[11px] text-zinc-400">
                        <span className="flex items-center gap-1"><svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg> Apr 11</span>
                        <div className="flex -space-x-1"><div className="w-4 h-4 rounded-full bg-blue-500 border border-white" /><div className="w-4 h-4 rounded-full bg-purple-500 border border-white" /></div>
                      </div>
                    </div>
                    <div className="bg-[#1A1C23] rounded-xl border border-white/5 p-4 shadow-xl">
                      <div className="text-[10px] text-orange-400 uppercase font-bold tracking-widest mb-2 px-1.5 py-0.5 bg-orange-500/10 rounded w-max">Medium</div>
                      <p className="text-[13px] text-zinc-300 font-medium mb-3">Code Review & MVP Testing</p>
                      <div className="flex items-center justify-between text-[11px] text-zinc-500">
                        <span className="flex items-center gap-1"><svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg> Apr 12</span>
                        <div className="w-4 h-4 rounded-full bg-green-500 border border-[#1A1C23]" />
                      </div>
                    </div>
                  </div>

                  {/* Column 3 */}
                  <div className="w-64 flex-shrink-0 flex flex-col gap-3">
                    <div className="flex items-center justify-between text-[11px] font-bold text-zinc-400 mb-1">
                      <span>Create New Task</span>
                    </div>
                    <div className="bg-[#0A0A0B] rounded-xl border border-white/5 p-4 py-8 shadow-xl opacity-60">
                      <div className="text-zinc-600 text-[13px] mb-8">What is the task?</div>
                      <div className="flex justify-end"><div className="h-6 w-16 bg-blue-600 rounded-full" /></div>
                    </div>
                  </div>
                </div>
              </div>
            }
          />

          {/* Card 3: Wide (Span 3) */}
          <FeatureCard
            className="md:col-span-3"
            title="Most Teams Build Features. We Build Systems."
            description="Product strategy + AI architecture + engineering execution. Systems that work in production and deliver measurable impact."
            mockUI={
              <div className="w-full h-full p-8 relative flex gap-6 z-10 overflow-hidden">
                {/* Left Column Calendar */}
                <div className="w-16 flex flex-col gap-6 text-[10px] text-zinc-600 font-medium text-right mt-1 opacity-50">
                  <div>9 AM</div>
                  <div>10 AM</div>
                  <div>11 AM</div>
                  <div>12 PM</div>
                  <div>1 PM</div>
                  <div>2 PM</div>
                </div>

                {/* Calendar Grid area */}
                <div className="flex-1 relative border-l border-white/5 pl-6 flex gap-4 w-[150%]">

                  {/* Column 1 */}
                  <div className="flex-1 relative">
                    {/* Active Card */}
                    <div className="absolute top-8 left-0 w-64 bg-white rounded-xl shadow-2xl p-5 z-20">
                      <h4 className="text-black font-bold text-[14px] mb-1">Design meeting</h4>
                      <span className="text-zinc-500 text-[11px] block mb-4">03:00 - 04:00 pm<br />Weekly on Monday</span>
                      <p className="text-zinc-800 text-[12px] leading-relaxed mb-4">Weekly review and refinement of project prototypes.</p>
                      <button className="bg-blue-50 text-blue-600 text-[11px] font-semibold px-3 py-1.5 rounded-lg flex items-center gap-1 mb-4"><span className="text-lg leading-none">+</span> Join Meeting</button>

                      <div className="flex items-center gap-2 mb-4">
                        <svg className="w-4 h-4 text-zinc-400" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" /></svg>
                        <span className="text-[11px] text-zinc-500">10 minutes before</span>
                      </div>

                      <div className="flex items-center justify-between border-t border-zinc-100 pt-3">
                        <span className="text-[11px] text-zinc-500 font-medium">Going?</span>
                        <div className="flex gap-1">
                          <button className="px-2 py-0.5 border border-zinc-200 rounded text-[10px] text-zinc-600 hover:bg-zinc-50">Yes</button>
                          <button className="px-2 py-0.5 border border-zinc-200 rounded text-[10px] text-zinc-600 hover:bg-zinc-50">No</button>
                          <button className="px-2 py-0.5 border border-zinc-200 rounded text-[10px] text-zinc-600 hover:bg-zinc-50">Maybe</button>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Column 2 */}
                  <div className="flex-1 relative opacity-50">
                    <div className="absolute top-0 left-0 w-56 bg-[#1A1C23] border border-white/5 rounded-xl p-3 h-16">
                      <h4 className="text-zinc-300 font-medium text-[12px] mb-1">Prototypes</h4>
                      <div className="flex -space-x-1"><div className="w-4 h-4 rounded-full bg-blue-500 border border-white" /><div className="w-4 h-4 rounded-full bg-purple-500 border border-white" /></div>
                    </div>

                    <div className="absolute top-24 left-0 w-56 bg-[#1A1C23] border border-orange-500/20 shadow-[0_0_15px_rgba(255,140,0,0.1)] rounded-xl p-4 h-24">
                      <h4 className="text-white font-medium text-[12px] mb-1 leading-tight">Discuss detailed project plans outlining tasks</h4>
                      <span className="text-zinc-500 text-[10px] block mb-3">11:30 - 01:00 pm</span>
                      <div className="flex gap-1"><div className="w-4 h-4 rounded-full bg-orange-500 border border-[#1A1C23]" /><div className="w-4 h-4 rounded-full bg-yellow-500 border border-[#1A1C23]" /><span className="text-[10px] text-zinc-500 ml-1">+2</span></div>
                    </div>

                    <div className="absolute top-56 left-12 w-48 bg-[#1A1C23] border border-white/5 rounded-xl p-3 h-16">
                      <h4 className="text-zinc-300 font-medium text-[12px] mb-1">Design meeting</h4>
                      <span className="text-zinc-500 text-[10px] block">03:00 - 04:00 pm</span>
                    </div>
                  </div>

                </div>
              </div>
            }
          />

          {/* Card 4: Normal (Span 2) */}
          <FeatureCard
            className="md:col-span-2"
            title="Who This Is For."
            description="For companies serious about AI — ready to automate, build products, and move beyond experimentation."
            mockUI={
              <div className="w-full h-full flex items-center justify-center relative overflow-hidden pt-8">
                {/* Glowing overlapping rings representing a speaker/notification pulse */}
                <div className="absolute w-64 h-64 rounded-full border-[12px] border-blue-500/10 blur-[2px]" />
                <div className="absolute w-48 h-48 rounded-full border-[10px] border-indigo-500/20 blur-[1px]" />
                <div className="absolute w-32 h-32 rounded-full border-[8px] border-orange-500/40" />

                {/* Intense center glow */}
                <div className="absolute w-16 h-16 bg-gradient-to-br from-black to-zinc-900 rounded-full flex items-center justify-center shadow-[0_0_40px_rgba(255,140,0,0.5),inset_0_2px_4px_rgba(255,255,255,0.1)] z-10 border border-white/5">
                  <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" /></svg>
                  {/* Badge */}
                  <div className="absolute -top-1 -right-1 w-4 h-4 bg-orange-500 rounded-full flex items-center justify-center text-[9px] font-bold text-white border-2 border-zinc-900">27</div>
                </div>

                {/* Horizontal light slash */}
                <div className="absolute top-1/2 left-0 w-full h-[1px] -translate-y-1/2 bg-gradient-to-r from-transparent via-orange-400 to-transparent blur-[1px] opacity-60 z-20" />
              </div>
            }
          />

        </div>

      </div>
    </section>
  )
}
