const fs = require('fs');
const path = require('path');

const SOURCE_FILE = path.join(__dirname, '..', 'govistudio-100-feeds.md');
const CONTENT_DIR = path.join(__dirname, '..', 'content', 'feeds');
const INDEX_FILE = path.join(__dirname, '..', 'content', 'feeds-index.json');
const APP_DIR = path.join(__dirname, '..', 'src', 'app');

function slugify(text) {
  return text
    .toString()
    .toLowerCase()
    .trim()
    .replace(/\s+/g, '-')
    .replace(/[^\w-]+/g, '')
    .replace(/--+/g, '-');
}

function getPageTemplate(folderName, isRoot = false, rootSlug = '') {
  const slugParam = isRoot ? `"${rootSlug}"` : "resolvedParams.slug";
  const paramsDecl = isRoot ? '' : '{\n  params\n}: {\n  params: Promise<{ slug: string }>;\n}';
  const paramsResolve = isRoot ? '' : 'const resolvedParams = await params;';
  const metadataParamsDecl = isRoot ? '' : '{\n  params\n}: {\n  params: Promise<{ slug: string }>;\n}';
  const metadataParamsResolve = isRoot ? '' : 'const resolvedParams = await params;';

  return `import fs from 'fs';
import path from 'path';
import Link from 'next/link';
import Script from 'next/script';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import { Target, Zap, Shield, CheckCircle, ArrowRight, BookOpen, ChevronRight } from 'lucide-react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';

export async function generateMetadata(${metadataParamsDecl}) {
  ${metadataParamsResolve}
  const slug = ${slugParam};
  const targetPath = path.join(process.cwd(), 'content', 'feeds', slug + '.json');
  
  if (!fs.existsSync(targetPath)) {
    return { title: 'Feed Not Found' };
  }
  
  const feed = JSON.parse(fs.readFileSync(targetPath, 'utf8'));
  const description = feed.directAnswer || feed.description || feed.title;
  const url = 'https://govistudio.com' + (feed.url ? (feed.url.startsWith('/') ? feed.url : '/' + feed.url) : '/feeds/' + feed.slug);
  
  return {
    title: feed.title + ' | GOVI STUDIO AI Systems',
    description: description.substring(0, 160),
    alternates: { canonical: url },
    openGraph: {
      title: feed.title,
      description: description.substring(0, 160),
      url: url,
      type: 'article',
      siteName: 'GOVI STUDIO',
    },
    twitter: {
      card: 'summary_large_image',
      title: feed.title,
      description: description.substring(0, 160),
    }
  };
}

export default async function FeedPage(${paramsDecl}) {
  ${paramsResolve}
  const slug = ${slugParam};
  
  const targetPath = path.join(process.cwd(), 'content', 'feeds', slug + '.json');
  
  if (!fs.existsSync(targetPath)) {
    return (
      <div className="min-h-screen bg-[#070707] text-white flex flex-col items-center justify-center gap-4">
        <h1 className="text-2xl font-bold">Feed Not Found</h1>
        <Link href="/feeds" className="text-orange-500 hover:underline">Back to all feeds</Link>
      </div>
    );
  }
  
  const feed = JSON.parse(fs.readFileSync(targetPath, 'utf8'));
  const url = 'https://govistudio.com' + (feed.url ? (feed.url.startsWith('/') ? feed.url : '/' + feed.url) : '/feeds/' + feed.slug);

  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": feed.title,
    "description": feed.directAnswer || feed.description || feed.title,
    "author": {
      "@type": "Organization",
      "name": "GOVI STUDIO",
      "url": "https://govistudio.com"
    },
    "publisher": {
      "@type": "Organization",
      "name": "GOVI STUDIO",
      "url": "https://govistudio.com"
    },
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": url
    },
    "articleSection": feed.category || "General Insights"
  };

  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Feeds",
        "item": "https://govistudio.com/feeds"
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": feed.category || "General",
        "item": "https://govistudio.com/feeds"
      },
      {
        "@type": "ListItem",
        "position": 3,
        "name": feed.title,
        "item": url
      }
    ]
  };

  // Simple FAQ extraction logic
  const faqs = [];
  if (feed.body && (feed.body.includes('### FAQs') || feed.body.includes('**Q:'))) {
    const lines = feed.body.split('\\n');
    let currentQ = '';
    let currentA = '';
    for (let i = 0; i < lines.length; i++) {
      const line = lines[i].trim();
      if (line.startsWith('**Q:')) {
        if (currentQ) faqs.push({ q: currentQ, a: currentA.trim() });
        currentQ = line.replace('**Q:', '').replace('**', '').trim();
        currentA = '';
      } else if (line.startsWith('A:') && currentQ) {
        currentA = line.replace('A:', '').trim();
      } else if (currentQ && line && !line.startsWith('#') && !line.startsWith('---')) {
        currentA += ' ' + line;
      } else if ((line.startsWith('---') || line.startsWith('#')) && currentQ) {
         faqs.push({ q: currentQ, a: currentA.trim() });
         currentQ = '';
         currentA = '';
      }
    }
    if (currentQ) faqs.push({ q: currentQ, a: currentA.trim() });
  }

  let faqJsonLd = null;
  if (faqs.length > 0) {
    faqJsonLd = {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": faqs.map(faq => ({
        "@type": "Question",
        "name": faq.q,
        "acceptedAnswer": {
          "@type": "Answer",
          "text": faq.a
        }
      }))
    };
  }

  return (
    <div className="min-h-screen bg-[#070707] text-white selection:bg-orange-500/30">
      <Script
        id={"article-jsonld-" + feed.slug}
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }}
      />
      <Script
        id={"breadcrumb-jsonld-" + feed.slug}
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      {faqJsonLd && (
        <Script
          id={"faq-jsonld-" + feed.slug}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
        />
      )}
      <Navigation />

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 sm:pt-40 pb-24">
        {/* Breadcrumb */}
        <nav aria-label="breadcrumb" className="flex items-center gap-2 text-xs sm:text-sm text-gray-500 mb-8 sm:mb-12 overflow-x-auto whitespace-nowrap py-1">
          <Link href="/feeds" className="hover:text-white transition-colors">Feeds</Link>
          <ChevronRight className="w-3.5 h-3.5 flex-shrink-0" />
          <span className="text-gray-400 capitalize">{feed.category || 'General'}</span>
          <ChevronRight className="w-3.5 h-3.5 flex-shrink-0" />
          <span className="text-white truncate max-w-[200px] sm:max-w-xs" aria-current="page">{feed.title}</span>
        </nav>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16">
          <article className="lg:col-span-8 space-y-8 sm:space-y-12">
            {/* Header Area */}
            <header>
              <div className="flex flex-wrap items-center gap-3 mb-6">
                <span className="px-3 py-1 bg-orange-500/10 border border-orange-500/20 text-orange-500 text-xs font-semibold rounded-full uppercase tracking-wider">
                  {feed.category || 'Insight'}
                </span>
                {feed.icp && (
                  <span className="px-3 py-1 bg-white/5 border border-white/10 text-gray-300 text-xs font-semibold rounded-full uppercase tracking-wider">
                    {feed.icp}
                  </span>
                )}
              </div>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight leading-[1.1] text-white mb-6">
                {feed.title}
              </h1>
            </header>

            {/* Direct Answer/Summary Card */}
            {feed.directAnswer && (
              <section className="relative group overflow-hidden rounded-3xl border border-white/[0.08] bg-white/[0.02] p-6 sm:p-8 backdrop-blur-md" data-type="direct-answer">
                <div className="absolute top-0 left-0 w-1 h-full bg-gradient-to-b from-orange-500 to-amber-600" />
                <h3 className="text-orange-500 font-bold uppercase text-xs tracking-wider mb-4 flex items-center gap-2">
                  <BookOpen className="w-4 h-4" /> Quick Take / Direct Answer
                </h3>
                <p className="text-gray-200 text-base sm:text-lg leading-relaxed font-medium">
                  {feed.directAnswer}
                </p>
              </section>
            )}

            {/* Main Content Area */}
            <section className="prose prose-invert max-w-none 
              prose-h1:text-4xl prose-h1:font-extrabold prose-h1:tracking-tight prose-h1:mb-8 prose-h1:text-white
              prose-h2:text-2xl sm:prose-h2:text-3xl prose-h2:font-bold prose-h2:mb-6 prose-h2:mt-12 prose-h2:text-white prose-h2:border-b prose-h2:border-white/5 prose-h2:pb-3
              prose-h3:text-xl prose-h3:font-semibold prose-h3:mb-4 prose-h3:mt-8 prose-h3:text-gray-100
              prose-p:text-gray-400 prose-p:text-base sm:prose-p:text-lg prose-p:leading-relaxed prose-p:mb-6
              prose-ul:list-disc prose-ul:pl-6 prose-ul:mb-6
              prose-li:text-gray-400 prose-li:mb-2 prose-li:text-base sm:prose-li:text-lg
              prose-strong:text-white prose-strong:font-bold
              prose-a:text-orange-500 prose-a:no-underline hover:prose-a:underline
              prose-blockquote:border-l-orange-500 prose-blockquote:bg-white/[0.01] prose-blockquote:py-2 prose-blockquote:px-6 prose-blockquote:rounded-r-2xl prose-blockquote:not-italic prose-blockquote:text-gray-300
              prose-table:border-collapse prose-table:w-full prose-table:my-8 prose-th:text-gray-200 prose-th:font-semibold prose-th:p-3 sm:prose-th:p-4 prose-th:border-b prose-th:border-white/10 prose-th:bg-white/[0.02] prose-td:p-3 sm:prose-td:p-4 prose-td:border-b prose-td:border-white/5 prose-td:text-gray-400
            " data-type="content">
              <ReactMarkdown remarkPlugins={[remarkGfm]}>
                {feed.body}
              </ReactMarkdown>
            </section>
          </article>

          {/* Sidebar CTA */}
          <aside className="lg:col-span-4 mt-12 lg:mt-0">
            <div className="sticky top-28 bg-white/[0.02] border border-white/[0.08] p-6 sm:p-8 rounded-3xl backdrop-blur-xl">
              <h2 className="text-xl sm:text-2xl font-black mb-6 text-white tracking-tight">Deploy Production AI</h2>
              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="w-10 h-10 rounded-full bg-orange-500/10 flex items-center justify-center flex-shrink-0">
                    <Zap className="w-5 h-5 text-orange-500" />
                  </div>
                  <div>
                    <h4 className="font-bold text-white text-sm sm:text-base">Custom Systems</h4>
                    <p className="text-xs sm:text-sm text-gray-400 mt-1">Bespoke workflow automation tailored for your exact operations.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-10 h-10 rounded-full bg-orange-500/10 flex items-center justify-center flex-shrink-0">
                    <Shield className="w-5 h-5 text-orange-500" />
                  </div>
                  <div>
                    <h4 className="font-bold text-white text-sm sm:text-base">100% Private Cloud</h4>
                    <p className="text-xs sm:text-sm text-gray-400 mt-1">Data remains fully secure in your own cloud tenant (AWS or Azure).</p>
                  </div>
                </div>
              </div>
              
              <div className="mt-8 pt-8 border-t border-white/5">
                <ul className="space-y-3 mb-8">
                  {['Enterprise-grade security', 'REST API integrations', 'Zero per-seat licensing', 'Ongoing SLA support'].map(item => (
                    <li key={item} className="flex items-center gap-2.5 text-xs sm:text-sm text-gray-300">
                      <CheckCircle className="w-4 h-4 text-orange-500 flex-shrink-0" /> {item}
                    </li>
                  ))}
                </ul>
                <a 
                  href="https://calendly.com/vijay-01" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="w-full block py-3.5 sm:py-4 bg-orange-500 hover:bg-orange-600 text-white text-center font-bold text-sm sm:text-base rounded-xl transition-all shadow-lg shadow-orange-500/20 group"
                >
                  DISCUSS YOUR PROJECT <ArrowRight className="inline-block ml-1.5 group-hover:ml-3 transition-all w-4 h-4" />
                </a>
              </div>
            </div>
          </aside>
        </div>
      </main>
      <Footer />
    </div>
  );
}
`;
}

function run() {
  if (!fs.existsSync(SOURCE_FILE)) {
    console.error('Source file not found:', SOURCE_FILE);
    return;
  }

  const rawText = fs.readFileSync(SOURCE_FILE, 'utf8');
  
  // Find all matches of # FEED XXX
  const lines = rawText.split(/\r?\n/);
  const feedHeaderIndices = [];
  
  for (let i = 0; i < lines.length; i++) {
    const line = lines[i].trim();
    if (line.match(/^# FEED \d+/)) {
      feedHeaderIndices.push({ lineNum: i, text: line });
    }
  }

  console.log(`Found ${feedHeaderIndices.length} feeds to parse.`);

  if (!fs.existsSync(CONTENT_DIR)) {
    fs.mkdirSync(CONTENT_DIR, { recursive: true });
  }

  const feedIndex = [];
  const generatedRoutes = [];

  for (let idx = 0; idx < feedHeaderIndices.length; idx++) {
    const currentHeader = feedHeaderIndices[idx];
    
    let nextHeaderLineNum = lines.length;
    if (feedHeaderIndices[idx + 1]) {
      nextHeaderLineNum = feedHeaderIndices[idx + 1].lineNum;
    } else {
      for (let j = currentHeader.lineNum; j < lines.length; j++) {
        if (lines[j].trim().includes('> **SITE AUDIT FINDING')) {
          nextHeaderLineNum = j;
          break;
        }
      }
    }
    
    const feedLines = lines.slice(currentHeader.lineNum, nextHeaderLineNum);
    
    // Parse metadata
    let feedId = '';
    const idMatch = currentHeader.text.match(/^# FEED (\d+)/);
    if (idMatch) {
      feedId = idMatch[1];
    }
    
    let title = '';
    // Let's see if title is on the header line or next line
    if (currentHeader.text.includes(':')) {
      title = currentHeader.text.split(':').slice(1).join(':').trim();
    } else {
      // Find the first line starting with ## or look at lines immediately following
      for (let j = 1; j < Math.min(feedLines.length, 5); j++) {
        const line = feedLines[j].trim();
        if (line.startsWith('## ')) {
          title = line.replace('## ', '').trim();
          break;
        }
      }
    }

    if (!title) {
      title = `AI Search Feed ${feedId}`;
    }

    let urlPath = '';
    let category = '';
    let icp = '';
    let directAnswer = '';
    
    let metaEndLineIndex = 0;
    
    for (let j = 1; j < Math.min(feedLines.length, 10); j++) {
      const line = feedLines[j].trim();
      if (line.startsWith('**URL:**')) {
        urlPath = line.replace('**URL:**', '').trim();
        metaEndLineIndex = j;
      }
      if (line.startsWith('**Category:**')) {
        const catPart = line.split('|')[0] || '';
        category = catPart.replace('**Category:**', '').trim();
        const icpPart = line.split('|')[1] || '';
        icp = icpPart.replace('**ICP:**', '').trim();
        metaEndLineIndex = j;
      }
    }
    
    // Extract Direct Answer
    let directAnswerStart = -1;
    let directAnswerEnd = -1;
    for (let j = 1; j < feedLines.length; j++) {
      const line = feedLines[j].trim();
      if (line.includes('### Direct Answer')) {
        directAnswerStart = j + 1;
        break;
      }
    }
    
    if (directAnswerStart !== -1) {
      // Direct answer runs until the next "---" separator or the next header
      for (let j = directAnswerStart; j < feedLines.length; j++) {
        const line = feedLines[j].trim();
        if (line === '---' || line.startsWith('###') || line.startsWith('##') || line.startsWith('#')) {
          directAnswerEnd = j;
          break;
        }
      }
      if (directAnswerEnd === -1) {
        directAnswerEnd = feedLines.length;
      }
      directAnswer = feedLines.slice(directAnswerStart, directAnswerEnd).join('\n').trim();
    }
    
    // The rest of the content (excluding title, metadata, direct answer header & paragraph)
    let bodyStartLine = metaEndLineIndex + 1;
    if (directAnswerEnd !== -1) {
      bodyStartLine = directAnswerEnd;
    }
    
    let bodyLines = feedLines.slice(bodyStartLine);
    // Remove leading/trailing horizontal rules or empty lines
    let body = bodyLines.join('\n').trim();
    if (body.startsWith('---')) {
      body = body.substring(3).trim();
    }
    
    // Clean up title
    title = title.replace(/\*/g, '');

    // Determine slug from URL
    let slug = '';
    let categoryFolder = '';
    
    if (urlPath) {
      const cleanedPath = urlPath.startsWith('/') ? urlPath : '/' + urlPath;
      const parts = cleanedPath.split('/').filter(Boolean);
      if (parts.length > 1) {
        categoryFolder = parts[0];
        slug = parts.slice(1).join('-');
      } else if (parts.length === 1) {
        slug = parts[0];
      }
    }

    if (!slug) {
      slug = slugify(title);
    }
    
    if (!category && categoryFolder) {
      category = categoryFolder;
    }

    const feedData = {
      id: feedId,
      title: title,
      slug: slug,
      category: category || 'General',
      categorySlug: slugify(category || 'general'),
      icp: icp,
      url: urlPath,
      directAnswer: directAnswer,
      body: body
    };

    // Save JSON
    const destFile = path.join(CONTENT_DIR, `${slug}.json`);
    fs.writeFileSync(destFile, JSON.stringify(feedData, null, 2));

    // Save to global index
    feedIndex.push({
      id: feedId,
      title: title,
      slug: slug,
      category: category || 'General',
      categorySlug: slugify(category || 'general'),
      icp: icp,
      url: urlPath,
      description: directAnswer || body.substring(0, 160) + '...'
    });

    // Generate Route files
    if (categoryFolder && categoryFolder !== 'feeds') {
      // Nested route (e.g. /compare/[slug]/page.tsx)
      const folderPath = path.join(APP_DIR, categoryFolder, '[slug]');
      if (!fs.existsSync(folderPath)) {
        fs.mkdirSync(folderPath, { recursive: true });
      }
      fs.writeFileSync(path.join(folderPath, 'page.tsx'), getPageTemplate(categoryFolder, false));
      generatedRoutes.push(`/${categoryFolder}/[slug]`);
    } else {
      // Root route (e.g. /ai-for-law-firms-uk-compliance/page.tsx)
      const folderPath = path.join(APP_DIR, slug);
      if (!fs.existsSync(folderPath)) {
        fs.mkdirSync(folderPath, { recursive: true });
      }
      fs.writeFileSync(path.join(folderPath, 'page.tsx'), getPageTemplate(categoryFolder, true, slug));
      generatedRoutes.push(`/${slug}`);
    }
  }

  // Save index
  fs.writeFileSync(INDEX_FILE, JSON.stringify(feedIndex, null, 2));
  
  // Make sure we have a catch-all or a page for /feeds/[slug] in case someone routes there
  const feedsSlugDir = path.join(APP_DIR, 'feeds', '[slug]');
  if (!fs.existsSync(feedsSlugDir)) {
    fs.mkdirSync(feedsSlugDir, { recursive: true });
  }
  fs.writeFileSync(path.join(feedsSlugDir, 'page.tsx'), getPageTemplate('feeds', false));
  generatedRoutes.push(`/feeds/[slug]`);

  console.log(`Successfully parsed ${feedIndex.length} feeds.`);
  console.log(`Routes generated:`, Array.from(new Set(generatedRoutes)));
}

run();
