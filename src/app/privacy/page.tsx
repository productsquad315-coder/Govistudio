import Footer from '@/components/Footer';
import Navigation from '@/components/Navigation';

export const metadata = {
  title: 'Privacy Policy | Govistudio',
  description:
    'How Govistudio collects, uses, and protects information from visitors, leads, and the clinics we build AI systems for.',
  alternates: { canonical: 'https://www.govistudio.com/privacy' },
};

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div>
      <h2 className="text-2xl font-semibold text-white mb-4">{title}</h2>
      <div className="space-y-4 text-[17px] leading-[1.8] text-gray-300">{children}</div>
    </div>
  );
}

export default function PrivacyPage() {
  return (
    <article className="min-h-screen bg-black text-white selection:bg-blue-500/30">
      <Navigation />

      <main className="max-w-3xl mx-auto px-8 pt-32 pb-24">
        <header className="mb-16">
          <div className="text-xs font-mono uppercase tracking-[0.2em] text-gray-500 mb-4">
            Last updated: August 29, 2026
          </div>
          <h1 className="text-5xl font-bold tracking-tight mb-6">
            Privacy <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-purple-400 to-orange-400">Policy</span>
          </h1>
          <p className="text-xl text-gray-400 leading-relaxed">
            This explains what information Govistudio collects, why, and how it&apos;s handled — both for people who visit this site and for the clinics we build systems for.
          </p>
        </header>

        <section className="space-y-12">
          <Section title="Who We Are">
            <p>
              Govistudio (&quot;Govistudio&quot;, &quot;we&quot;, &quot;us&quot;) is an AI systems studio that designs, builds, and deploys custom software and automation for growing clinics and other businesses. This policy covers govistudio.com and the systems we operate on behalf of our clients.
            </p>
            <p>
              Questions about this policy or your data can be sent to{' '}
              <a href="mailto:hello@govistudio.com" className="text-cyan-400 hover:underline">hello@govistudio.com</a>.
            </p>
          </Section>

          <Section title="Information We Collect">
            <p>We collect information in a few different ways:</p>
            <ul className="space-y-3 pl-1">
              <li className="flex items-start gap-3">
                <span className="text-cyan-400 mt-1">→</span>
                <span><strong className="text-white">Information you give us directly</strong> — your name, email, phone number, business details, and anything else you share when you fill out a form, book a call, or email us.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-purple-400 mt-1">→</span>
                <span><strong className="text-white">Information collected automatically</strong> — standard technical data (IP address, browser type, device, pages viewed, referring page) when you visit this site, via server logs and analytics.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-orange-400 mt-1">→</span>
                <span><strong className="text-white">Information from third-party tools</strong> — when you book a consultation, that's handled by Calendly under its own privacy policy; we receive the booking details you provide there.</span>
              </li>
            </ul>
          </Section>

          <Section title="How We Use Information">
            <p>We use the information we collect to:</p>
            <ul className="space-y-3 pl-1">
              <li className="flex items-start gap-3">
                <span className="text-cyan-400 mt-1">→</span>
                <span>Respond to enquiries and schedule consultations</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-purple-400 mt-1">→</span>
                <span>Understand how visitors use this site, so we can improve it</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-orange-400 mt-1">→</span>
                <span>Design, build, and support the AI systems we deliver for clients</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-cyan-400 mt-1">→</span>
                <span>Meet legal, security, and contractual obligations</span>
              </li>
            </ul>
            <p>We don&apos;t sell personal information to third parties.</p>
          </Section>

          <Section title="Data We Process on Behalf of Clinics">
            <p>
              The AI systems Govistudio builds — receptionist automation, follow-up sequences, recall campaigns, and similar tools — process communications and scheduling data on behalf of the clinics that engage us, in order to provide those services. In that context, Govistudio acts as a service provider/processor for our client, not as the owner of that data.
            </p>
            <p>
              Systems built for clinics are designed with appropriate data handling, encryption, and access controls, and are integrated with the clinic&apos;s existing practice management software rather than creating a separate, unsecured copy of patient data. Specific data-handling and compliance terms for a given engagement are set out in that client&apos;s service agreement, not this public policy.
            </p>
          </Section>

          <Section title="Cookies & Analytics">
            <p>
              This site uses cookies and similar technologies for basic functionality and to understand aggregate site usage (e.g. which pages are visited, how people navigate the site). You can control or disable cookies through your browser settings; doing so may affect how some parts of the site work.
            </p>
          </Section>

          <Section title="Sharing & Third Parties">
            <p>
              We share information only with the service providers that help us run this site and our business — for example, hosting infrastructure, email delivery, and scheduling (Calendly) — and only to the extent needed for them to perform that function. We may also disclose information if required by law, or to protect the rights, safety, or property of Govistudio or others.
            </p>
          </Section>

          <Section title="Data Retention">
            <p>
              We keep enquiry and contact information for as long as it&apos;s useful for the purpose it was collected — generally, for the duration of a prospective or active engagement plus a reasonable period afterward — and delete or anonymize it when it&apos;s no longer needed, unless we&apos;re required to keep it longer for legal or accounting reasons.
            </p>
          </Section>

          <Section title="Your Rights">
            <p>
              Depending on where you&apos;re located, you may have rights to access, correct, export, or delete the personal information we hold about you, or to object to or restrict certain processing. To exercise any of these, email{' '}
              <a href="mailto:hello@govistudio.com" className="text-cyan-400 hover:underline">hello@govistudio.com</a> and we&apos;ll respond as required by applicable law (including UK/EU GDPR and comparable regimes elsewhere).
            </p>
          </Section>

          <Section title="Security">
            <p>
              We use reasonable technical and organizational measures to protect the information we hold. No system is completely secure, so we can&apos;t guarantee absolute security, but we take this seriously in how we design and operate both this site and the systems we build for clients.
            </p>
          </Section>

          <Section title="Children's Privacy">
            <p>
              This site and our services are intended for businesses and business contacts, not children. We don&apos;t knowingly collect personal information from children.
            </p>
          </Section>

          <Section title="Changes to This Policy">
            <p>
              We may update this policy as our practices or applicable law change. We&apos;ll update the &quot;Last updated&quot; date above when we do. Continued use of this site after a change means you accept the updated policy.
            </p>
          </Section>

          <Section title="Contact">
            <p>
              For anything related to this policy or your data, reach us at{' '}
              <a href="mailto:hello@govistudio.com" className="text-cyan-400 hover:underline">hello@govistudio.com</a>.
            </p>
          </Section>
        </section>

        <section className="mt-20 p-10 rounded-3xl border border-white/[0.08] bg-white/[0.02]">
          <h2 className="text-2xl font-bold mb-4">Have a Question About Your Data?</h2>
          <p className="text-gray-400 mb-6 max-w-lg">
            If anything here is unclear, or you want to exercise a data right, just email us — we&apos;ll get back to you directly.
          </p>
          <a href="mailto:hello@govistudio.com" className="inline-flex items-center gap-2 bg-white text-black px-6 py-3 rounded-full font-bold hover:bg-gray-200 transition-all text-sm">
            Email hello@govistudio.com
          </a>
        </section>
      </main>

      <Footer />
    </article>
  );
}
