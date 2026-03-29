import "server-only";
import fs from "fs";
import path from "path";

export type BlogMeta = {
  title: string;
  path: string;
  slug: string;
  summary: string;
  readTimeMinutes: number;
  tag: string;
};

export type FeedMeta = {
  title: string;
  path: string;
  slug: string;
  summary: string;
  tag: string;
};

const DEFAULT_FEATURED_BLOG_SLUGS = [
  "ai-systems-overview",
  "ai-for-traditional-businesses",
  "ai-systems-vs-tools-explained",
  "how-to-implement-ai-in-your-company",
  "ai-use-cases-in-real-businesses",
];

const DEFAULT_FEATURED_AI_PATHS = [
  "/ai/core/what-are-ai-systems-for-traditional-businesses",
  "/ai/core/what-is-ai-automation",
  "/ai/core/what-is-ai-integration",
  "/ai/implementation/ai-system-architecture",
  "/ai/implementation/how-to-implement-ai-systems",
  "/ai/comparisons/ai-security",
  "/ai/roi/roi-of-ai-systems",
  "/ai/use-cases/ai-workflow-automation-system",
  "/ai/industries/ai-systems-for-manufacturing-companies",
];

let blogCache: BlogMeta[] | null = null;
let aiCache: FeedMeta[] | null = null;

function readJsonFile<T>(absolutePath: string): T {
  const fileContents = fs.readFileSync(absolutePath, "utf8");
  return JSON.parse(fileContents) as T;
}

function normalizeWhitespace(text: string): string {
  return text.replace(/\s+/g, " ").trim();
}

function truncate(text: string, maxChars: number): string {
  if (text.length <= maxChars) return text;
  return text.slice(0, Math.max(0, maxChars - 1)).trimEnd() + "…";
}

function estimateReadTimeMinutes(markdown: string): number {
  const withoutCodeBlocks = markdown.replace(/```[\s\S]*?```/g, " ");
  const withoutMd = withoutCodeBlocks
    .replace(/\[(.*?)\]\((.*?)\)/g, "$1")
    .replace(/[#>*_`\-]+/g, " ");
  const words = withoutMd.trim().split(/\s+/).filter(Boolean).length;
  const minutes = Math.max(1, Math.round(words / 220));
  return minutes;
}

function extractTitleFromMarkdown(markdown: string): string | null {
  const lines = markdown.split("\n");
  const titleLine = lines.find((l) => l.startsWith("# "));
  return titleLine ? titleLine.replace(/^#\s+/, "").trim() : null;
}

function extractSummaryFromMarkdown(markdown: string): string {
  const cleaned = markdown
    .replace(/^# .*?\n/, "")
    .replace(/\r\n/g, "\n")
    .trim();

  const paragraphs = cleaned
    .split(/\n\s*\n/)
    .map((p) => normalizeWhitespace(p))
    .filter(Boolean);

  const first = paragraphs[0] ?? "";
  const withoutHeadings = first.replace(/^#{1,6}\s+/g, "");
  return truncate(withoutHeadings, 200);
}

function slugFromBlogPath(blogPath: string): string {
  return blogPath.replace(/^\/blog\//, "").trim();
}

function slugFromAiPath(aiPath: string): string {
  return aiPath.replace(/^\/ai\//, "").trim();
}

function tagFromAiPath(aiPath: string): string {
  const parts = aiPath.split("/").filter(Boolean);
  const section = parts[1] ?? "ai";
  if (section === "core") return "Core";
  if (section === "industries") return "Industry";
  if (section === "use-cases") return "Use Case";
  if (section === "implementation") return "Implementation";
  if (section === "comparisons") return "Comparison";
  if (section === "roi") return "ROI";
  return "AI";
}

function tagFromBlogSlug(slug: string): string {
  if (slug.includes("vs")) return "Comparison";
  if (slug.includes("how-to") || slug.startsWith("how-")) return "Guide";
  return "Strategy";
}

export function getAllBlogs(): BlogMeta[] {
  if (blogCache) return blogCache;

  const indexPath = path.join(process.cwd(), "content", "blog", "index.json");
  if (!fs.existsSync(indexPath)) {
    blogCache = [];
    return blogCache;
  }

  const index = readJsonFile<Array<{ title: string; path: string }>>(indexPath);

  blogCache = index
    .map((item) => {
      const slug = slugFromBlogPath(item.path);
      const mdPath = path.join(process.cwd(), "content", "blog", `${slug}.md`);
      const content = fs.existsSync(mdPath) ? fs.readFileSync(mdPath, "utf8") : "";
      const title = extractTitleFromMarkdown(content) ?? item.title;
      const summary = extractSummaryFromMarkdown(content);
      const readTimeMinutes = estimateReadTimeMinutes(content);
      return {
        title,
        path: item.path,
        slug,
        summary,
        readTimeMinutes,
        tag: tagFromBlogSlug(slug),
      };
    })
    .filter((x) => x.title && x.path);

  return blogCache;
}

export function getLatestBlogs(limit = 5): BlogMeta[] {
  return getAllBlogs().slice(0, limit);
}

export function getAllAiFeeds(): FeedMeta[] {
  if (aiCache) return aiCache;

  const indexPath = path.join(process.cwd(), "content", "ai", "index.json");
  if (!fs.existsSync(indexPath)) {
    aiCache = [];
    return aiCache;
  }

  const index = readJsonFile<Array<{ title: string; path: string }>>(indexPath);

  aiCache = index
    .map((item) => {
      const slug = slugFromAiPath(item.path);
      const mdPath = path.join(process.cwd(), "content", "ai", ...slug.split("/")) + ".md";
      const content = fs.existsSync(mdPath) ? fs.readFileSync(mdPath, "utf8") : "";
      const title = extractTitleFromMarkdown(content) ?? item.title;
      const summary = extractSummaryFromMarkdown(content);
      return {
        title,
        path: item.path,
        slug,
        summary,
        tag: tagFromAiPath(item.path),
      };
    })
    .filter((x) => x.title && x.path);

  return aiCache;
}

export function pickFeaturedBlogs(options?: {
  slugs?: string[];
  limit?: number;
}): BlogMeta[] {
  const slugs = options?.slugs ?? DEFAULT_FEATURED_BLOG_SLUGS;
  const limit = options?.limit ?? 6;

  const bySlug = new Map(getAllBlogs().map((b) => [b.slug, b] as const));
  const picked = slugs.map((s) => bySlug.get(s)).filter(Boolean) as BlogMeta[];

  if (picked.length >= limit) return picked.slice(0, limit);

  const remaining = getAllBlogs().filter((b) => !slugs.includes(b.slug));
  return [...picked, ...remaining].slice(0, limit);
}

export function pickTopAiInsights(options?: {
  paths?: string[];
  limit?: number;
}): FeedMeta[] {
  const paths = options?.paths ?? DEFAULT_FEATURED_AI_PATHS;
  const limit = options?.limit ?? 9;

  const byPath = new Map(getAllAiFeeds().map((a) => [a.path, a] as const));
  const picked = paths.map((p) => byPath.get(p)).filter(Boolean) as FeedMeta[];

  if (picked.length >= limit) return picked.slice(0, limit);

  const remaining = getAllAiFeeds().filter((a) => !paths.includes(a.path));
  return [...picked, ...remaining].slice(0, limit);
}
