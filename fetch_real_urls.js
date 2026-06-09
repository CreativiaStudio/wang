const https = require('https');

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
  const terms = [
    'Genesa Crystal sacred geometry', 
    'Pentasfera sacred geometry', 
    'IperGenesa sacred geometry', 
    'Unisfera sacred geometry'
  ];
  console.log("Fetching actual image URLs from Yahoo Images...");
  const results = {};
  for (const term of terms) {
    try {
      const url = await searchYahooImages(term);
      results[term.split(' ')[0]] = url || 'Not found';
    } catch (e) {
      results[term.split(' ')[0]] = `Error: ${e.message}`;
    }
  }
  console.log("\n--- RESULTING URLS ---");
  console.log(JSON.stringify(results, null, 2));
}

main();
