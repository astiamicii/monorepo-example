const playwright = require('playwright');

(async () => {
  // Try to add 'firefox' to the list ↓
  for (const browserType of ['chromium', 'webkit', 'firefox']) {
    const browser = await playwright[browserType].launch();
    const context = await browser.newContext();
    const page = await context.newPage();
    await page.goto('https://lola-tech.github.io/graphql-kimera/');
    await page.screenshot({ path: `playwright/example-${browserType}.png` });
    await browser.close();
  }
})();
