const fs = require('fs');
const path = require('path');
const file = path.join(__dirname, '..', 'New Text Document.txt');
const content = fs.readFileSync(file, 'utf8');
console.log('File length:', content.length);
const parts = content.split(/SEO BLOGS/i);
console.log('Parts count:', parts.length);
console.log('First part length:', parts[0].length);
const lines = parts[0].split(/\r?\n/);
console.log('Lines count in first part:', lines.length);
for (let i = 0; i < 30; i++) {
  console.log(`${i + 1}: [${lines[i]}]`);
}
