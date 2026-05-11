'use client';

import { useRef } from 'react';
import ServiceCard from './ServiceCard';

const services = [
  {
    title: "AI Automation Systems",
    desc: "Automate workflows using intelligent systems. Less manual work. More leverage.",
    tags: ["Lead Qualification", "Support Assistants", "Document Processing"],
    imageSrc: "/assets/7103b75b603e23539f701668b063b434.webp",
  },
  {
    title: "AI Product Development",
    desc: "Build AI-powered products users can interact with. Launch faster. Validate sooner.",
    tags: ["AI SaaS Tools", "AI Copilots", "Analytics Assistants"],
    imageSrc: "/assets/original-e96b095e300586ab5eee3c039288f628.webp",
  },
  {
    title: "Custom Software Development",
    desc: "Design and build scalable software systems. Reliable systems built to scale.",
    tags: ["SaaS Platforms", "Internal Tools", "Web Applications"],
    imageSrc: "/assets/original-df7180b18e97f8487d50bd65cba0a013.webp",
  }
];

const Services = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  return (
    <section
      id="services"
      ref={containerRef}
      className="relative bg-[#F4F4F5] pt-16 sm:pt-20 lg:pt-24 pb-16 sm:pb-20 lg:pb-24"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-32">

        {/* LEFT: STICKY HEADING */}
        <div className="lg:col-span-5 lg:sticky lg:top-40 h-fit space-y-8 lg:space-y-12 z-20">
          <div className="space-y-4 lg:space-y-6">
            <p className="animate-fade-in text-blue-600 text-[11px] font-bold uppercase tracking-[0.5em]">
              What We Build
            </p>
            <h2 className="animate-fade-in-up animation-delay-100 text-3xl sm:text-4xl lg:text-[clamp(3rem,6vw,5rem)] font-bold tracking-tight text-zinc-900 leading-[1.05] -ml-1">
              Your External AI<br />
              <span className="bg-gradient-to-r from-cyan-600 via-purple-600 to-orange-600 bg-clip-text text-transparent">
                Product Team.
              </span>
            </h2>
          </div>

          <div className="animate-fade-in animation-delay-200 space-y-8">
            <p className="text-zinc-600 text-sm sm:text-base lg:text-xl leading-relaxed max-w-none lg:max-w-sm font-medium">
              We partner with companies to design and build intelligent systems. From early concept to production, we handle the entire process.
            </p>

            <div className="flex flex-col gap-6 border-t border-zinc-200 pt-8">
              <div className="flex items-center gap-4 group">
                <div className="w-1 h-1 rounded-full bg-blue-600 group-hover:scale-150 transition-transform" />
                <span className="text-sm font-semibold text-zinc-500 uppercase tracking-widest">We don&apos;t build prototypes.</span>
              </div>
              <div className="flex items-center gap-4 group">
                <div className="w-1 h-1 rounded-full bg-purple-600 group-hover:scale-150 transition-transform" />
                <span className="text-sm font-semibold text-zinc-500 uppercase tracking-widest">We build systems that run inside your business.</span>
              </div>
            </div>
          </div>
        </div>

        {/* RIGHT: CARDS */}
        <div className="lg:col-span-7">
          {/* Mobile/tablet: clean grid */}
          <div className="grid grid-cols-1 gap-6">
            {services.map((service, i) => (
              <div 
                key={service.title}
                className="animate-fade-in-up"
                style={{ animationDelay: `${i * 150}ms` }}
              >
                <ServiceCard
                  title={service.title}
                  desc={service.desc}
                  tags={service.tags}
                  imageSrc={service.imageSrc}
                />
              </div>
            ))}
          </div>
        </div>

      </div>

      {/* Subtle Background Lighting for Grey Section */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-blue-500/[0.03] -z-0 blur-[150px] pointer-events-none" />
    </section>
  );
};

export default Services;
