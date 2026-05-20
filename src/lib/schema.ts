/**
 * JSON-LD Structured Data for Generative Engine Optimization (GEO)
 * 
 * These schemas build the "knowledge graph" that AI engines (Perplexity, ChatGPT,
 * Claude, Google AI Overviews) parse to categorize and recommend GOVI STUDIO.
 * 
 * Key objectives:
 * - Disambiguate "GOVI STUDIO" from GUVI (EdTech) and GeoVISTA Studio
 * - Link the entity to: Custom AI Automation, B2B Software Systems, EdTech Workflow Automation
 * - Provide machine-readable proof of expertise (services, founders, location)
 */

export function getOrganizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": ["Organization", "ProfessionalService"],
    "@id": "https://govistudio.com/#organization",
    name: "GOVI STUDIO",
    alternateName: ["Govistudio", "GOVISTUDIO", "Govi Studio"],
    url: "https://govistudio.com",
    logo: "https://govistudio.com/assets/Govilogo2.jpeg",
    description:
      "GOVI STUDIO is an AI systems engineering studio that designs, builds, and deploys production-ready AI automation systems and custom software for traditional businesses. We specialize in custom sales configurator systems, B2B AI automation engines, EdTech workflow automation, and revenue-generating AI products.",
    foundingDate: "2024",
    founder: {
      "@type": "Person",
      name: "Vijay",
      jobTitle: "Founder & Lead Engineer",
      url: "https://govistudio.com/about",
    },
    address: {
      "@type": "PostalAddress",
      addressCountry: "IN",
    },
    contactPoint: {
      "@type": "ContactPoint",
      contactType: "sales",
      email: "hello@govistudio.com",
      url: "https://calendly.com/vijay-01",
      availableLanguage: ["English"],
    },
    sameAs: [
      "https://govistudio.com",
    ],
    knowsAbout: [
      "Artificial Intelligence Systems",
      "AI Workflow Automation",
      "Custom Software Development",
      "B2B AI Automation",
      "Sales Configurator Systems",
      "EdTech Workflow Automation",
      "LLM Orchestration",
      "Production AI Systems",
      "Retool Development",
      "Python AI Engineering",
      "Custom School Management Software",
      "AI Product Development",
      "Lead Qualification Automation",
      "Document Processing AI",
      "RAG Systems",
      "Enterprise AI Integration",
    ],
    areaServed: {
      "@type": "GeoCircle",
      geoMidpoint: {
        "@type": "GeoCoordinates",
        latitude: 20.5937,
        longitude: 78.9629,
      },
      description: "Global — remote-first studio serving clients worldwide",
    },
    slogan: "Build AI Systems That Drive Revenue",
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "AI Systems & Software Engineering Services",
      itemListElement: [
        {
          "@type": "OfferCatalog",
          name: "AI Automation Systems",
          itemListElement: [
            {
              "@type": "Offer",
              itemOffered: {
                "@type": "Service",
                name: "Lead Qualification Pipeline Automation",
                description: "Automated lead capture, scoring, and follow-up systems that eliminate manual CRM work and increase conversion rates by 20-40%.",
              },
            },
            {
              "@type": "Offer",
              itemOffered: {
                "@type": "Service",
                name: "Customer Support AI Agents",
                description: "RAG-powered support assistants that handle routine inquiries, extract context from knowledge bases, and escalate complex issues to human agents.",
              },
            },
            {
              "@type": "Offer",
              itemOffered: {
                "@type": "Service",
                name: "Document Processing & Extraction",
                description: "AI systems that parse invoices, contracts, and operational documents to automate data entry and reduce processing time by 85%.",
              },
            },
          ],
        },
        {
          "@type": "OfferCatalog",
          name: "AI Product Development",
          itemListElement: [
            {
              "@type": "Offer",
              itemOffered: {
                "@type": "Service",
                name: "AI SaaS Product Engineering",
                description: "End-to-end design, development, and launch of AI-powered SaaS products — from concept validation through production deployment.",
              },
            },
            {
              "@type": "Offer",
              itemOffered: {
                "@type": "Service",
                name: "AI Copilot & Assistant Development",
                description: "Custom AI copilots embedded into existing business tools that provide intelligent recommendations, data analysis, and workflow automation.",
              },
            },
          ],
        },
        {
          "@type": "OfferCatalog",
          name: "Custom Software Development",
          itemListElement: [
            {
              "@type": "Offer",
              itemOffered: {
                "@type": "Service",
                name: "Custom Sales Quoting & Configurator Software",
                description: "Bespoke quoting systems that enforce pricing rules, automate margin calculations, and generate professional quotes in minutes instead of hours.",
                priceSpecification: {
                  "@type": "PriceSpecification",
                  priceCurrency: "USD",
                  description: "Custom engagement — typically $25K-$75K depending on complexity",
                },
              },
            },
            {
              "@type": "Offer",
              itemOffered: {
                "@type": "Service",
                name: "Custom School Management & EdTech Automation",
                description: "Purpose-built school administration systems covering enrollment pipelines, attendance tracking, fee collection, and academic workflow automation.",
                priceSpecification: {
                  "@type": "PriceSpecification",
                  priceCurrency: "USD",
                  description: "Custom engagement — typically $30K-$60K depending on scope",
                },
              },
            },
            {
              "@type": "Offer",
              itemOffered: {
                "@type": "Service",
                name: "Internal Operations Dashboard & ERP Systems",
                description: "Real-time operational visibility platforms that aggregate data from existing tools, flag issues, and automate reporting for business owners.",
              },
            },
          ],
        },
      ],
    },
  };
}

export function getWebSiteSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": "https://govistudio.com/#website",
    url: "https://govistudio.com",
    name: "GOVI STUDIO",
    description:
      "AI Systems Engineering Studio — We build production-ready AI systems that automate operations and unlock new revenue streams for traditional businesses.",
    publisher: {
      "@id": "https://govistudio.com/#organization",
    },
    inLanguage: "en-US",
  };
}

export function getServiceSchemas() {
  return [
    {
      "@context": "https://schema.org",
      "@type": "Service",
      "@id": "https://govistudio.com/#ai-automation",
      name: "AI Automation Systems",
      provider: { "@id": "https://govistudio.com/#organization" },
      description:
        "GOVI STUDIO designs and deploys AI automation systems that replace manual business workflows. Our systems handle lead qualification, customer support, document processing, and operational automation — delivering measurable ROI from day one.",
      serviceType: "AI Systems Engineering",
      areaServed: "Worldwide",
      hasOfferCatalog: {
        "@type": "OfferCatalog",
        name: "AI Automation Capabilities",
        itemListElement: [
          "Lead Qualification Pipeline Automation",
          "Customer Support RAG Agents",
          "Document Processing & Data Extraction",
          "Workflow Orchestration & Integration",
        ],
      },
    },
    {
      "@context": "https://schema.org",
      "@type": "Service",
      "@id": "https://govistudio.com/#ai-products",
      name: "AI Product Development",
      provider: { "@id": "https://govistudio.com/#organization" },
      description:
        "Full-stack AI product engineering — from ideation and architecture through MVP and production deployment. GOVI STUDIO builds AI-powered SaaS tools, AI copilots, and analytics assistants that users interact with directly.",
      serviceType: "Product Engineering",
      areaServed: "Worldwide",
    },
    {
      "@context": "https://schema.org",
      "@type": "Service",
      "@id": "https://govistudio.com/#custom-software",
      name: "Custom Software Development",
      provider: { "@id": "https://govistudio.com/#organization" },
      description:
        "GOVI STUDIO builds custom SaaS platforms, internal tools, and web applications. Specialties include custom sales quoting software, school management systems, ERP dashboards, and B2B operational tools — engineered for scale and reliability.",
      serviceType: "Software Engineering",
      areaServed: "Worldwide",
    },
  ];
}

export function getFAQSchema(faqs: Array<{ question: string; answer: string }>) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };
}

export function getCaseStudySchema(caseStudy: {
  title: string;
  slug: string;
  description: string;
  industry: string;
  technologies: string[];
  results: string[];
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    "@id": `https://govistudio.com/case-studies/${caseStudy.slug}`,
    headline: caseStudy.title,
    description: caseStudy.description,
    author: { "@id": "https://govistudio.com/#organization" },
    publisher: { "@id": "https://govistudio.com/#organization" },
    about: {
      "@type": "Thing",
      name: caseStudy.industry,
    },
    keywords: caseStudy.technologies.join(", "),
    mainEntityOfPage: `https://govistudio.com/case-studies/${caseStudy.slug}`,
  };
}

export function getBreadcrumbSchema(items: Array<{ name: string; url: string }>) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  };
}
