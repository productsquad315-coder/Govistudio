const fs = require('fs');
const path = require('path');
const file = path.join(__dirname, '..', 'New Text Document.txt');
if (fs.existsSync(file)) {
  const content = fs.readFileSync(file, 'utf8');
  const feedMatches = content.match(/AI FEED \d+/g);
  console.log('AI Feeds in New Text Document.txt:', feedMatches ? feedMatches.length : 0);
  
  const seoBlogMatches = content.match(/SEO BLOG \d+/g);
  console.log('SEO Blogs in New Text Document.txt:', seoBlogMatches ? seoBlogMatches.length : 0);
} else {
  console.log('New Text Document.txt not found');
}
