import React from 'react';
import Head from 'next/head';
import Script from 'next/script';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';

export const metadata = {
  title: 'Automated Production Scheduling | Govistudio',
  description: 'An agentic AI scheduling system that connects to existing ERPs to predict bottlenecks and dynamically reroute work orders without manual dispatching.',
};

export default function ManufacturingScheduling() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": "https://govistudio.com/#organization",
        "name": "Govistudio",
        "description": "AI Product Engineering Studio building automated systems for traditional organizations."
      },
      {
        "@type": "Service",
        "@id": "https://govistudio.com/manufacturing-scheduling/#service",
        "provider": {"@id": "https://govistudio.com/#organization"},
        "name": "Automated Production Scheduling for Mid-Market Manufacturing",
        "description": "An agentic AI scheduling system that connects to existing ERPs (Epicor, Jobboss) to predict bottlenecks and dynamically reroute work orders without manual dispatching."
      },
      {
        "@type": "FAQPage",
        "@id": "https://govistudio.com/manufacturing-scheduling/#faq",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "How does Govistudio integrate with legacy ERPs like Jobboss or Epicor?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Govistudio deploys self-hosted connectors that extract live work order and inventory data directly from the ERP database. It does not require replacing the ERP; the AI layer sits on top to sync data bi-directionally."
            }
          },
          {
            "@type": "Question",
            "name": "How does the AI reduce manual data entry on the shop floor?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "The system replaces swivel-chair data entry by capturing machine status and operator inputs via mobile dashboards, instantly updating the ERP schedule without administrative intervention."
            }
          }
        ]
      }
    ]
  };

  return (
    <div className="min-h-screen bg-[#070707] text-white selection:bg-orange-500/30">
      <Script
        id="manufacturing-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Navigation />

      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 sm:pt-40 pb-24">
        <h1 className="text-4xl sm:text-5xl font-black tracking-tight leading-[1.1] text-white mb-8">
          Automated Production Scheduling for Mid-Market Manufacturing
        </h1>

        <section className="prose prose-invert max-w-none text-gray-300">
          <p className="text-xl font-medium leading-relaxed mb-12">
            Govistudio deploys an agentic AI scheduling layer that extracts live data from your existing ERP (such as Epicor or Jobboss), predicts production bottlenecks, and dynamically reroutes work orders without manual dispatching.
          </p>

          <h2 className="text-2xl font-bold text-white mt-12 mb-6 border-b border-white/10 pb-2">
            System Architecture & Data Flow
          </h2>
          
          <div className="space-y-6 mb-12">
            <div className="bg-white/[0.02] border border-white/[0.08] p-6 rounded-2xl">
              <h3 className="text-lg font-semibold text-white mb-2">Step 1: Data Ingestion from ERP</h3>
              <p className="text-gray-400">Self-hosted connectors pull active work orders, inventory levels, and routing steps directly from your on-premise or cloud ERP database in real-time.</p>
            </div>
            
            <div className="bg-white/[0.02] border border-white/[0.08] p-6 rounded-2xl">
              <h3 className="text-lg font-semibold text-white mb-2">Step 2: Agentic Prediction</h3>
              <p className="text-gray-400">Llama 3 and LangChain agents analyze historical cycle times and current machine statuses to identify upcoming bottlenecks before they disrupt the schedule.</p>
            </div>
            
            <div className="bg-white/[0.02] border border-white/[0.08] p-6 rounded-2xl">
              <h3 className="text-lg font-semibold text-white mb-2">Step 3: Automated Dispatch</h3>
              <p className="text-gray-400">The system automatically writes optimized dispatch lists back into the ERP and routes specific tasks to operators via mobile dashboards, eliminating swivel-chair data entry.</p>
            </div>
          </div>

          <h2 className="text-2xl font-bold text-white mt-12 mb-6 border-b border-white/10 pb-2">
            Typical Deployments Achieve
          </h2>
          
          <div className="overflow-x-auto mb-16">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="border-b border-white/10">
                  <th className="py-4 px-4 font-semibold text-white">Metric</th>
                  <th className="py-4 px-4 font-semibold text-white">Post-Automation Outcome</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-white/5">
                <tr>
                  <td className="py-4 px-4 text-gray-300">Manual Scheduling Hours</td>
                  <td className="py-4 px-4 text-orange-400 font-bold">85% Reduction</td>
                </tr>
                <tr>
                  <td className="py-4 px-4 text-gray-300">On-Time Delivery (OTD)</td>
                  <td className="py-4 px-4 text-orange-400 font-bold">14% Increase</td>
                </tr>
                <tr>
                  <td className="py-4 px-4 text-gray-300">Deployment Timeline</td>
                  <td className="py-4 px-4 text-orange-400 font-bold">30-45 Days</td>
                </tr>
              </tbody>
            </table>
          </div>

          {/* Calculator Placeholder */}
          <div className="bg-orange-500/10 border border-orange-500/20 p-8 rounded-3xl text-center">
            <h3 className="text-xl font-bold text-white mb-2">Manufacturing Bottleneck Cost Calculator</h3>
            <p className="text-gray-400 mb-6">Interactive component will be deployed in the next sprint.</p>
            <div className="inline-block px-6 py-3 bg-white/5 rounded-lg border border-white/10 text-sm text-gray-500">
              [ React Component Placeholder: &lt;ManufacturingCalculator /&gt; ]
            </div>
          </div>

        </section>
      </main>

      <Footer />
    </div>
  );
}
