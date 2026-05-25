const fs = require('fs');
const path = require('path');
const file = path.join(__dirname, '..', 'govistudio-100-feeds.md');
if (fs.existsSync(file)) {
  const content = fs.readFileSync(file, 'utf8');
  // Match feed headers at the start of a line
  const lines = content.split(/\r?\n/);
  const feeds = [];
  for (let i = 0; i < lines.length; i++) {
    const line = lines[i].trim();
    if (line.match(/^# FEED \d+$/)) {
      feeds.push({ lineNum: i + 1, header: line, nextLine: lines[i+1] });
    }
  }
  console.log('Unique FEED headers count:', feeds.length);
  console.log('First 5:', feeds.slice(0, 5));
  console.log('Last 5:', feeds.slice(-5));
}
