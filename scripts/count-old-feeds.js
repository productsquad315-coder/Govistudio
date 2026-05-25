const fs = require('fs');
const path = require('path');
const file = path.join(__dirname, '..', 'govistudio-100-feeds.md');
if (fs.existsSync(file)) {
  const content = fs.readFileSync(file, 'utf8');
  const lines = content.split(/\r?\n/);
  const feeds = [];
  for (let i = 0; i < lines.length; i++) {
    const line = lines[i].trim();
    if (line.match(/^# FEED \d+/)) {
      feeds.push({ lineNum: i + 1, text: line });
    }
  }
  console.log('Total feeds found matching /^# FEED \\d+/:', feeds.length);
  if (feeds.length > 0) {
    console.log('First 3:', feeds.slice(0, 3));
    console.log('Last 3:', feeds.slice(-3));
  }
}
