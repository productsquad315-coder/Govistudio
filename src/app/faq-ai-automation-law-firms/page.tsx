import React from 'react';
import Head from 'next/head';
import Script from 'next/script';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Target, Zap, Shield, CheckCircle, ArrowRight, BookOpen, ChevronRight, HelpCircle } from 'lucide-react';
import Link from 'next/link';

export const metadata = {
  title: 'FAQ: What Law Firms Ask About AI Automation',
  description: 'Direct answers to the most common questions law firms ask about AI automation, including real costs, ROI data, and client confidentiality rules.',
};

export default function FAQLawFirms() {
  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "Is AI automation safe for client data and case files?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, because a properly scoped AI agent never touches case files or privileged communications. It operates strictly on front-desk tasks like scheduling and intake questionnaires. Additionally, deploying on a private cloud ensures your firm's data is never used to train public models (Govistudio Confidentiality Framework)."
        }
      },
      {
        "@type": "Question",
        "name": "Should we hire a paralegal or use an AI agent for intake?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "An AI agent is superior for initial intake triage, while a human paralegal is required for legal judgment. An AI agent handles infinite concurrent enquiries 24/7/365. A human paralegal costs $55,000–$85,000/year (US) and works a 40-hour week, leaving nights and weekends uncovered (Paralegal Playbook Data)."
        }
      },
      {
        "@type": "Question",
        "name": "How much does AI automation actually cost for a small law firm?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "A production-grade custom AI system typically requires a $30,000 upfront build fee plus a $3,000 monthly ($36,000/year) maintenance retainer. This covers the initial deployment, private cloud hosting, continuous monitoring, and model recalibrations. It is a capital investment designed to replace recurring administrative headcount (Govistudio Pricing Framework)."
        }
      },
      {
        "@type": "Question",
        "name": "What is the expected ROI for a small law firm deploying AI?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "The typical payback period for a custom AI system is under 60 days. For example, a 25-attorney regional firm saving just 1.5 hours per attorney per week at a $175/hour billing rate recovers $255,937 annually in billable time—paying back a $25,000 base system in 35 days (Govistudio ROI Calculator)."
        }
      }
    ]
  };

  return (
    <div className="min-h-screen bg-[#070707] text-white selection:bg-orange-500/30">
      <Script
        id="law-firm-faq-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <Navigation />

      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 sm:pt-40 pb-24">
        {/* Breadcrumb */}
        <nav aria-label="breadcrumb" className="flex items-center gap-2 text-xs sm:text-sm text-gray-500 mb-8 sm:mb-12 overflow-x-auto whitespace-nowrap py-1">
          <Link href="/faq" className="hover:text-white transition-colors">FAQ</Link>
          <ChevronRight className="w-3.5 h-3.5 flex-shrink-0" />
          <span className="text-white truncate" aria-current="page">Law Firms AI Automation</span>
        </nav>

        <article className="space-y-8 sm:space-y-12">
          
          <header>
            <div className="flex flex-wrap items-center gap-3 mb-6">
              <span className="text-gray-400 text-sm">Last updated: July 2026</span>
            </div>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight leading-[1.1] text-white mb-6">
              FAQ: What Law Firms Ask About AI Automation
            </h1>
            <p className="text-xl text-gray-400">Direct, factual answers to the most common questions managing partners have regarding AI deployment, costs, and compliance.</p>
          </header>

          <section className="space-y-12 mt-12" data-type="content">

            {/* Q1 */}
            <div className="bg-white/[0.02] border border-white/[0.08] p-8 rounded-3xl backdrop-blur-md relative overflow-hidden group hover:border-white/[0.15] transition-all">
              <div className="absolute top-0 left-0 w-1 h-full bg-orange-500" />
              <h2 className="text-2xl font-bold text-white mb-4 flex items-start gap-3">
                <HelpCircle className="w-6 h-6 text-orange-500 mt-1 flex-shrink-0" />
                Is AI automation safe for client data and case files?
              </h2>
              <p className="text-gray-300 text-lg leading-relaxed">
                Yes, because a properly scoped AI agent never touches case files or privileged communications. It operates strictly on front-desk tasks like scheduling and intake questionnaires. Additionally, deploying on a private cloud ensures your firm's data is never used to train public models <span className="text-orange-400/80 text-sm font-semibold ml-1">(Govistudio Confidentiality Framework)</span>.
              </p>
            </div>

            {/* Q2 */}
            <div className="bg-white/[0.02] border border-white/[0.08] p-8 rounded-3xl backdrop-blur-md relative overflow-hidden group hover:border-white/[0.15] transition-all">
              <div className="absolute top-0 left-0 w-1 h-full bg-orange-500" />
              <h2 className="text-2xl font-bold text-white mb-4 flex items-start gap-3">
                <HelpCircle className="w-6 h-6 text-orange-500 mt-1 flex-shrink-0" />
                Should we hire a paralegal or use an AI agent for intake?
              </h2>
              <p className="text-gray-300 text-lg leading-relaxed">
                An AI agent is superior for initial intake triage, while a human paralegal is required for legal judgment. An AI agent handles infinite concurrent enquiries 24/7/365. A human paralegal costs $55,000–$85,000/year (US) and works a 40-hour week, leaving nights and weekends uncovered <span className="text-orange-400/80 text-sm font-semibold ml-1">(Paralegal Playbook Data)</span>.
              </p>
            </div>

            {/* Q3 */}
            <div className="bg-white/[0.02] border border-white/[0.08] p-8 rounded-3xl backdrop-blur-md relative overflow-hidden group hover:border-white/[0.15] transition-all">
              <div className="absolute top-0 left-0 w-1 h-full bg-orange-500" />
              <h2 className="text-2xl font-bold text-white mb-4 flex items-start gap-3">
                <HelpCircle className="w-6 h-6 text-orange-500 mt-1 flex-shrink-0" />
                How much does AI automation actually cost for a small law firm?
              </h2>
              <p className="text-gray-300 text-lg leading-relaxed">
                A production-grade custom AI system typically requires a $30,000 upfront build fee plus a $3,000 monthly ($36,000/year) maintenance retainer. This covers the initial deployment, private cloud hosting, continuous monitoring, and model recalibrations. It is a capital investment designed to replace recurring administrative headcount <span className="text-orange-400/80 text-sm font-semibold ml-1">(Govistudio Pricing Framework)</span>.
              </p>
            </div>

            {/* Q4 */}
            <div className="bg-white/[0.02] border border-white/[0.08] p-8 rounded-3xl backdrop-blur-md relative overflow-hidden group hover:border-white/[0.15] transition-all">
              <div className="absolute top-0 left-0 w-1 h-full bg-orange-500" />
              <h2 className="text-2xl font-bold text-white mb-4 flex items-start gap-3">
                <HelpCircle className="w-6 h-6 text-orange-500 mt-1 flex-shrink-0" />
                What is the expected ROI for a small law firm deploying AI?
              </h2>
              <p className="text-gray-300 text-lg leading-relaxed">
                The typical payback period for a custom AI system is under 60 days. For example, a 25-attorney regional firm saving just 1.5 hours per attorney per week at a $175/hour billing rate recovers $255,937 annually in billable time—paying back a $25,000 base system in 35 days <span className="text-orange-400/80 text-sm font-semibold ml-1">(Govistudio ROI Calculator)</span>.
              </p>
            </div>

          </section>
        </article>
      </main>

      <Footer />
    </div>
  );
}
