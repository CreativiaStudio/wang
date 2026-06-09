const https = require('https');
const fs = require('fs');
const path = require('path');

const publicDir = path.join(__dirname, 'public');

if (!fs.existsSync(publicDir)) {
  fs.mkdirSync(publicDir, { recursive: true });
}

function downloadImage(filename, url) {
  return new Promise((resolve, reject) => {
    const filepath = path.join(publicDir, filename);
    const file = fs.createWriteStream(filepath);

    https.get(url, (response) => {
      if (response.statusCode === 200) {
        response.pipe(file);
        file.on('finish', () => {
          file.close();
          console.log(`Successfully downloaded ${filename} from ${url}`);
          resolve();
        });
      } else if (response.statusCode >= 300 && response.statusCode < 400 && response.headers.location) {
        file.close();
        fs.unlinkSync(filepath);
        downloadImage(filename, response.headers.location).then(resolve).catch(reject);
      } else {
        file.close();
        fs.unlinkSync(filepath);
        console.error(`Failed to download ${filename}: Server responded with ${response.statusCode}`);
        reject(new Error(`Status ${response.statusCode}`));
      }
    }).on('error', (err) => {
      fs.unlinkSync(filepath);
      console.error(`Failed to download ${filename}: ${err.message}`);
      reject(err);
    });
  });
}

function searchYahooImages(query) {
  return new Promise((resolve, reject) => {
    const url = `https://images.search.yahoo.com/search/images?p=${encodeURIComponent(query)}`;
    https.get(url, { 
      headers: { 
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/115.0.0.0 Safari/537.36' 
      } 
    }, (res) => {
      let data = '';
      res.on('data', chunk => data += chunk);
      res.on('end', () => {
        // Match Yahoo Image search thumbnail URLs (hosted by Bing)
        const match = data.match(/src="(https:\/\/tse\d+\.mm\.bing\.net\/th\?id=[^"]+)"/);
        if (match && match[1]) {
          const imgUrl = match[1].replace(/&amp;/g, '&');
          resolve(imgUrl);
        } else {
          resolve(null);
        }
      });
    }).on('error', reject);
  });
}

async function main() {
  const devices = [
    { query: 'Genesa Crystal sacred geometry', file: 'Genesa_real.jpg' },
    { query: 'Pentasfera sacred geometry', file: 'Pentasfera_real.jpg' },
    { query: 'IperGenesa sacred geometry', file: 'IperGenesa_real.jpg' },
    { query: 'Unisfera sacred geometry', file: 'Unisfera_real.jpg' }
  ];

  console.log("Searching for real images online...");
  for (const device of devices) {
    try {
      const url = await searchYahooImages(device.query);
      if (url) {
        console.log(`Found URL for ${device.file}: ${url}`);
        await downloadImage(device.file, url);
      } else {
        console.log(`Could not find an image for ${device.query}`);
      }
    } catch (e) {
      console.error(`Error processing ${device.file}:`, e);
    }
  }
  console.log("Done.");
}

main();
