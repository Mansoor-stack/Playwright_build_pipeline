const { test, expect } = require("@playwright/test");

test("Sample test", async ({ page }) => {
  await page.goto("https://testautomationpractice.blogspot.com/");

  //  await page.getByLabel("Name:").fill("Mansoor Ahmed");
  //  await page.getByLabel("Email:").fill("mansoorahmed2214@gmail.com");

  await page.locator("#name").fill("Mansoor Ahmed");
  await page.locator("#email").fill("mansoorahmed2214@gmail.com");

});
