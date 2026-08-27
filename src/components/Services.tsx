import ServiceCard from './ServiceCard';

const services = [
  {
    title: 'Get more enquiries converted',
    desc: '',
    tags: ['AI Receptionist', 'Voice AI', 'Lead Follow-up', 'WhatsApp'],
  },
  {
    title: 'Give your team time back',
    desc: '',
    tags: ['Admin Automation', 'Reminders', 'AI Assistants'],
  },
  {
    title: 'Keep your schedule full',
    desc: '',
    tags: ['No-show Prevention', 'Recall Campaigns', 'Reactivation'],
  },
  {
    title: 'Connect the systems you already use',
    desc: '',
    tags: ['PMS Integration', 'CRM', 'Custom APIs'],
  },
  {
    title: 'Custom problem?',
    desc: '',
    tags: ['Custom Software', 'Bespoke Systems'],
  },
];

const Services = () => {

  return (
    <section
      id="solutions"
      className="relative bg-[#F4F4F5] pt-16 sm:pt-20 lg:pt-24 pb-16 sm:pb-20 lg:pb-24"
    >
      <div id="services" className="absolute -top-20" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 xl:gap-24">

        {/* LEFT: STICKY HEADING */}
        <div className="lg:col-span-5 lg:sticky lg:top-32 h-fit space-y-8 lg:space-y-12 z-20">
          <div className="space-y-4 lg:space-y-6">
            <p className="animate-fade-in text-blue-600 text-[11px] font-bold uppercase tracking-[0.5em]">
              What We Build
            </p>
            <h2 className="animate-fade-in-up animation-delay-100 text-3xl sm:text-4xl lg:text-[clamp(3rem,6vw,5rem)] font-bold tracking-tight text-zinc-900 leading-[1.05] -ml-1">
              What can we build<br />
              <span className="bg-gradient-to-r from-cyan-600 via-purple-600 to-orange-600 bg-clip-text text-transparent">
                for your clinic?
              </span>
            </h2>
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
