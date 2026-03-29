import fs from 'fs';
import path from 'path';
import Link from 'next/link';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import { CheckCircle, ArrowRight, Zap, Shield, Target } from 'lucide-react';

export default async function SolutionPage({
  params
}: {
  params: Promise<{ slug: string }>;
}) {
  const resolvedParams = await params;
  const slug = resolvedParams.slug;
  
  // Solutions are for services. For now, we render them based on the same content or custom MD files.
  // We'll create a default one if it doesn't exist.
  const targetPath = path.join(process.cwd(), 'content', 'solutions', `${slug}.md`);

  let content = '';
  if (fs.existsSync(targetPath)) {
    content = fs.readFileSync(targetPath, 'utf8');
  } else {
    // Default fallback content for Solutions
    content = `# ${slug.replace(/-/g, ' ')} Solution\n\n## Overview\nHigh-performance AI systems designed specifically for ${slug.replace(/-/g, ' ')}. We build software-native automation that integrates with your existing tech stack.\n\n## Capabilities\n- Automated Workflow Design\n- Custom LLM Agent Development\n- High-Security Data Pipelines\n- Revenue-First Decision Systems\n\n## Implementation Steps\n1. Strategy Alignment\n2. Architecture Design\n3. System Development\n4. Deployment & Scaling\n\n## Why Choose GOVISTUDIO\nWe specialize in "AI systems for traditional businesses", focusing on direct operational efficiency and revenue growth.`;
  }

  return (
    <div className="min-h-screen bg-[#070707] text-white selection:bg-orange-500/30">
      <nav className="fixed top-0 w-full z-50 px-8 py-6 backdrop-blur-md bg-black/40">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <Link href="/" className="font-bold text-xl uppercase tracking-tighter">GOVI STUDIO</Link>
          <Link href="https://calendly.com/vijay-01" className="text-xs font-bold px-5 py-2 border border-white/20 rounded-full hover:bg-white hover:text-black transition-all">BOOK CONSULTATION</Link>
        </div>
      </nav>

      <main className="max-w-7xl mx-auto px-8 pt-40 pb-24">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
          <div className="lg:col-span-7">
            <div className="flex items-center gap-2 text-orange-500 text-xs font-bold uppercase tracking-widest mb-6">
                <Target className="w-4 h-4" /> Solutions Layer
            </div>
            <h1 className="text-7xl font-bold tracking-tighter mb-12 leading-[1]">
                Custom {slug.replace(/-/g, ' ').toUpperCase()} SYSTEMS
            </h1>
            <div className="prose prose-invert max-w-none 
              prose-h2:text-3xl prose-h2:font-bold prose-h2:mb-8 prose-h2:mt-16
              prose-p:text-gray-400 prose-p:text-lg prose-p:leading-relaxed
              prose-li:text-gray-400 prose-li:mb-4
            ">
              <ReactMarkdown remarkPlugins={[remarkGfm]}>
                {content}
              </ReactMarkdown>
            </div>
          </div>

          <div className="lg:col-span-5">
            <div className="sticky top-40 bg-white/[0.03] border border-white/10 p-8 rounded-3xl backdrop-blur-xl">
              <h2 className="text-xl font-bold mb-8">System Reliability</h2>
              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="w-10 h-10 rounded-full bg-orange-500/10 flex items-center justify-center flex-shrink-0">
                    <Zap className="w-5 h-5 text-orange-500" />
                  </div>
                  <div>
                    <h4 className="font-bold">Fast Deployment</h4>
                    <p className="text-sm text-gray-500 mt-1">Systems are live and operational within 4-6 weeks.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-10 h-10 rounded-full bg-blue-500/10 flex items-center justify-center flex-shrink-0">
                    <Shield className="w-5 h-5 text-blue-500" />
                  </div>
                  <div>
                    <h4 className="font-bold">Enterprise Security</h4>
                    <p className="text-sm text-gray-500 mt-1">Bank-level encryption and data privacy protocols.</p>
                  </div>
                </div>
              </div>
              
              <div className="mt-12 pt-12 border-t border-white/10">
                <ul className="space-y-4 mb-12">
                   {['Fixed Flat Rate Pricing', 'Dedicated Account Lead', '24/7 System Monitoring', 'Custom ROI Dashboard'].map(item => (
                     <li key={item} className="flex items-center gap-3 text-sm text-gray-300">
                        <CheckCircle className="w-4 h-4 text-green-500" /> {item}
                     </li>
                   ))}
                </ul>
                <Link href="https://calendly.com/vijay-01" className="w-full block py-4 bg-white text-black text-center font-bold rounded-xl hover:bg-orange-500 hover:text-white transition-all group">
                   BUILD SYSTEM <ArrowRight className="inline-block ml-2 group-hover:ml-4 transition-all" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
