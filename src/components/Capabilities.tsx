import { Bot, AppWindow, Zap } from "lucide-react";

export default function Capabilities() {
  const services = [
    {
      title: "AI Systems",
      description: "Intelligent workflows, voice systems, and custom AI assistants designed for your operations.",
      icon: <Bot className="w-6 h-6 text-cyan-400" />,
    },
    {
      title: "Custom Software",
      description: "Portals, dashboards, and bespoke applications built exactly to your requirements.",
      icon: <AppWindow className="w-6 h-6 text-purple-400" />,
    },
    {
      title: "AI Automation",
      description: "Eliminate manual data entry and connect the tools your team already uses.",
      icon: <Zap className="w-6 h-6 text-orange-400" />,
    }
  ];

  return (
    <section className="py-24 sm:py-32 bg-[#0A0A0B] border-t border-white/[0.05]">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl mb-12">
          Our Core Capabilities
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {services.map((s, i) => (
            <div key={i} className="bg-[#12141A] border border-white/[0.08] rounded-[24px] p-8 flex flex-col items-center text-center hover:border-white/20 transition-colors">
              <div className="w-14 h-14 rounded-2xl bg-white/[0.03] border border-white/[0.05] flex items-center justify-center mb-6">
                {s.icon}
              </div>
              <h3 className="text-xl font-bold text-white mb-3">{s.title}</h3>
              <p className="text-zinc-400 leading-relaxed text-sm sm:text-base">
                {s.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
