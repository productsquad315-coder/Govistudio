'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import ServiceCard from './ServiceCard';

const services = [
  {
    title: "AI Automation Systems",
    desc: "Automate workflows using intelligent systems. Less manual work. More leverage.",
    tags: ["Lead Qualification", "Support Assistants", "Document Processing"],
    imageSrc: "/assets/new-paths-01.png",
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

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  return (
    <section
      id="services"
      ref={containerRef}
      className="relative bg-[#F4F4F5] pt-16 sm:pt-20 lg:pt-24 pb-16 sm:pb-20 lg:pb-24"
    >
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-32">

        {/* LEFT: STICKY HEADING */}
        <div className="lg:col-span-5 lg:sticky lg:top-40 h-fit space-y-8 lg:space-y-12 z-20">
          <div className="space-y-4 lg:space-y-6">
            <motion.p
              initial={{ opacity: 0, x: -10 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="text-blue-600 text-[11px] font-bold uppercase tracking-[0.5em]"
            >
              What We Build
            </motion.p>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-4xl sm:text-5xl lg:text-[clamp(3rem,6vw,5rem)] font-bold tracking-tight text-zinc-900 leading-[1.05] -ml-1"
            >
              Your External AI<br />
              <span className="bg-gradient-to-r from-cyan-600 via-purple-600 to-orange-600 bg-clip-text text-transparent">
                Product Team.
              </span>
            </motion.h2>
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="space-y-8"
          >
            <p className="text-zinc-600 text-base sm:text-lg lg:text-xl leading-relaxed max-w-none lg:max-w-sm font-medium">
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
          </motion.div>
        </div>

        {/* RIGHT: CARDS */}
        <div className="lg:col-span-7">
          {/* Mobile/tablet: clean grid */}
          <div className="grid grid-cols-1 gap-6 lg:hidden">
            {services.map((service) => (
              <ServiceCard
                key={service.title}
                title={service.title}
                desc={service.desc}
                tags={service.tags}
                imageSrc={service.imageSrc}
              />
            ))}
          </div>

          {/* Desktop: restore scroll-stacked presentation */}
          <div className="hidden lg:block relative">
            {services.map((service, i) => {
              const start = i * 0.33;
              const end = (i + 1) * 0.33;

              const y = useTransform(scrollYProgress, [start, end], [0, -30]);
              const x = useTransform(scrollYProgress, [start, end], [0, 15]);
              const rotate = useTransform(scrollYProgress, [start, end], [0, 1]);
              const scale = useTransform(scrollYProgress, [start, end], [1, 0.99]);
              const opacity = useTransform(scrollYProgress, [start, end], [1, 0.9]);

              return (
                <motion.div
                  key={service.title}
                  style={{
                    y,
                    x,
                    rotate,
                    scale,
                    opacity,
                    zIndex: i + 1,
                    position: "sticky",
                    top: "180px",
                  }}
                  className="w-full h-fit py-[8vh]"
                >
                  <div className="group relative">
                    <ServiceCard
                      title={service.title}
                      desc={service.desc}
                      tags={service.tags}
                      imageSrc={service.imageSrc}
                    />
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>

      </div>

      {/* Subtle Background Lighting for Grey Section */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-blue-500/[0.03] -z-0 blur-[150px] pointer-events-none" />
    </section>
  );
};

export default Services;
