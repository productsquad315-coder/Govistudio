import { Briefcase, Code2, Handshake, ShieldAlert } from "lucide-react";

export default function Trust() {
  const capabilities = [
    {
      title: "Business First",
      description: "We understand your operations before we touch any technology.",
      icon: <Briefcase className="h-6 w-6 text-zinc-600" />
    },
    {
      title: "Full-Stack Capability",
      description: "AI, automation, custom software, and integrations.",
      icon: <Code2 className="h-6 w-6 text-zinc-600" />
    },
    {
      title: "Ongoing Partnership",
      description: "We stay involved as your clinic grows.",
      icon: <Handshake className="h-6 w-6 text-zinc-600" />
    },
    {
      title: "Honest Assessment",
      description: "Not every problem needs technology. We'll tell you if it doesn't.",
      icon: <ShieldAlert className="h-6 w-6 text-zinc-600" />
    }
  ];

  return (
    <section id="trust" className="py-24 sm:py-32 bg-[#F4F4F5]">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center mb-16">
          <h2 className="text-3xl font-bold tracking-tight text-[#111827] sm:text-5xl leading-[1.1]">
            Built by people who understand business and technology.
          </h2>
        </div>

        <div className="mx-auto max-w-5xl">
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
            {capabilities.map((item, index) => (
              <div 
                key={index} 
                className="rounded-2xl bg-white border border-zinc-200 p-8 flex flex-col gap-4 shadow-sm"
              >
                <div className="h-12 w-12 rounded-xl bg-zinc-50 border border-zinc-100 flex items-center justify-center">
                  {item.icon}
                </div>
                <div>
                  <h3 className="text-xl font-bold text-[#111827] mb-2">
                    {item.title}
                  </h3>
                  <p className="text-zinc-600 leading-relaxed">
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
