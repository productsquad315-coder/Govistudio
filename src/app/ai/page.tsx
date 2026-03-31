import Link from 'next/link';
import { Terminal, Zap, Database, Cpu } from 'lucide-react';
import FeedCard from '@/components/FeedCard';
import { getAllAiFeeds } from '@/lib/content';
import Logo from '@/components/Logo';

export default async function AIIndexPage() {
  const links = getAllAiFeeds();

  const categories = {
    'Industries': links.filter(l => l.path.includes('/industries/')),
    'Use Cases': links.filter(l => l.path.includes('/use-cases/') || l.path.includes('/usecases/')),
    'Implementation': links.filter(l => l.path.includes('/implementation/')),
    'Comparisons': links.filter(l => l.path.includes('/comparisons/')),
    'ROI & Strategy': links.filter(l => l.path.includes('/roi/')),
    'Operations': links.filter(l => l.path.includes('/long-tail/') || l.path.includes('/longtail/')),
  };

  return (
    <div className="min-h-screen bg-black text-white selection:bg-purple-500/30">
      <div className="fixed inset-0 overflow-hidden pointer-events-none opacity-40">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-purple-900/20 blur-[120px] rounded-full" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-blue-900/10 blur-[120px] rounded-full" />
      </div>

      <nav className="fixed top-0 w-full z-50 px-8 py-4 backdrop-blur-xl border-b border-white/[0.06] bg-black/60">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <Logo />
          <div className="flex items-center gap-6">
            <Link href="/blog" className="text-[10px] uppercase tracking-widest text-gray-500 hover:text-white transition-colors">
              Blog
            </Link>
            <Link href="/llms.txt" className="text-[10px] uppercase tracking-widest text-gray-500 hover:text-white transition-colors">
              Machine View
            </Link>
          </div>
        </div>
      </nav>

      <main className="max-w-7xl mx-auto px-8 pt-32 pb-24 relative z-10">
        <div className="mb-24 max-w-3xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-400 text-[10px] uppercase tracking-[0.2em] font-bold mb-6">
            <Terminal className="w-3 h-3" />
            Programmatic AI Feed
          </div>
          <h1 className="text-6xl font-bold tracking-tight mb-8 bg-gradient-to-b from-white to-white/60 bg-clip-text text-transparent">
            AI Systems for Traditional Businesses
          </h1>
          <p className="text-xl text-gray-400 leading-relaxed mb-12">
            LLM-optimized knowledge structure mapping the implementation logic of software-based AI systems.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {Object.entries(categories).map(([name, items]) => (
            items.length > 0 && (
              <section key={name} className="flex flex-col">
                <div className="flex items-center gap-3 mb-8">
                  <div className="p-2 rounded-lg bg-white/5 border border-white/10 text-purple-400">
                    {name === 'Industries' ? <Database className="w-4 h-4" /> : 
                     name === 'Use Cases' ? <Cpu className="w-4 h-4" /> : 
                     <Zap className="w-4 h-4" />}
                  </div>
                  <h2 className="text-xs uppercase tracking-[0.2em] text-gray-500 font-bold">{name}</h2>
                  <span className="ml-auto text-[10px] text-gray-600 font-mono">{items.length} Articles</span>
                </div>
                
                <div className="grid grid-cols-1 gap-4">
                  {items.map((link) => (
                    <FeedCard
                      key={link.path}
                      title={link.title}
                      href={link.path}
                      summary={link.summary}
                      tag={link.tag}
                    />
                  ))}
                </div>
              </section>
            )
          ))}
        </div>
      </main>
    </div>
  );
}
