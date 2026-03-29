import Link from "next/link";
import React from "react";

export default function ContentSection({
  title,
  description,
  action,
  children,
}: {
  title: string;
  description?: string;
  action?: { label: string; href: string };
  children: React.ReactNode;
}) {
  return (
    <section className="max-w-7xl mx-auto px-6 md:px-8 py-16 md:py-24">
      <div className="flex flex-col gap-8 md:flex-row md:items-end md:justify-between mb-10">
        <div className="max-w-2xl">
          <h2 className="text-2xl md:text-3xl font-bold tracking-tight">{title}</h2>
          {description ? (
            <p className="mt-3 text-gray-400 leading-relaxed">{description}</p>
          ) : null}
        </div>
        {action ? (
          <Link
            href={action.href}
            className="text-xs font-bold uppercase tracking-widest text-gray-300 hover:text-white transition-colors inline-flex"
          >
            {action.label}
          </Link>
        ) : null}
      </div>

      {children}
    </section>
  );
}
