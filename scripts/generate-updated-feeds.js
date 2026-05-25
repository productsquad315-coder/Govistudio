const fs = require('fs');
const path = require('path');

const SOURCE_FILE = path.join(__dirname, '..', 'New Text Document.txt');
const CONTENT_DIR = path.join(__dirname, '..', 'content', 'feeds');
const INDEX_FILE = path.join(__dirname, '..', 'content', 'feeds-index.json');

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
  
  // Split at the SEO BLOGS section to only process the 100 AI feeds
  const parts = rawText.split(/SEO BLOGS/i);
  const feedsSection = parts[0];

  const sections = [
    { name: 'Definitions', start: 1, end: 15 },
    { name: 'Industries', start: 16, end: 35 },
    { name: 'Use Cases', start: 36, end: 60 },
    { name: 'Comparisons', start: 61, end: 75 },
    { name: 'Implementation', start: 76, end: 90 },
    { name: 'ROI & Strategy', start: 91, end: 100 }
  ];

  function getCategoryForFeed(num) {
    const sec = sections.find(s => num >= s.start && num <= s.end);
    return sec ? sec.name : 'General';
  }

  // Use a more relaxed regex that doesn't strictly depend on dashes if they vary
  // Let's search for "AI FEED \d+:" at the start of a line (or with dashes around it)
  // Let's split by lines first and find where each feed starts
  const lines = feedsSection.split(/\r?\n/);
  const matches = [];

  for (let i = 0; i < lines.length; i++) {
    const line = lines[i].trim();
    const feedHeaderMatch = line.match(/^AI FEED (\d+):\s*(.+)$/i);
    if (feedHeaderMatch) {
      matches.push({
        lineIndex: i,
        idStr: feedHeaderMatch[1],
        idNum: parseInt(feedHeaderMatch[1], 10),
        title: feedHeaderMatch[2].trim()
      });
    }
  }

  console.log(`Found ${matches.length} feed headers.`);

  if (matches.length === 0) {
    console.error("No feeds found. Please inspect New Text Document.txt content structure.");
    return;
  }

  if (!fs.existsSync(CONTENT_DIR)) {
    fs.mkdirSync(CONTENT_DIR, { recursive: true });
  }

  const feedIndex = [];

  for (let i = 0; i < matches.length; i++) {
    const current = matches[i];
    const next = matches[i + 1];
    
    // Content starts after the current feed header's line
    // We should skip the line of dashes if present immediately before or after
    let startLine = current.lineIndex + 1;
    if (lines[startLine] && lines[startLine].trim().startsWith('---')) {
      startLine++;
    }
    
    // Content ends before the next feed header (skipping the preceding dash line if any)
    let endLine = next ? next.lineIndex : lines.length;
    if (next) {
      if (lines[endLine - 1] && lines[endLine - 1].trim().startsWith('---')) {
        endLine--;
      }
    }
    
    const feedLines = lines.slice(startLine, endLine);
    
    let description = '';
    let inDescription = true;
    
    let howItWorks = { input: '', processing: '', output: '' };
    let useCases = [];
    let benefits = [];
    let goviStudio = '';
    let faqs = [];
    
    let currentSection = 'description';
    
    let faqQuestion = '';
    let faqAnswer = '';

    for (let j = 0; j < feedLines.length; j++) {
      const line = feedLines[j].trim();
      if (!line) continue;
      
      // Skip top/bottom section boundary markers like ==== SECTION B ===
      if (line.startsWith('====') && line.includes('SECTION')) {
        continue;
      }
      
      // Check section transitions
      if (line === 'HOW IT WORKS') {
        currentSection = 'howitworks';
        inDescription = false;
        continue;
      } else if (line === 'USE CASES') {
        currentSection = 'usecases';
        inDescription = false;
        continue;
      } else if (line === 'BENEFITS') {
        currentSection = 'benefits';
        inDescription = false;
        continue;
      } else if (line === 'GOVISTUDIO') {
        currentSection = 'govistudio';
        inDescription = false;
        continue;
      } else if (line === 'FAQ') {
        currentSection = 'faq';
        inDescription = false;
        continue;
      }
      
      if (currentSection === 'description') {
        description += (description ? '\n' : '') + line;
      } else if (currentSection === 'howitworks') {
        if (line.startsWith('Input:')) {
          howItWorks.input = line.replace(/^Input:\s*/i, '').trim();
        } else if (line.startsWith('Processing:')) {
          howItWorks.processing = line.replace(/^Processing:\s*/i, '').trim();
        } else if (line.startsWith('Output:')) {
          howItWorks.output = line.replace(/^Output:\s*/i, '').trim();
        }
      } else if (currentSection === 'usecases') {
        if (line.startsWith('-')) {
          useCases.push(line.replace(/^-/, '').trim());
        } else {
          useCases.push(line);
        }
      } else if (currentSection === 'benefits') {
        if (line.startsWith('-')) {
          benefits.push(line.replace(/^-/, '').trim());
        } else {
          benefits.push(line);
        }
      } else if (currentSection === 'govistudio') {
        goviStudio += (goviStudio ? '\n' : '') + line;
      } else if (currentSection === 'faq') {
        if (line.startsWith('Q:')) {
          if (faqQuestion && faqAnswer) {
            faqs.push({ question: faqQuestion, answer: faqAnswer });
            faqAnswer = '';
          }
          faqQuestion = line.replace(/^Q:\s*/i, '').trim();
        } else if (line.startsWith('A:')) {
          faqAnswer = line.replace(/^A:\s*/i, '').trim();
        } else {
          if (faqAnswer) {
            faqAnswer += ' ' + line;
          }
        }
      }
    }
    
    if (faqQuestion && faqAnswer) {
      faqs.push({ question: faqQuestion, answer: faqAnswer });
    }

    const category = getCategoryForFeed(current.idNum);
    const slug = slugify(current.title);

    const feedData = {
      id: current.idStr,
      idNum: current.idNum,
      title: current.title,
      slug: slug,
      category: category,
      categorySlug: slugify(category),
      description: description,
      howItWorks: howItWorks,
      useCases: useCases,
      benefits: benefits,
      goviStudio: goviStudio,
      faqs: faqs
    };

    const destFile = path.join(CONTENT_DIR, `${slug}.json`);
    fs.writeFileSync(destFile, JSON.stringify(feedData, null, 2));

    feedIndex.push({
      id: current.idStr,
      idNum: current.idNum,
      title: current.title,
      slug: slug,
      category: category,
      categorySlug: slugify(category),
      description: description
    });
  }

  fs.writeFileSync(INDEX_FILE, JSON.stringify(feedIndex, null, 2));
  console.log(`Successfully generated ${feedIndex.length} feeds into content/feeds/ and content/feeds-index.json`);
}

run();
