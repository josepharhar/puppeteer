const puppeteer = require('.');

(async() => {
  const browser = await puppeteer.launch({
    dumpio: true,
    headless: false,
    defaultViewport: null
  });
  const page = await browser.newPage();
  await page.setRequestInterception(true);
  page.on('request', r => {
      console.log(`${r.method()} ${r.url().substring(0, 100)}`);
      r.continue();
  });
  await page.goto('https://twitter.com/', {waitUntil: 'networkidle2'});
})();
