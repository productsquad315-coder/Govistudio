const fs = require('fs');
const path = require('path');

const SOURCE_FILE = path.join(__dirname, '..', 'New Text Document.txt');
const CONTENT_DIR = path.join(__dirname, '..', 'content');
const AI_DIR = path.join(CONTENT_DIR, 'ai');
const BLOG_DIR = path.join(CONTENT_DIR, 'blog');

function slugify(text) {
  return text
    .toString()
    .toLowerCase()
    .trim()
    .replace(/\s+/g, '-')
    .replace(/[^\w-]+/g, '')
    .replace(/--+/g, '-');
}

function run() {
  if (!fs.existsSync(SOURCE_FILE)) {
    console.error('Source file not found:', SOURCE_FILE);
    return;
  }

  const rawText = fs.readFileSync(SOURCE_FILE, 'utf8');
  
  // 1. Setup Directories
  [AI_DIR, BLOG_DIR].forEach(dir => {
    if (fs.existsSync(dir)) fs.rmSync(dir, { recursive: true, force: true });
    fs.mkdirSync(dir, { recursive: true });
  });

  // 2. Parse AI Feeds
  // We'll split by the line separator pattern used before each item
  const aiFeedMatches = rawText.matchAll(/--------------------------------------------------------------------------------\r?\nAI FEED (\d+): (.*?)\r?\n--------------------------------------------------------------------------------([\s\S]*?)(?=--------------------------------------------------------------------------------|================================================================================|$)/g);

  const aiLinks = [];
  for (const match of aiFeedMatches) {
    const id = parseInt(match[1]);
    const title = match[2].trim();
    const body = match[3].trim();

    // Map ID to buckets
    let bucket = 'core';
    if (id >= 16 && id <= 35) bucket = 'industries';
    else if (id >= 36 && id <= 60) bucket = 'use-cases';
    else if (id >= 61 && id <= 80) bucket = 'implementation';
    else if (id >= 81 && id <= 90) bucket = 'comparisons';
    else if (id >= 91 && id <= 100) bucket = 'roi';

    const bucketPath = path.join(AI_DIR, bucket);
    if (!fs.existsSync(bucketPath)) fs.mkdirSync(bucketPath, { recursive: true });

    const slug = slugify(title);
    
    // Convert to Markdown structure
    let mdContent = `# ${title}\n\n`;
    // We can just clean up the body or keep it as is if it's already well formatted
    // The source has headers like HOW IT WORKS, USE CASES, etc. in CAPS.
    // Let's turn them into proper MD headers.
    const formattedBody = body
      .replace(/^HOW IT WORKS/gm, '## How It Works')
      .replace(/^USE CASES/gm, '## Use Cases')
      .replace(/^BENEFITS/gm, '## Benefits')
      .replace(/^GOVISTUDIO/gm, '## GOVISTUDIO')
      .replace(/^FAQ/gm, '## FAQ')
      .replace(/^Q: (.*?)$/gm, '### $1')
      .replace(/^A: (.*?)$/gm, '$1\n');

    mdContent += formattedBody;
    mdContent += `\n\n## Related Resources\nSee our [Blog](/blog) for narrative guides on these systems.`;

    fs.writeFileSync(path.join(bucketPath, `${slug}.md`), mdContent);
    aiLinks.push({ title, path: `/ai/${bucket}/${slug}` });
  }

  fs.writeFileSync(path.join(AI_DIR, 'index.json'), JSON.stringify(aiLinks, null, 2));
  console.log(`Generated ${aiLinks.length} AI articles.`);

  // 3. Parse SEO Blogs
  const blogMatches = rawText.matchAll(/--------------------------------------------------------------------------------\r?\nSEO BLOG (\d+): (.*?)\r?\n--------------------------------------------------------------------------------([\s\S]*?)(?=--------------------------------------------------------------------------------|================================================================================|$)/g);

  const blogLinks = [];
  for (const match of blogMatches) {
    const id = match[1];
    const title = match[2].trim();
    const body = match[3].trim();
    const slug = slugify(title);

    let mdContent = `# ${title}\n\n`;
    const formattedBody = body
      .replace(/^WHY THIS MATTERS/gm, '## Why This Matters')
      .replace(/^HOW (.*?) WORKS (.*?)$/gm, '## How $1 Works')
      .replace(/^WHAT (.*?) LOOKS LIKE (.*?)$/gm, '## What $1 Looks Like')
      .replace(/^WHAT (.*?) IS NOT/gm, '## What $1 Is Not')
      .replace(/^HOW GOVISTUDIO HELPS/gm, '## How GOVISTUDIO Helps')
      .replace(/^CONCLUSION/gm, '## Conclusion')
      .replace(/^FAQ/gm, '## FAQ')
      .replace(/^Q: (.*?)$/gm, '### $1')
      .replace(/^A: (.*?)$/gm, '$1\n')
      .replace(/^RELATED PAGES/gm, '## Related AI Feed')
      .replace(/Claude's response could not be fully generated[\s\S]*$/g, '')
      .replace(/You are out of free messages[\s\S]*$/g, '');

    mdContent += formattedBody;
    
    // Add specific interlinking back to AI Feed if not present
    if (!mdContent.includes('/ai')) {
        mdContent += `\n\nTo see technical specifications of these systems, explore our [AI Feed](/ai).`;
    }

    fs.writeFileSync(path.join(BLOG_DIR, `${slug}.md`), mdContent);
    blogLinks.push({ title, path: `/blog/${slug}` });
  }

  fs.writeFileSync(path.join(BLOG_DIR, 'index.json'), JSON.stringify(blogLinks, null, 2));
  console.log(`Generated ${blogLinks.length} Blog articles.`);
}

run();
