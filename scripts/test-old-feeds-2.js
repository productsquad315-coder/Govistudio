const fs = require('fs');
const path = require('path');
const file = path.join(__dirname, '..', 'govistudio-100-feeds.md');
if (fs.existsSync(file)) {
  const content = fs.readFileSync(file, 'utf8');
  const lines = content.split(/\r?\n/);
  console.log('Total lines:', lines.length);
  // Log lines from 2650 to 2800 to see what's after FEED 041
  for (let i = 2650; i < Math.min(lines.length, 2800); i++) {
    console.log(`${i+1}: ${lines[i]}`);
  }
}
