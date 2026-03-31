import fs from 'fs';
import path from 'path';
import Link from 'next/link';
import Script from 'next/script';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import { ArrowLeft, Clock, Bot } from 'lucide-react';
import ArticleLayout from '@/components/ArticleLayout';
import { extractToc, slugify } from '@/lib/markdown';
import { getAllPosts } from '@/lib/blog';

export default async function BlogArticlePage({
  params,
  searchParams
}: {
  params: Promise<{ slug: string }>;
  searchParams: Promise<{ format?: string }>;
}) {
  const resolvedParams = await params;
  const slug = resolvedParams.slug;
  const format = (await searchParams).format;
  const targetPath = path.join(process.cwd(), 'content', 'blog', `${slug}.md`);

  let content = '';
  try {
    if (fs.existsSync(targetPath)) {
      content = fs.readFileSync(targetPath, 'utf8');
    } else {
      return (
        <div className="min-h-screen bg-black text-white flex flex-col items-center justify-center p-8 text-center">
          <h1 className="text-4xl font-bold mb-4 italic">Post Not Found</h1>
          <Link href="/blog" className="text-blue-400 hover:underline">Return to Blog</Link>
        </div>
      );
    }
  } catch (err) {
    console.error('Error reading blog file', err);
    return null;
  }

  if (format === 'md') {
    return (
      <pre style={{ whiteSpace: 'pre-wrap', padding: '20px', backgroundColor: '#000', color: '#fff' }}>
        {content}
      </pre>
    );
  }

  // Basic frontmatter parsing (supports YAML frontmatter or simple key: value lines before the first heading)
  const extractFrontmatter = (md: string) => {
    const clean = md.replace(/\r\n/g, "\n").trim();
    const frontmatter: Record<string, string> = {};
    const lines = clean.split("\n");
    let i = 0;
    // Simple heuristic: look for key: value lines before the first # heading
    for (; i < lines.length; i++) {
      const line = lines[i].trim();
      if (line.startsWith('#')) break;
      const match = /^([\w-]+):\s*(.+)$/.exec(line);
      if (match) {
        frontmatter[match[1]] = match[2];
      }
    }
    const contentStart = i;
    return { frontmatter, contentStart, contentLines: lines.slice(contentStart).join("\n") };
  };

  const { frontmatter, contentLines } = extractFrontmatter(content);
  const title = frontmatter.title ?? (() => {
    const lines = content.split('\n');
    const titleLine = lines.find(l => l.startsWith('# '));
    return titleLine ? titleLine.replace('# ', '').trim() : 'Blog Post';
  })();
  const markdownContent = contentLines.replace(/^# .*?\n/, '').trim();
  const toc = extractToc(markdownContent);
  const readTimeMinutes = Math.max(1, Math.round(markdownContent.split(/\s+/).filter(Boolean).length / 220));

  const normalizeText = (text: string) =>
    text
      .replace(/```[\s\S]*?```/g, " ")
      .replace(/\[(.*?)\]\((.*?)\)/g, "$1")
      .replace(/[#>*_`]+/g, " ")
      .replace(/\s+/g, " ")
      .trim();

  const extractSubtitle = (md: string) => {
    const cleaned = md.replace(/\r\n/g, "\n").trim();
    const paragraphs = cleaned
      .split(/\n\s*\n/)
      .map((p) => normalizeText(p))
      .filter(Boolean);
    const first = paragraphs[0] ?? "";
    const withoutHeadings = first.replace(/^#{1,6}\s+/, "");
    return withoutHeadings.length > 180
      ? withoutHeadings.slice(0, 179).trimEnd() + "…"
      : withoutHeadings;
  };

  const subtitle = extractSubtitle(markdownContent);
  const description = frontmatter.description ?? subtitle ?? '';
  const author = frontmatter.author ?? 'GOVI Studio';
  const publishedAt = frontmatter.publishedAt ?? new Date().toISOString().split('T')[0];
  const updatedAt = frontmatter.updatedAt ?? publishedAt;
  const category = frontmatter.category ?? 'AI Systems';
  const tags = (frontmatter.tags ?? '').split(',').map(t => t.trim()).filter(Boolean);
  const canonicalUrl = `https://govistudio.com/blog/${slug}`;

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": title,
    "description": description,
    "author": {
      "@type": "Organization",
      "name": author,
      "url": "https://govistudio.com"
    },
    "publisher": {
      "@type": "Organization",
      "name": author,
      "url": "https://govistudio.com"
    },
    "datePublished": publishedAt,
    "dateModified": updatedAt,
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": canonicalUrl
    },
    "image": "https://govistudio.com/og-image.png",
    "articleSection": category,
    "keywords": tags.join(', '),
    "wordCount": markdownContent.split(/\s+/).filter(Boolean).length,
    "timeRequired": `PT${readTimeMinutes}M`
  };
  
  const getTldrBullets = (md: string) => {
    const match = /^##\s*(TL;?DR|TLDR)\s*\n([\s\S]*?)(\n##\s+|$)/im.exec(md);
    const sectionBody = match?.[2] ?? "";
    const bullets = sectionBody
      .split("\n")
      .map((l) => l.trim())
      .filter((l) => /^[-*+]\s+/.test(l))
      .map((l) => normalizeText(l.replace(/^[-*+]\s+/, "")))
      .filter(Boolean)
      .slice(0, 5);
    if (bullets.length >= 3) return bullets;

    const text = normalizeText(md);
    const sentences = text
      .split(/(?<=[.!?])\s+/)
      .map((s) => s.trim())
      .filter(Boolean);
    const fallback = sentences
      .filter((s) => s.length > 40)
      .slice(0, 5)
      .map((s) => (s.length > 140 ? s.slice(0, 139).trimEnd() + "…" : s));
    return fallback.length >= 3 ? fallback.slice(0, 5) : fallback;
  };

  const tldrBullets = getTldrBullets(markdownContent).slice(0, 5);

  const sectionsFromMarkdown = (md: string) => {
    const cleaned = md.replace(/\r\n/g, "\n");
    const parts = cleaned.split(/^##\s+/m);
    const initial = parts.shift() ?? "";
    const sections = parts
      .map((p) => {
        const firstNewline = p.indexOf("\n");
        const rawTitle = (firstNewline === -1 ? p : p.slice(0, firstNewline)).trim();
        const body = (firstNewline === -1 ? "" : p.slice(firstNewline + 1)).trim();
        return { title: rawTitle, body };
      })
      .filter((s) => s.title);
    return { initial: initial.trim(), sections };
  };

  const { initial, sections: allSections } = sectionsFromMarkdown(markdownContent);
  const sections = allSections.filter((s) => !/^tl;?dr$/i.test(s.title.trim()));

  const headingIdCounts = new Map<string, number>();
  const getHeadingId = (text: string) => {
    const base = slugify(text);
    const nextCount = (headingIdCounts.get(base) ?? 0) + 1;
    headingIdCounts.set(base, nextCount);
    return nextCount === 1 ? base : `${base}-${nextCount}`;
  };

  const sectionDataType = (titleText: string): string | undefined => {
    const t = titleText.trim().toLowerCase();
    if (t === "faq" || t.startsWith("faq")) return "faq";
    if (t.startsWith("why this matters")) return "insight";
    if (t.startsWith("key insight")) return "insight";
    if (t.startsWith("example")) return "example";
    if (t.startsWith("definition") || t.startsWith("what is")) return "definition";
    return undefined;
  };

  return (
    <>
      {/* SEO Meta Tags */}
      <title>{title} | GOVI Studio</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={tags.join(', ')} />
      <meta name="author" content={author} />
      <meta name="robots" content="index, follow" />
      <link rel="canonical" href={canonicalUrl} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:type" content="article" />
      <meta property="og:site_name" content="GOVI Studio" />
      <meta property="og:image" content="https://govistudio.com/og-image.png" />
      <meta property="article:author" content={author} />
      <meta property="article:published_time" content={publishedAt} />
      <meta property="article:modified_time" content={updatedAt} />
      <meta property="article:section" content={category} />
      {tags.map(tag => (
        <meta key={tag} property="article:tag" content={tag} />
      ))}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content="https://govistudio.com/og-image.png" />
      <meta name="twitter:site" content="@govistudio" />
      <meta name="twitter:creator" content="@govistudio" />

      <Script
        id="blog-article-jsonld"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <ArticleLayout
        backHref="/blog"
        backLabel="The Blog"
        title={title}
        toc={toc}
        showProgress
        meta={
          <div className="flex flex-wrap items-center gap-4 text-xs font-mono text-gray-500 uppercase tracking-[0.2em]">
            <span className="text-blue-400 font-bold">{category}</span>
            <span className="opacity-20">/</span>
            <span className="flex items-center gap-1"><Clock className="w-3 h-3" /> {readTimeMinutes} Min Read</span>
            <span className="opacity-20">/</span>
            <span>{author}</span>
            <span className="opacity-20">/</span>
            <span>{publishedAt}</span>
          </div>
        }
      >
        {subtitle ? (
          <p className="mt-4 text-[18px] leading-[1.75] text-[#8B949E]">
            {subtitle}
          </p>
        ) : null}

        {tldrBullets.length ? (
          <section
            data-type="tldr"
            className="mt-10 rounded-2xl border border-white/[0.08] bg-white/[0.03] px-6 py-5"
          >
            <p className="text-sm font-semibold text-white mb-3">TL;DR</p>
            <ul className="space-y-2 text-sm text-[#C9D1D9]">
              {tldrBullets.slice(0, 5).map((b, idx) => (
                <li key={idx} className="leading-relaxed">
                  {b}
                </li>
              ))}
            </ul>
          </section>
        ) : null}

        <div
          className="prose prose-invert prose-editorial max-w-none
          prose-p:text-[18px] md:prose-p:text-[17px] prose-p:leading-[1.75] prose-p:text-[#C9D1D9] prose-p:my-4
          prose-a:text-white prose-a:underline prose-a:decoration-white/20 hover:prose-a:decoration-white/60
          prose-strong:text-white prose-strong:font-semibold

          prose-h2:text-[24px] md:prose-h2:text-[26px] prose-h2:font-semibold prose-h2:tracking-tight prose-h2:text-white prose-h2:mt-14 prose-h2:mb-4
          prose-h3:text-[18px] md:prose-h3:text-[20px] prose-h3:font-medium prose-h3:tracking-tight prose-h3:text-white prose-h3:mt-8 prose-h3:mb-3

          prose-ul:my-4 prose-ul:text-[#C9D1D9] prose-li:my-2
          prose-hr:border-white/[0.08] prose-hr:my-14
          prose-img:rounded-2xl
        "
        >
          {initial ? (
            <section data-type="intro" className="mt-10">
              <ReactMarkdown
                remarkPlugins={[remarkGfm]}
                components={{
                  img: ({ alt, ...props }) => (
                    // eslint-disable-next-line @next/next/no-img-element
                    <img loading="lazy" decoding="async" alt={alt ?? ""} {...props} />
                  ),
                  blockquote: ({ children }) => (
                    <div
                      className="rounded-lg border-l-2 border-blue-500 bg-white/[0.03] px-4 py-3 text-sm"
                      data-type="insight"
                    >
                      {children}
                    </div>
                  ),
                }}
              >
                {initial}
              </ReactMarkdown>
            </section>
          ) : null}

          {sections.map((section) => {
            const id = getHeadingId(section.title);
            const dataType = sectionDataType(section.title);

            if ((dataType ?? "") === "faq") {
              const faqParts = section.body.split(/^###\s+/m);
              const faqIntro = (faqParts.shift() ?? "").trim();
              const qas = faqParts
                .map((chunk) => {
                  const firstNewline = chunk.indexOf("\n");
                  const q = (firstNewline === -1 ? chunk : chunk.slice(0, firstNewline)).trim();
                  const a = (firstNewline === -1 ? "" : chunk.slice(firstNewline + 1)).trim();
                  return { q, a };
                })
                .filter((x) => x.q);

              return (
                <section key={id} id={id} data-type="faq" className="mt-14">
                  <h2>{section.title}</h2>
                  {faqIntro ? (
                    <ReactMarkdown remarkPlugins={[remarkGfm]}>{faqIntro}</ReactMarkdown>
                  ) : null}
                  <div className="mt-6 space-y-6">
                    {qas.map((qa) => (
                      <div key={qa.q} data-question={qa.q} className="rounded-2xl border border-white/[0.08] bg-white/[0.02] px-5 py-4">
                        <h3 className="!mt-0">{qa.q}</h3>
                        <ReactMarkdown
                          remarkPlugins={[remarkGfm]}
                          components={{
                            img: ({ alt, ...props }) => (
                              // eslint-disable-next-line @next/next/no-img-element
                              <img loading="lazy" decoding="async" alt={alt ?? ""} {...props} />
                            ),
                            blockquote: ({ children }) => (
                              <div className="rounded-lg border-l-2 border-blue-500 bg-white/[0.03] px-4 py-3" data-type="insight">
                                {children}
                              </div>
                            ),
                          }}
                        >
                          {qa.a}
                        </ReactMarkdown>
                      </div>
                    ))}
                  </div>
                </section>
              );
            }

            return (
              <section key={id} id={id} data-type={dataType} className="mt-14">
                <h2>{section.title}</h2>
                <ReactMarkdown
                  remarkPlugins={[remarkGfm]}
                  components={{
                    h3: ({ children, ...props }) => {
                      const text = Array.isArray(children) ? children.join("") : String(children);
                      const hid = getHeadingId(text);
                      return (
                        <h3 id={hid} {...props}>
                          {children}
                        </h3>
                      );
                    },
                    img: ({ alt, ...props }) => (
                      // eslint-disable-next-line @next/next/no-img-element
                      <img loading="lazy" decoding="async" alt={alt ?? ""} {...props} />
                    ),
                    blockquote: ({ children }) => {
                      const raw =
                        typeof children === "string"
                          ? children
                          : Array.isArray(children)
                            ? children.join("")
                            : "";
                      const prefix = raw.toLowerCase();
                      const type = prefix.includes("key insight")
                        ? "insight"
                        : prefix.includes("why this matters")
                          ? "insight"
                          : prefix.includes("example")
                            ? "example"
                            : "insight";
                      return (
                        <div
                          className="rounded-lg border-l-2 border-blue-500 bg-white/[0.03] px-4 py-3 text-sm"
                          data-type={type}
                        >
                          {children}
                        </div>
                      );
                    },
                  }}
                >
                  {section.body}
                </ReactMarkdown>
              </section>
            );
          })}
        </div>

      {/* Related Posts */}
      {(() => {
        const allPosts = getAllPosts();
        const related = allPosts.filter(p => p.slug !== slug && (p.category === category || p.tags.some(t => tags.includes(t)))).slice(0, 3);
        if (!related.length) return null;
        return (
          <section className="mt-20">
            <h2 className="text-2xl font-bold mb-6">Related Articles</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {related.map(post => (
                <Link key={post.slug} href={`/blog/${post.slug}`} className="group block rounded-2xl border border-white/[0.08] bg-white/[0.02] p-6 hover:bg-white/[0.04] transition-colors">
                  <span className="text-xs text-blue-400 font-mono uppercase tracking-wider">{post.category}</span>
                  <h3 className="text-lg font-semibold text-white mt-2 group-hover:text-blue-400 transition-colors">{post.title}</h3>
                  <p className="text-sm text-gray-500 mt-2 line-clamp-2">{post.description}</p>
                  <span className="text-xs text-gray-600 mt-4 block">{post.publishedAt}</span>
                </Link>
              ))}
            </div>
          </section>
        );
      })()}

      <section className="mt-20 p-10 rounded-3xl border border-blue-500/20 bg-blue-500/[0.02] backdrop-blur-md relative overflow-hidden group" data-type="insight">
        <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:opacity-20 transition-opacity">
          <Bot className="w-32 h-32" />
        </div>
        <h3 className="text-2xl font-bold mb-4 relative z-10">Expand Your Knowledge</h3>
        <p className="text-gray-400 mb-8 max-w-lg relative z-10 leading-relaxed">
          This article provides a narrative overview. For technical specifications, automation rules, and industry-standard definitions, explore our machine-readble AI Feed.
        </p>
        <Link href="/ai" className="inline-flex items-center gap-2 text-blue-400 font-bold hover:gap-4 transition-all relative z-10">
          Explore AI Feed <ArrowLeft className="rotate-180 w-4 h-4" />
        </Link>
      </section>

      <footer className="mt-12 text-center py-12">
        <h4 className="text-white text-2xl font-bold mb-4">Ready to Apply This?</h4>
        <p className="text-[#8B949E] text-sm mb-8">Request a blueprint tailored to your workflows.</p>
        <Link href="https://calendly.com/vijay-01" className="bg-white text-black px-12 py-4 rounded-full font-bold hover:bg-gray-200 transition-all">
          Request a System Blueprint
        </Link>
      </footer>
    </ArticleLayout>
    </>
  );
}
