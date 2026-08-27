import { Bot, AppWindow, Zap, Rocket } from "lucide-react";

export default function Broader() {
  const offerings = [
    {
      title: "AI Systems",
      description: "Business-specific AI assistants, agents, voice systems, and intelligent workflows.",
      icon: <Bot className="h-6 w-6 text-zinc-400" />
    },
    {
      title: "Custom Software",
      description: "Internal tools, portals, dashboards, and workflow applications.",
      icon: <AppWindow className="h-6 w-6 text-zinc-400" />
    },
    {
      title: "Business Automation",
      description: "Streamline operations and connect the workflows your team already uses.",
      icon: <Zap className="h-6 w-6 text-zinc-400" />
    },
    {
      title: "AI Products & SaaS",
      description: "Turn a validated business idea or internal system into a complete product.",
      icon: <Rocket className="h-6 w-6 text-zinc-400" />
    }
  ];

  return (
    <section id="broader" className="py-24 sm:py-32 bg-[#0A0A0B] border-t border-white/[0.05]">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center mb-16">
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-5xl leading-tight">
            Custom business technology.
          </h2>
        </div>

        <div className="mx-auto max-w-5xl">
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
            {offerings.map((item, index) => (
              <div 
                key={index} 
                className="rounded-2xl bg-[#12141A] border border-white/[0.05] p-8 flex flex-col gap-5"
              >
                <div className="h-12 w-12 rounded-xl bg-white/[0.03] border border-white/[0.05] flex items-center justify-center">
                  {item.icon}
                </div>
                <div>
                  <h3 className="text-xl font-bold text-zinc-100 mb-2">
                    {item.title}
                  </h3>
                  <p className="text-zinc-400 leading-relaxed">
                    {item.description}
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
