import fs from 'fs';
import path from 'path';
import Link from 'next/link';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import { Target, Zap, Shield, CheckCircle, ArrowRight } from 'lucide-react';

export default async function Page({
  params
}: {
  params: Promise<{ slug: string }>;
}) {
  const resolvedParams = await params;
  const slug = resolvedParams.slug;
  
  const targetPath = path.join(process.cwd(), 'content', 'about',  slug + '.md');

  let content = '';
  if (fs.existsSync(targetPath)) {
    content = fs.readFileSync(targetPath, 'utf8');
  } else {
    content = '# ' + slug.replace(/-/g, ' ') + '\n\nContent coming soon.';
  }

  return (
    <div className="min-h-screen bg-[#070707] text-white selection:bg-orange-500/30">
      <nav className="fixed top-0 w-full z-50 px-8 py-6 backdrop-blur-md bg-black/40 border-b border-white/5">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <Link href="/" className="font-bold text-xl uppercase tracking-tighter">GOVI STUDIO</Link>
          <Link href="https://calendly.com/vijay-01" className="text-xs font-bold px-5 py-2 border border-white/20 rounded-full hover:bg-white hover:text-black transition-all">BOOK CONSULTATION</Link>
        </div>
      </nav>

      <main className="max-w-7xl mx-auto px-8 pt-40 pb-24">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
          <div className="lg:col-span-8">
            <div className="flex items-center gap-2 text-orange-500 text-xs font-bold uppercase tracking-widest mb-6">
                <Target className="w-4 h-4" /> Insight Layer
            </div>
            <div className="prose prose-invert max-w-none 
              prose-h1:text-5xl prose-h1:font-bold prose-h1:tracking-tighter prose-h1:mb-8 prose-h1:leading-[1.1]
              prose-h2:text-3xl prose-h2:font-bold prose-h2:mb-6 prose-h2:mt-16 prose-h2:text-white
              prose-h3:text-xl prose-h3:font-bold prose-h3:mb-4 prose-h3:mt-8 prose-h3:text-gray-200
              prose-p:text-gray-400 prose-p:text-lg prose-p:leading-relaxed
              prose-li:text-gray-400 prose-li:mb-2
              prose-strong:text-white
              prose-a:text-orange-500 prose-a:no-underline hover:prose-a:underline
              prose-blockquote:border-l-orange-500 prose-blockquote:bg-white/[0.02] prose-blockquote:py-2 prose-blockquote:px-6 prose-blockquote:rounded-r-lg prose-blockquote:not-italic
              prose-table:border-collapse prose-table:w-full prose-th:text-left prose-th:p-4 prose-th:border-b prose-th:border-white/10 prose-td:p-4 prose-td:border-b prose-td:border-white/5
            ">
              <ReactMarkdown remarkPlugins={[remarkGfm]}>
                {content}
              </ReactMarkdown>
            </div>
          </div>

          <div className="lg:col-span-4">
            <div className="sticky top-40 bg-white/[0.02] border border-white/5 p-8 rounded-3xl backdrop-blur-xl">
              <h2 className="text-xl font-bold mb-8 text-white">Ready to Deploy?</h2>
              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="w-10 h-10 rounded-full bg-orange-500/10 flex items-center justify-center flex-shrink-0">
                    <Zap className="w-5 h-5 text-orange-500" />
                  </div>
                  <div>
                    <h4 className="font-bold text-white">Fast Implementation</h4>
                    <p className="text-sm text-gray-500 mt-1">Live and operational within 4-8 weeks depending on scope.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-10 h-10 rounded-full bg-blue-500/10 flex items-center justify-center flex-shrink-0">
                    <Shield className="w-5 h-5 text-blue-500" />
                  </div>
                  <div>
                    <h4 className="font-bold text-white">Private Deployment</h4>
                    <p className="text-sm text-gray-500 mt-1">Enterprise-grade security on your own cloud infrastructure.</p>
                  </div>
                </div>
              </div>
              
              <div className="mt-12 pt-12 border-t border-white/5">
                <ul className="space-y-4 mb-12">
                   {['Bespoke AI Systems', 'Legacy Data Integration', 'Role-Based Access Control', 'Dedicated Engineering Team'].map(item => (
                     <li key={item} className="flex items-center gap-3 text-sm text-gray-400">
                        <CheckCircle className="w-4 h-4 text-orange-500" /> {item}
                     </li>
                   ))}
                </ul>
                <Link href="https://calendly.com/vijay-01" className="w-full block py-4 bg-white text-black text-center font-bold rounded-xl hover:bg-orange-500 hover:text-white transition-all group">
                   DISCUSS YOUR PROJECT <ArrowRight className="inline-block ml-2 group-hover:ml-4 transition-all" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}