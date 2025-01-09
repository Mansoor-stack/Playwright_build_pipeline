const { chromium } = require("@playwright/test");

let browser;
let page;

async function launchBrowser() {
  browser = await chromium.launch({headless:false});
  page = await browser.newPage(); // Create a new page
  return page;
}

async function closeBrowser() {
  if (browser) {
    await browser.close(); // Close the browser instance after the test
  }
}

module.exports = { launchBrowser, closeBrowser };
