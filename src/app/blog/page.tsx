import Link from 'next/link';
import { BookOpen } from 'lucide-react';
import BlogCard from '@/components/BlogCard';
import { getAllBlogs } from '@/lib/content';

export default async function BlogIndexPage() {
  const articles = getAllBlogs();

  return (
    <div className="min-h-screen bg-black text-white selection:bg-purple-500/30">
      <nav className="fixed top-0 w-full z-50 px-8 py-4 backdrop-blur-xl border-b border-white/[0.06] bg-black/60">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <Link href="/" className="font-bold text-lg tracking-tight">
            <span className="text-white">GOVI</span>
            <span className="text-gray-500 ml-1 font-normal">STUDIO</span>
          </Link>
          <div className="flex items-center gap-6 text-[10px] uppercase tracking-widest text-gray-500">
            <Link href="/ai" className="hover:text-white transition-colors">AI Feed</Link>
          </div>
        </div>
      </nav>

      <main className="max-w-7xl mx-auto px-8 pt-32 pb-24">
        <div className="mb-24">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-[10px] uppercase tracking-[0.2em] font-bold mb-6">
            <BookOpen className="w-3 h-3" />
            Insights & Strategy
          </div>
          <h1 className="text-6xl font-bold tracking-tight mb-8">
            The Business of AI
          </h1>
          <p className="text-xl text-gray-400 max-w-2xl leading-relaxed">
            Practical guides and strategic insights on implementing AI systems for revenue-generating workflows in traditional industries.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {articles.map((article) => (
            <BlogCard
              key={article.path}
              title={article.title}
              href={article.path}
              summary={article.summary}
              readTimeMinutes={article.readTimeMinutes}
              tag={article.tag}
            />
          ))}
        </div>
      </main>
    </div>
  );
}
