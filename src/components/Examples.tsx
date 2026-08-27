export default function Examples() {
  const problems = [
    {
      problem: "We're missing calls when our receptionist is busy.",
      response: "We can build a system that answers, understands what the patient needs, captures the information and helps move them toward an appointment.",
      delay: "animation-delay-200",
      accent: "from-cyan-400 to-blue-400"
    },
    {
      problem: "We get enquiries, but too many never book.",
      response: "We can build personalized follow-up around the channels your patients actually use.",
      delay: "animation-delay-300",
      accent: "from-purple-400 to-pink-400"
    },
    {
      problem: "My staff spends hours doing things that shouldn't require a person.",
      response: "We'll map the workflow and identify what can be automated \u2014 without disrupting what already works.",
      delay: "animation-delay-400",
      accent: "from-orange-400 to-red-400"
    },
    {
      problem: "We have five different systems and none of them talk to each other.",
      response: "We'll connect the workflow instead of asking your staff to keep moving information manually.",
      delay: "animation-delay-500",
      accent: "from-green-400 to-emerald-400"
    },
    {
      problem: "Our problem is completely different.",
      response: "That's fine. That's exactly why we work this way.",
      delay: "animation-delay-600",
      accent: "from-zinc-300 to-zinc-500"
    }
  ];

  return (
    <section id="examples" className="relative py-24 sm:py-32 bg-[#0A0A0B] overflow-hidden">
      {/* Grid overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>
      
      {/* GPU Glow */}
      <div className="absolute inset-x-0 top-0 h-64 bg-gradient-to-b from-cyan-400/10 via-purple-400/5 to-transparent blur-3xl opacity-50 transform-gpu pointer-events-none"></div>

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center mb-16">
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-5xl animate-fade-in-up">
            Start with the problem.<br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-purple-400 to-orange-400">
              We'll work out the technology.
            </span>
          </h2>
        </div>

        <div className="mx-auto max-w-5xl">
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            {problems.map((item, index) => (
              <div 
                key={index}
                className={`flex flex-col justify-between rounded-2xl bg-[#12141A] border border-white/[0.05] p-6 sm:p-8 animate-fade-in-up ${item.delay} ${index === 4 ? 'md:col-span-2 md:mx-auto md:w-[calc(50%-0.75rem)]' : ''}`}
              >
                <div className="mb-8">
                  <span className={`text-4xl leading-none font-serif text-transparent bg-clip-text bg-gradient-to-r ${item.accent}`}>
                    &ldquo;
                  </span>
                  <h3 className="text-xl font-medium text-zinc-100 mt-2 -indent-1">
                    {item.problem}
                    <span className={`text-2xl font-serif text-transparent bg-clip-text bg-gradient-to-r ${item.accent}`}>
                      &rdquo;
                    </span>
                  </h3>
                </div>
                <div className="flex gap-4 items-start pt-6 border-t border-white/5">
                  <div className="h-6 w-6 rounded-full bg-gradient-to-r from-cyan-400 via-purple-400 to-orange-400 flex-shrink-0 flex items-center justify-center shadow-[0_0_10px_rgba(34,211,238,0.5)]">
                    <span className="text-[10px] font-bold text-black tracking-tighter">G</span>
                  </div>
                  <p className="text-base text-zinc-400 leading-relaxed">
                    {item.response}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
