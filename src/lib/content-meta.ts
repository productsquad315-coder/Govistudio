// Derives page title/description directly from markdown content.
// Content files in content/ai and content/about have no frontmatter —
// this avoids a mass content-authoring pass while still giving every
// page its own accurate metadata instead of inheriting the root layout's.

function normalizeText(text: string): string {
  return text
    .replace(/```[\s\S]*?```/g, ' ')
    .replace(/\[(.*?)\]\((.*?)\)/g, '$1')
    .replace(/[#>*_`]+/g, ' ')
    .replace(/\s+/g, ' ')
    .trim();
}

export function extractTitle(markdown: string, fallback: string): string {
  const match = markdown.split('\n').find((l) => l.trim().startsWith('# '));
  return match ? match.replace(/^#\s+/, '').trim() : fallback;
}

export function extractDescription(markdown: string, maxLen = 160): string {
  // Strip a leading H1 line first so the title text itself is never
  // mistaken for the description paragraph.
  const withoutH1 = markdown.replace(/\r\n/g, '\n').trim().replace(/^#\s+.*(\n|$)/, '');
  const paragraphs = withoutH1
    .split(/\n\s*\n/)
    .map(normalizeText)
    .filter((p) => p && !p.startsWith('#'));
  const body = paragraphs[0] ?? '';
  return body.length > maxLen ? body.slice(0, maxLen - 1).trimEnd() + '…' : body;
}

export function slugArrayToTitleFallback(slugArray: string[]): string {
  return slugArray[slugArray.length - 1]
    .replace(/-/g, ' ')
    .replace(/\b\w/g, (c) => c.toUpperCase());
}
