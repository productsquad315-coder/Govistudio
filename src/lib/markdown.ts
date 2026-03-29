export type TocItem = {
  id: string;
  text: string;
  level: 2 | 3;
};

export function slugify(text: string): string {
  return text
    .toLowerCase()
    .trim()
    .replace(/['"]/g, "")
    .replace(/[^a-z0-9\s-]/g, "")
    .replace(/\s+/g, "-")
    .replace(/-+/g, "-");
}

export function extractToc(markdown: string): TocItem[] {
  const items: TocItem[] = [];
  const idCounts = new Map<string, number>();

  const lines = markdown.split("\n");
  for (const line of lines) {
    const match = /^(#{2,3})\s+(.*)\s*$/.exec(line);
    if (!match) continue;

    const level = match[1].length as 2 | 3;
    const text = match[2].trim();
    if (!text) continue;

    const base = slugify(text);
    const nextCount = (idCounts.get(base) ?? 0) + 1;
    idCounts.set(base, nextCount);

    const id = nextCount === 1 ? base : `${base}-${nextCount}`;
    items.push({ id, text, level });
  }

  return items;
}
