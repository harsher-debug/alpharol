const { chromium } = require('C:/Users/Luize Raupp/AppData/Local/npm-cache/_npx/420ff84f11983ee5/node_modules/playwright');

(async () => {
  const browser = await chromium.launch({ headless: true });
  try {
    const page = await browser.newPage({ viewport: { width: 1280, height: 800 } });
    await page.goto('http://localhost:4173/#parceiros', { waitUntil: 'networkidle' });
    const icon = page.locator('.partner-entry a[href*="wa.me"] .brand-icon').first();
    const size = await icon.evaluate((element) => ({ width: element.offsetWidth, height: element.offsetHeight }));
    if (size.width !== 20 || size.height !== 20) throw new Error(`Unexpected icon size: ${size.width}x${size.height}`);
    await page.locator('#parceiros').screenshot({ path: 'C:/Users/Public/alpharol-partners-icon.png' });
    console.log('PASS partner WhatsApp icons are 20x20');
  } finally {
    await browser.close();
  }
})();
