const { When, Given, Then, Before, After } = require("@cucumber/cucumber");
const { expect, playwright } = require("@playwright/test");
const { launchBrowser, closeBrowser } = require('../../playwrightHelper');  // Import the helper file

let page;

// Hook to run before each scenario
Before(async function () {
  page = await launchBrowser();  // Launch the browser and get the page
});


Given(
  "The application is launched",
  { timeout: 100 * 1000 },
  async function () {
    // const browser = await playwright.chromium.launch();
    // const context = await browser.newContext();
    // const page = await context.newPage();
    await page.goto("https://testautomationpractice.blogspot.com/");
  }
);

When("The name field is located", { timeout: 100 * 1000 }, async function () {
  await expect(page.locator("#name")).toBeVisible();
});

Then("The name is entered", { timeout: 100 * 1000 }, async function () {
  await page.locator("#name").fill("Mansoor Ahmed");
  //await expect(page.locator("#name")).toContainText("Mansoor Ahmed");
});

When("The email field is located", { timeout: 100 * 1000 }, async function () {
  await expect(page.locator("#email")).toBeVisible();
});

Then("The email is entered", { timeout: 100 * 1000 }, async function () {
  await page.locator("#email").fill("mansoorahmed2214@gmail.com")

//   await expect(page.locator("#email")).toContainText("mansoorahmed2214@gmail.com");
  
});


After(async function () {
    await closeBrowser();  // Close the browser after the scenario
  });
/*
Given The application is launched
When The name field if located
Then The name is entered
When The email field is located
Then The email is entered
*/
