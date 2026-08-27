import FeatureCard from './FeatureCard';

export default function Problems() {
  return (
    <section id="problems" className="bg-[#F4F4F5] pt-16 sm:pt-20 lg:pt-24 pb-16 sm:pb-20 relative overflow-hidden">
      {/* Seamless Grey Depth Overlay */}
      <div className="absolute inset-x-0 top-0 h-[600px] bg-[radial-gradient(1200px_circle_at_50%_-100px,rgba(0,0,0,0.045),transparent)] z-0" />

      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 relative z-10">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="animate-fade-in-up text-[32px] sm:text-[40px] md:text-[52px] lg:text-[60px] font-bold tracking-tight leading-[1.05] text-[#111827]">
            Your clinic is growing.<br/>Your systems haven't caught up.
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
          {/* Card 1: Normal (Span 2) */}
          <FeatureCard
            className="md:col-span-2"
            title="Calls get missed"
            description="Your team is helping patients while new enquiries are coming in."
            mockUI={
              <div className="w-full h-full flex items-start justify-center pt-8 px-4 relative">
                <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-32 h-32 bg-red-500/30 blur-3xl rounded-full" />
                <div className="w-full max-w-[280px] bg-[#12141A] rounded-xl border border-white/5 shadow-2xl overflow-hidden relative z-10 flex flex-col">
                  <div className="flex items-center gap-3 px-4 py-3 border-b border-white/[0.04]">
                    <svg className="w-4 h-4 text-zinc-500" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
                    <span className="text-[13px] text-zinc-400 font-medium">Recent Calls</span>
                  </div>
                  <div className="p-3 space-y-2">
                    <div className="flex items-center justify-between p-2 rounded-lg bg-red-500/5 border border-red-500/10">
                      <div className="flex items-center gap-2">
                        <div className="w-2 h-2 rounded-full bg-red-500" />
                        <span className="text-[12px] text-zinc-300">New patient enquiry</span>
                      </div>
                      <span className="text-[10px] text-red-400 font-medium">Missed</span>
                    </div>
                    <div className="flex items-center justify-between p-2 rounded-lg bg-orange-500/5 border border-orange-500/10">
                      <div className="flex items-center gap-2">
                        <div className="w-2 h-2 rounded-full bg-orange-500" />
                        <span className="text-[12px] text-zinc-300">Follow-up call</span>
                      </div>
                      <span className="text-[10px] text-orange-400 font-medium">Missed</span>
                    </div>
                    <div className="flex items-center justify-between p-2 rounded-lg bg-green-500/5 border border-green-500/10">
                      <div className="flex items-center gap-2">
                        <div className="w-2 h-2 rounded-full bg-green-500" />
                        <span className="text-[12px] text-zinc-300">Booking request</span>
                      </div>
                      <span className="text-[10px] text-green-400 font-medium">Answered</span>
                    </div>
                  </div>
                </div>
              </div>
            }
          />

          {/* Card 2: Wide (Span 3) */}
          <FeatureCard
            className="md:col-span-3"
            title="Follow-ups get forgotten"
            description="Someone enquires, doesn't book immediately, and nobody gets back to them."
            mockUI={
              <div className="w-full h-full flex flex-col pt-8 px-6 gap-4 relative">
                <div className="absolute top-0 left-1/3 w-64 h-32 bg-orange-400/20 blur-3xl rounded-full" />
                <div className="flex gap-4 relative z-10 w-full overflow-hidden">
                  <div className="w-48 flex-shrink-0 flex flex-col gap-2">
                    <div className="text-[11px] font-bold text-zinc-400 mb-1 flex items-center justify-between">
                      Enquired <span className="bg-white/10 px-1.5 rounded text-[10px]">3</span>
                    </div>
                    <div className="bg-[#12141A] rounded-lg border border-red-500/30 p-3 shadow-xl relative overflow-hidden">
                      <div className="absolute top-0 right-0 w-8 h-8 bg-red-500/20 blur-xl" />
                      <div className="text-[12px] text-white font-medium mb-1">Sarah M.</div>
                      <p className="text-[10px] text-zinc-400">Website Form - Dental Implant</p>
                      <div className="mt-2 text-[9px] text-red-400 flex items-center gap-1"><svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg> 3 days ago</div>
                    </div>
                    <div className="bg-[#12141A] rounded-lg border border-white/5 p-3 shadow-xl">
                      <div className="text-[12px] text-zinc-300 font-medium mb-1">James T.</div>
                      <p className="text-[10px] text-zinc-500">WhatsApp - Whitening</p>
                      <div className="mt-2 text-[9px] text-zinc-500 flex items-center gap-1"><svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg> 2 hours ago</div>
                    </div>
                  </div>
                  <div className="w-48 flex-shrink-0 flex flex-col gap-2 opacity-50">
                    <div className="text-[11px] font-bold text-zinc-400 mb-1 flex items-center justify-between">
                      Contacted <span className="bg-white/10 px-1.5 rounded text-[10px]">1</span>
                    </div>
                    <div className="bg-[#12141A] rounded-lg border border-white/5 p-3 shadow-xl">
                      <div className="text-[12px] text-zinc-300 font-medium mb-1">Emma R.</div>
                      <p className="text-[10px] text-zinc-500">Left voicemail</p>
                    </div>
                  </div>
                  <div className="w-48 flex-shrink-0 flex flex-col gap-2">
                    <div className="text-[11px] font-bold text-zinc-400 mb-1 flex items-center justify-between">
                      Lost <span className="bg-white/10 px-1.5 rounded text-[10px]">12</span>
                    </div>
                    <div className="bg-[#12141A] rounded-lg border border-white/5 p-3 shadow-xl opacity-60">
                      <div className="text-[12px] text-zinc-500 font-medium mb-1 line-through">Michael B.</div>
                      <p className="text-[10px] text-zinc-600">No response after 4 weeks</p>
                    </div>
                  </div>
                </div>
              </div>
            }
          />

          {/* Card 3: Wide (Span 3) */}
          <FeatureCard
            className="md:col-span-3"
            title="Patients fall through the cracks"
            description="No-shows, cancellations, inactive patients and unfinished treatment plans quietly cost you revenue."
            mockUI={
              <div className="w-full h-full p-6 relative flex gap-4 z-10 overflow-hidden">
                <div className="w-12 flex flex-col gap-8 text-[10px] text-zinc-500 font-medium text-right mt-2">
                  <div>9 AM</div>
                  <div>10 AM</div>
                  <div>11 AM</div>
                  <div>12 PM</div>
                </div>
                <div className="flex-1 relative border-l border-white/5 pl-4 flex gap-3">
                  <div className="flex-1 relative">
                    <div className="absolute top-0 left-0 w-full bg-white/5 rounded-lg border border-white/10 p-3 h-20">
                      <div className="flex justify-between items-start">
                        <div>
                          <h4 className="text-zinc-300 font-medium text-[12px]">Consultation</h4>
                          <span className="text-zinc-500 text-[10px]">09:00 - 10:00</span>
                        </div>
                        <span className="px-1.5 py-0.5 bg-green-500/20 text-green-400 text-[9px] rounded">Arrived</span>
                      </div>
                    </div>
                    <div className="absolute top-24 left-0 w-full bg-red-500/10 rounded-lg border border-red-500/20 p-3 h-20">
                      <div className="flex justify-between items-start">
                        <div>
                          <h4 className="text-red-300 font-medium text-[12px]">Root Canal (Follow-up)</h4>
                          <span className="text-red-400/70 text-[10px]">10:00 - 11:00</span>
                        </div>
                        <span className="px-1.5 py-0.5 bg-red-500/20 text-red-400 text-[9px] rounded font-bold">No-Show</span>
                      </div>
                    </div>
                    {/* Gap in schedule */}
                    <div className="absolute top-48 left-0 w-full rounded-lg border border-dashed border-white/10 flex items-center justify-center h-20 bg-white/[0.02]">
                      <span className="text-[10px] text-zinc-600">Empty Slot</span>
                    </div>
                  </div>
                  <div className="flex-1 relative opacity-60">
                    <div className="absolute top-8 left-0 w-full bg-orange-500/10 rounded-lg border border-orange-500/20 p-3 h-20">
                       <div className="flex justify-between items-start">
                        <div>
                          <h4 className="text-orange-300 font-medium text-[12px]">Checkup</h4>
                          <span className="text-orange-400/70 text-[10px]">09:30 - 10:30</span>
                        </div>
                        <span className="px-1.5 py-0.5 bg-orange-500/20 text-orange-400 text-[9px] rounded">Cancelled</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            }
          />

          {/* Card 4: Normal (Span 2) */}
          <FeatureCard
            className="md:col-span-2"
            title="Your software doesn't work together"
            description="Your phone, WhatsApp, website, calendar, CRM and practice software all hold different pieces of the patient journey."
            mockUI={
              <div className="w-full h-full flex items-center justify-center relative overflow-hidden pt-4">
                <div className="absolute w-64 h-64 rounded-full border-[1px] border-dashed border-white/10 animate-[spin_20s_linear_infinite]" />
                <div className="absolute w-40 h-40 rounded-full border-[1px] border-dashed border-white/20 animate-[spin_15s_linear_infinite_reverse]" />
                
                {/* Center Hub */}
                <div className="absolute w-14 h-14 bg-gradient-to-br from-zinc-800 to-black rounded-full flex items-center justify-center shadow-2xl z-10 border border-white/10">
                  <svg className="w-5 h-5 text-white/70" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" /></svg>
                </div>
                
                {/* Disconnected Nodes */}
                <div className="absolute top-[20%] left-[20%] w-10 h-10 bg-[#12141A] rounded-lg border border-red-500/30 flex items-center justify-center text-[9px] text-zinc-400 shadow-lg">CRM</div>
                <div className="absolute bottom-[20%] left-[15%] w-10 h-10 bg-[#12141A] rounded-lg border border-green-500/30 flex items-center justify-center text-[9px] text-zinc-400 shadow-lg">Wa.me</div>
                <div className="absolute top-[15%] right-[20%] w-10 h-10 bg-[#12141A] rounded-lg border border-blue-500/30 flex items-center justify-center text-[9px] text-zinc-400 shadow-lg">PMS</div>
                <div className="absolute bottom-[25%] right-[15%] w-10 h-10 bg-[#12141A] rounded-lg border border-purple-500/30 flex items-center justify-center text-[9px] text-zinc-400 shadow-lg">Cal</div>

                {/* Broken lines */}
                <svg className="absolute inset-0 w-full h-full z-0 opacity-20" style={{ pointerEvents: 'none' }}>
                  <line x1="50%" y1="50%" x2="25%" y2="25%" stroke="white" strokeWidth="1" strokeDasharray="4 4" />
                  <line x1="50%" y1="50%" x2="20%" y2="75%" stroke="white" strokeWidth="1" strokeDasharray="4 4" />
                  <line x1="50%" y1="50%" x2="75%" y2="20%" stroke="white" strokeWidth="1" strokeDasharray="4 4" />
                  <line x1="50%" y1="50%" x2="80%" y2="70%" stroke="white" strokeWidth="1" strokeDasharray="4 4" />
                </svg>
              </div>
            }
          />
        </div>
      </div>
    </section>
  );
}
