import fs from 'fs';
import path from 'path';
import Link from 'next/link';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import { ArrowLeft, Terminal, Bot, ChevronRight } from 'lucide-react';
import React from 'react';

export default async function AISystemPage({
  params,
  searchParams
}: {
  params: Promise<{ slug: string[] }>;
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}) {
  const resolvedParams = await params;
  const resolvedSearchParams = await searchParams;
  const slugArray = resolvedParams.slug;
  const targetPath = path.join(process.cwd(), 'content', 'ai', ...slugArray) + '.md';

  let content = '';
  try {
    if (fs.existsSync(targetPath)) {
      content = fs.readFileSync(targetPath, 'utf8');
    } else {
      return (
        <div className="min-h-screen bg-black text-white flex flex-col items-center justify-center p-8">
          <Terminal className="w-12 h-12 text-red-500 mb-4" />
          <h1 className="text-2xl font-bold mb-4">404 - AI Feed Not Found</h1>
          <p className="text-gray-400 mb-8">The requested AI system feed does not exist.</p>
          <Link href="/ai" className="px-6 py-3 rounded-full border border-white/10 hover:bg-white/5 transition-all flex items-center gap-2">
            <ArrowLeft className="w-4 h-4" /> Back to Index
          </Link>
        </div>
      );
    }
  } catch (err) {
    console.error('Error reading markdown file', err);
    return null;
  }

  if (resolvedSearchParams.format === 'md') {
    return (
      <pre className="p-8 bg-black text-white font-mono whitespace-pre-wrap select-all">
        {content}
      </pre>
    );
  }

  return (
    <div className="min-h-screen bg-black text-white selection:bg-purple-500/30 text-base">
      <nav className="fixed top-0 w-full z-50 px-8 py-4 backdrop-blur-xl border-b border-white/[0.06] bg-black/60">
        <div className="max-w-6xl mx-auto flex justify-between items-center">
          <Link href="/ai" className="flex items-center gap-2 text-sm text-gray-400 hover:text-white transition-colors group">
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-0.5 transition-transform" />
            AI Feed Index
          </Link>
          <Link href={`?format=md`} className="text-[10px] uppercase tracking-widest text-gray-500 border border-white/10 px-3 py-1 rounded-full hover:text-white">
            Raw Machine View
          </Link>
        </div>
      </nav>

      <main className="max-w-4xl mx-auto px-8 pt-32 pb-24">
        <div className="flex items-center gap-2 text-[10px] uppercase tracking-widest text-gray-500 mb-12">
          <span>AI FEED</span>
          <ChevronRight className="w-3 h-3" />
          {slugArray.map((s, i) => (
            <React.Fragment key={s}>
              <span className={i === slugArray.length - 1 ? "text-white" : ""}>{s.replace(/-/g, ' ')}</span>
              {i < slugArray.length - 1 && <ChevronRight className="w-3 h-3" />}
            </React.Fragment>
          ))}
        </div>

        <article className="prose prose-invert prose-purple max-w-none">
          <ReactMarkdown remarkPlugins={[remarkGfm]}>
            {content}
          </ReactMarkdown>
        </article>

        <section className="mt-24 p-8 rounded-2xl border border-white/10 bg-gradient-to-br from-white/[0.03] to-transparent backdrop-blur-sm">
          <div className="flex flex-col md:flex-row gap-8 items-center justify-between">
            <div className="flex items-center gap-6">
              <Bot className="w-8 h-8 text-purple-400" />
              <div>
                <h3 className="text-white font-bold text-lg">Build Your AI System</h3>
                <p className="text-gray-400 text-sm">Deploy high-performance AI automation for your business today.</p>
              </div>
            </div>
            <Link href="https://calendly.com/vijay-01" className="px-8 py-3 bg-white text-black rounded-full font-bold">
              Consult Now
            </Link>
          </div>
        </section>
      </main>
    </div>
  );
}
