"use client";

import Link from "next/link";
import { useEffect, useMemo, useState } from "react";
import type { TocItem } from "@/lib/markdown";

export default function TableOfContents({
  items,
  variant = "sidebar",
}: {
  items: TocItem[];
  variant?: "sidebar" | "dropdown";
}) {
  if (!items.length) return null;

  const ids = useMemo(() => items.map((i) => i.id), [items]);
  const [activeId, setActiveId] = useState<string>(items[0]?.id ?? "");

  useEffect(() => {
    if (typeof window === "undefined") return;

    const elements = ids
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => Boolean(el));
    if (!elements.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort(
            (a, b) =>
              (a.target as HTMLElement).offsetTop -
              (b.target as HTMLElement).offsetTop
          );
        if (visible[0]?.target?.id) setActiveId(visible[0].target.id);
      },
      {
        root: null,
        rootMargin: "-25% 0px -65% 0px",
        threshold: [0, 1],
      }
    );

    elements.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, [ids]);

  const onNavClick = (id: string) => (e: React.MouseEvent) => {
    e.preventDefault();
    const el = document.getElementById(id);
    if (!el) return;

    const prefersReducedMotion =
      window.matchMedia?.("(prefers-reduced-motion: reduce)").matches ?? false;

    el.scrollIntoView({
      behavior: prefersReducedMotion ? "auto" : "smooth",
      block: "start",
    });
    history.replaceState(null, "", `#${id}`);
  };

  return (
    <div>
      {variant === "dropdown" ? (
        <details className="rounded-2xl border border-white/[0.08] bg-white/[0.02] px-5 py-4">
          <summary className="cursor-pointer select-none text-xs font-mono uppercase tracking-[0.2em] text-[#8B949E]">
            On this page
          </summary>
          <nav className="mt-4 flex flex-col gap-3 text-sm">
            {items.map((item) => {
              const isActive = item.id === activeId;
              return (
                <Link
                  key={item.id}
                  href={`#${item.id}`}
                  onClick={onNavClick(item.id)}
                  className={
                    item.level === 2
                      ? isActive
                        ? "text-white"
                        : "text-[#C9D1D9] hover:text-white transition-colors"
                      : isActive
                        ? "pl-4 text-white"
                        : "pl-4 text-[#8B949E] hover:text-[#C9D1D9] transition-colors"
                  }
                >
                  {item.text}
                </Link>
              );
            })}
          </nav>
        </details>
      ) : (
        <div className="sticky top-28">
          <div className="text-[10px] uppercase tracking-[0.2em] text-[#8B949E] font-mono mb-4">
            On this page
          </div>
          <nav className="flex flex-col gap-2 text-sm">
            {items.map((item) => {
              const isActive = item.id === activeId;
              return (
                <Link
                  key={item.id}
                  href={`#${item.id}`}
                  onClick={onNavClick(item.id)}
                  className={
                    item.level === 2
                      ? `rounded-md px-2 py-1 -mx-2 transition-colors ${
                          isActive
                            ? "text-white bg-white/[0.04]"
                            : "text-[#C9D1D9] hover:text-white"
                        }`
                      : `rounded-md px-2 py-1 -mx-2 ml-4 transition-colors ${
                          isActive
                            ? "text-white bg-white/[0.04]"
                            : "text-[#8B949E] hover:text-[#C9D1D9]"
                        }`
                  }
                >
                  {item.text}
                </Link>
              );
            })}
          </nav>
        </div>
      )}
    </div>
  );
}
