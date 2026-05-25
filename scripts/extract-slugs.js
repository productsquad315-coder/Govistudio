const fs = require('fs');
const path = require('path');

const file = fs.readFileSync(path.join(__dirname, '../govistudio-100-feeds.md'), 'utf-8');
const regex = /\*\*Slug:\*\*\s*`?(.*?)`?(\s|$)|url\s*slug:\*\*\s*`?(.*?)`?(\s|$)/gi;

let match;
const slugs = new Set();
while ((match = regex.exec(file)) !== null) {
  const slug = match[1] || match[3];
  if (slug) {
      // clean backticks
      slugs.add(slug.replace(/`/g, '').trim());
  }
}

console.log(Array.from(slugs).sort());
