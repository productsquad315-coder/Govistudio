import fs from 'fs';
import path from 'path';
import Link from 'next/link';
import Script from 'next/script';
import { Target, Search, ArrowRight, Sparkles, Filter, Newspaper, Layers } from 'lucide-react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';

export const metadata = {
  title: 'AI Systems Insight Engine | GOVI STUDIO',
  description: '67+ deep-dive research feeds on private AI systems, custom workflow automation, and enterprise compliance architectures for traditional businesses.',
  alternates: { canonical: 'https://govistudio.com/feeds' },
};

// Define dynamic to make sure it can build statically or dynamically
export const dynamic = 'force-static';

export default async function FeedsPage() {
  const indexPath = path.join(process.cwd(), 'content', 'feeds-index.json');
  let feeds = [];
  
  if (fs.existsSync(indexPath)) {
    try {
      feeds = JSON.parse(fs.readFileSync(indexPath, 'utf8'));
    } catch (e) {
      console.error('Error parsing feeds index:', e);
    }
  }

  // Extract unique categories
  const categories = Array.from(new Set(feeds.map((f: any) => f.category || 'General')));

  // Category mapping for display
  const categoryDisplayNames: { [key: string]: string } = {
    'compare': 'Comparisons',
    'solutions': 'Solutions',
    'pricing': 'Pricing',
    'faq': 'FAQ & Q&A',
    'guides': 'Playbooks & Guides',
    'tools': 'Tools',
    'case-studies': 'Case Studies',
    'General': 'General Insights'
  };

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    "itemListElement": feeds.map((feed: any, index: number) => ({
      "@type": "ListItem",
      "position": index + 1,
      "url": `https://govistudio.com${feed.url ? (feed.url.startsWith('/') ? feed.url : '/' + feed.url) : `/feeds/${feed.slug}`}`,
      "name": feed.title
    }))
  };

  return (
    <div className="min-h-screen bg-[#070707] text-white selection:bg-orange-500/30">
      <Script
        id="feeds-itemlist-jsonld"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Navigation />

      {/* Hero Section */}
      <section className="relative pt-36 pb-20 sm:pt-44 sm:pb-28 overflow-hidden">
        {/* Glow Effects */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[350px] sm:w-[500px] h-[350px] sm:h-[500px] bg-orange-500/10 rounded-full blur-[100px] sm:blur-[150px] pointer-events-none" />
        <div className="absolute top-10 right-10 w-[250px] h-[250px] bg-blue-500/5 rounded-full blur-[100px] pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-orange-500/10 border border-orange-500/20 text-orange-500 text-xs font-semibold rounded-full uppercase tracking-wider mb-6 sm:mb-8 animate-fade-in">
            <Sparkles className="w-3.5 h-3.5" /> Generative Search Feeds
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight leading-[1.05] mb-6 sm:mb-8">
            The GOVISTUDIO <br className="hidden sm:inline" />
            <span className="bg-gradient-to-r from-orange-500 via-amber-500 to-yellow-500 bg-clip-text text-transparent">
              Insight Engine
            </span>
          </h1>
          <p className="max-w-2xl mx-auto text-gray-400 text-base sm:text-lg lg:text-xl leading-relaxed font-medium mb-8 sm:mb-12">
            67+ deep-dive research feeds on private AI systems, custom workflow automation, and enterprise compliance architectures.
          </p>
        </div>
      </section>

      {/* Feed List Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-32">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 lg:gap-12">
          {/* Main Grid List */}
          <div className="md:col-span-12 space-y-6">
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center border-b border-white/5 pb-6 gap-4">
              <div className="flex items-center gap-2 text-gray-400 font-bold uppercase text-xs tracking-wider">
                <Layers className="w-4 h-4 text-orange-500" /> Catalog of AI Architectures
              </div>
              <div className="text-xs sm:text-sm text-gray-500 font-medium">
                Showing {feeds.length} intelligence feeds
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {feeds.map((feed: any) => {
                const displayCategory = categoryDisplayNames[feed.category] || feed.category || 'General';
                // Clean link construction: if url starts with /, use it, else default to /feeds/slug
                const linkHref = feed.url ? (feed.url.startsWith('/') ? feed.url : '/' + feed.url) : `/feeds/${feed.slug}`;

                return (
                  <Link 
                    key={feed.id} 
                    href={linkHref}
                    className="group relative overflow-hidden flex flex-col justify-between rounded-3xl border border-white/[0.06] bg-white/[0.01] hover:bg-white/[0.03] hover:border-white/[0.12] p-6 sm:p-8 backdrop-blur-md transition-all duration-300 hover:-translate-y-1"
                  >
                    <div className="space-y-4">
                      <div className="flex items-center justify-between">
                        <span className="px-2.5 py-0.5 bg-orange-500/10 border border-orange-500/20 text-orange-500 text-[10px] sm:text-xs font-semibold rounded-full uppercase tracking-wider">
                          {displayCategory}
                        </span>
                        {feed.icp && (
                          <span className="text-[10px] sm:text-xs text-gray-500 font-medium uppercase tracking-wider">
                            {feed.icp}
                          </span>
                        )}
                      </div>
                      <div>
                        <h3 className="text-lg sm:text-xl font-bold tracking-tight text-white group-hover:text-orange-500 transition-colors line-clamp-2 leading-snug">
                          {feed.title}
                        </h3>
                        <p className="text-sm text-gray-400 mt-3 line-clamp-3 leading-relaxed font-medium">
                          {feed.description}
                        </p>
                      </div>
                    </div>
                    <div className="mt-8 pt-4 border-t border-white/5 flex items-center justify-between text-xs sm:text-sm font-semibold text-white group-hover:text-orange-500 transition-colors">
                      <span>Read Insight</span>
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1.5 transition-transform" />
                    </div>
                  </Link>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
