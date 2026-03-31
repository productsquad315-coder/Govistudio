import type { ReactNode } from "react";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import type { TocItem } from "@/lib/markdown";
import TableOfContents from "@/components/TableOfContents";
import ReadingProgress from "@/components/ReadingProgress";
import Logo from "@/components/Logo";

export default function ArticleLayout({
  backHref,
  backLabel,
  eyebrow,
  title,
  meta,
  toc,
  showProgress,
  children,
}: {
  backHref: string;
  backLabel: string;
  eyebrow?: ReactNode;
  title: string;
  meta?: ReactNode;
  toc: TocItem[];
  showProgress?: boolean;
  children: ReactNode;
}) {
  return (
    <article className="min-h-screen bg-black text-white selection:bg-blue-500/30">
      {showProgress ? <ReadingProgress targetId="article" /> : null}

      <nav className="fixed top-0 w-full z-50 px-6 lg:px-12 py-4 backdrop-blur-xl border-b border-white/[0.06] bg-black/60">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="flex items-center gap-6">
            <Logo />
            <Link
              href={backHref}
              className="flex items-center gap-2 text-sm text-gray-400 hover:text-white transition-colors group"
            >
              <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
              {backLabel}
            </Link>
          </div>
          <div />
        </div>
      </nav>

      <main id="article" className="max-w-7xl mx-auto px-6 lg:px-12 pt-28 pb-24">
        <div className="grid grid-cols-1 lg:grid-cols-[minmax(0,1fr)_minmax(0,720px)_280px] gap-12 lg:gap-16">
          <div className="hidden lg:block" />

          <div>
            <header>
              {eyebrow ? <div className="mb-6">{eyebrow}</div> : null}
              {meta ? <div className="mb-6">{meta}</div> : null}
              <h1 className="text-[40px] md:text-[48px] font-bold tracking-tight leading-[1.08] text-white">
                {title}
              </h1>
            </header>

            <div className="mt-10 lg:hidden">
              <TableOfContents items={toc} variant="dropdown" />
            </div>

            <div className="mt-10">{children}</div>
          </div>

          <aside className="hidden lg:block" aria-label="Table of contents">
            <TableOfContents items={toc} />
          </aside>
        </div>
      </main>
    </article>
  );
}
