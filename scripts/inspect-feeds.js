const fs = require('fs');
const path = require('path');
const file = path.join(__dirname, '..', 'govistudio-100-feeds.md');
if (fs.existsSync(file)) {
  const content = fs.readFileSync(file, 'utf8');
  const lines = content.split(/\r?\n/);
  // Find where FEED 041, 042, 043 start
  const feeds = [];
  for (let i = 0; i < lines.length; i++) {
    const line = lines[i].trim();
    if (line.match(/^# FEED \d+/)) {
      feeds.push({ id: line, lineIndex: i });
    }
  }
  
  for (let idx = 40; idx < Math.min(feeds.length, 50); idx++) {
    const current = feeds[idx];
    const next = feeds[idx + 1];
    const feedLines = lines.slice(current.lineIndex, next ? next.lineIndex : lines.length);
    console.log(`--- Feed Index ${idx + 1} (${current.id}) lines count: ${feedLines.length} ---`);
    console.log(feedLines.slice(0, 8).join('\n'));
  }
}
