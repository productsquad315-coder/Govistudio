import { ArrowRight, Workflow, UserPlus, GitMerge } from "lucide-react";

export default function Personalization() {
  return (
    <section id="personalization" className="relative py-24 sm:py-32 bg-[#F4F4F5] overflow-hidden">
      {/* Radial gradient overlay */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-zinc-200/60 via-transparent to-transparent"></div>

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-[#111827] sm:text-5xl animate-fade-in-up">
            Your clinic isn't a template.
          </h2>
          <div className="mt-6 text-xl leading-8 text-zinc-600 animate-fade-in-up animation-delay-100 max-w-xl mx-auto font-medium">
            We don't force your clinic into a standard workflow.<br /> We build around the reality of your business.
          </div>
        </div>

        <div className="mx-auto mt-16 max-w-6xl sm:mt-20">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            {/* Dental Practice */}
            <div className="flex flex-col gap-6 animate-fade-in-up animation-delay-200">
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-cyan-400/10">
                  <Workflow className="h-5 w-5 text-cyan-500" />
                </div>
                <h3 className="text-lg font-semibold text-[#111827]">Dental Practice</h3>
              </div>
              <div className="flex-1 rounded-2xl bg-[#09090B] border border-white/[0.05] p-6 shadow-xl">
                <div className="space-y-4">
                  <div className="rounded-lg bg-white/5 p-3 text-sm text-zinc-300 flex items-center justify-between">
                    <span>Booking</span>
                    <ArrowRight className="h-4 w-4 text-cyan-400" />
                  </div>
                  <div className="rounded-lg bg-white/5 p-3 text-sm text-zinc-300 flex items-center justify-between">
                    <span>Treatment Plan</span>
                    <ArrowRight className="h-4 w-4 text-cyan-400" />
                  </div>
                  <div className="rounded-lg bg-white/5 p-3 text-sm text-zinc-300">
                    <span>Recall</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Cosmetic Clinic */}
            <div className="flex flex-col gap-6 animate-fade-in-up animation-delay-300">
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-purple-400/10">
                  <UserPlus className="h-5 w-5 text-purple-500" />
                </div>
                <h3 className="text-lg font-semibold text-[#111827]">Cosmetic Clinic</h3>
              </div>
              <div className="flex-1 rounded-2xl bg-[#09090B] border border-white/[0.05] p-6 shadow-xl">
                <div className="space-y-4">
                  <div className="rounded-lg bg-white/5 p-3 text-sm text-zinc-300 flex items-center justify-between">
                    <span>Enquiry</span>
                    <ArrowRight className="h-4 w-4 text-purple-400" />
                  </div>
                  <div className="rounded-lg bg-white/5 p-3 text-sm text-zinc-300 flex items-center justify-between">
                    <span>Consultation</span>
                    <ArrowRight className="h-4 w-4 text-purple-400" />
                  </div>
                  <div className="rounded-lg bg-white/5 p-3 text-sm text-zinc-300 flex items-center justify-between">
                    <span>Procedure</span>
                    <ArrowRight className="h-4 w-4 text-purple-400" />
                  </div>
                  <div className="rounded-lg bg-white/5 p-3 text-sm text-zinc-300">
                    <span>Follow-up</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Multi-location Group */}
            <div className="flex flex-col gap-6 animate-fade-in-up animation-delay-400">
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-orange-400/10">
                  <GitMerge className="h-5 w-5 text-orange-500" />
                </div>
                <h3 className="text-lg font-semibold text-[#111827]">Multi-location Group</h3>
              </div>
              <div className="flex-1 rounded-2xl bg-[#09090B] border border-white/[0.05] p-6 shadow-xl">
                <div className="space-y-4">
                  <div className="rounded-lg bg-white/5 p-3 text-sm text-zinc-300 flex items-center justify-between">
                    <span>Central Scheduling</span>
                    <ArrowRight className="h-4 w-4 text-orange-400" />
                  </div>
                  <div className="rounded-lg bg-white/5 p-3 text-sm text-zinc-300 flex items-center justify-between">
                    <span>Location Routing</span>
                    <ArrowRight className="h-4 w-4 text-orange-400" />
                  </div>
                  <div className="rounded-lg bg-white/5 p-3 text-sm text-zinc-300">
                    <span>Unified Reporting</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
