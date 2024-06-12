import { test, expect } from "@playwright/test";

// test.only("Verify Services", async ({ page }) => {
//   // Set a higher timeout for the test
//   test.setTimeout(120000); // 2 minutes

//   await page.goto("https://softwarequalityassociates.com/", { waitUntil: "networkidle" });

//   const servicesLinkXPath =
//     '//a[@href="https://softwarequalityassociates.com/services/" and @class="hfe-menu-item"]';

//   // Wait for the element to be visible
//   await page.waitForSelector(servicesLinkXPath, { state: "visible", timeout: 60000 });

//   // Debugging: Add log to check if the element is found and take a screenshot
//   console.log(await page.isVisible(servicesLinkXPath));
//   await page.screenshot({ path: "before_click_services.png", timeout: 30000 });

//   // Click the Services link
//   await page.locator(servicesLinkXPath).click();
//   await expect(page).toHaveURL("https://softwarequalityassociates.com/services/");

//   // Take a screenshot after click
//   await page.screenshot({ path: "after_click_services.png", timeout: 30000 });
// });

// test.only("Verify About Us", async ({ page }) => {
//   // Set a higher timeout for the test
//   test.setTimeout(120000); // 2 minutes

//   await page.goto("https://softwarequalityassociates.com/", { waitUntil: "networkidle" });

//   const aboutUsLinkXPath =
//     '//a[@href="https://softwarequalityassociates.com/about/" and @class="hfe-menu-item"]';

//   // Wait for the element to be visible
//   await page.waitForSelector(aboutUsLinkXPath, { state: "visible", timeout: 60000 });

//   // Debugging: Add log to check if the element is found and take a screenshot
//   console.log(await page.isVisible(aboutUsLinkXPath));
//   await page.screenshot({ path: "before_click_about_us.png", timeout: 30000 });

//   // Click the About Us link
//   await page.locator(aboutUsLinkXPath).click();
//   await expect(page).toHaveURL("https://softwarequalityassociates.com/about/");

//   // Take a screenshot after click
//   await page.screenshot({ path: "after_click_about_us.png", timeout: 30000 });
// });

// test.only("Verify STU Link", async ({ page }) => {
//   // Set a higher timeout for the test
//   test.setTimeout(120000); // 2 minutes

//   await page.goto("https://softwarequalityassociates.com/", { waitUntil: "networkidle" });

//   const stuLinkXPath =
//     '//a[@href="https://softwarequalityassociates.com/stu/" and @class="hfe-menu-item"]';

//   // Wait for the element to be visible
//   await page.waitForSelector(stuLinkXPath, { state: "visible", timeout: 60000 });

//   // Debugging: Add log to check if the element is found and take a screenshot
//   console.log(await page.isVisible(stuLinkXPath));
//   await page.screenshot({ path: "before_click_stu.png", timeout: 30000 });

//   // Click the STU link
//   await page.locator(stuLinkXPath).click();
//   await expect(page).toHaveURL("https://softwarequalityassociates.com/stu/");

//   // Take a screenshot after click
//   await page.screenshot({ path: "after_click_stu.png", timeout: 30000 });
// });

// test.only("Verify Contact Us", async ({ page }) => {
//   // Set a higher timeout for the test
//   test.setTimeout(120000); // 2 minutes

//   await page.goto("https://softwarequalityassociates.com/", { waitUntil: "networkidle" });

//   const contactUsLinkXPath =
//     '//a[@href="https://softwarequalityassociates.com/#contactUs" and contains(@class, "hfe-menu-item")]';

//   // Wait for the element to be visible
//   await page.waitForSelector(contactUsLinkXPath, { state: "visible", timeout: 60000 });

//   // Debugging: Add log to check if the element is found and take a screenshot
//   console.log(await page.isVisible(contactUsLinkXPath));
//   await page.screenshot({ path: "before_click_contact_us.png", timeout: 30000 });

//   // Click the Contact Us link
//   await page.locator(contactUsLinkXPath).click();

//   // Wait for the Contact Us section to be visible
//   const contactUsSection = "#contactUs"; // Replace with a more specific selector if necessary
//   await page.waitForSelector(contactUsSection, { state: "visible", timeout: 60000 });

//   // Verify that the Contact Us section is visible
//   expect(await page.isVisible(contactUsSection)).toBeTruthy();

//   // Take a screenshot after click
//   await page.screenshot({ path: "after_click_contact_us.png", timeout: 30000 });
// });

// test.only("Verify Shop Link", async ({ page }) => {
//   // Set a higher timeout for the test
//   test.setTimeout(120000); // 2 minutes

//   await page.goto("https://softwarequalityassociates.com/", { waitUntil: "networkidle" });

//   const shopLinkXPath =
//     '//a[@href="https://www.redbubble.com/people/sqassociates/shop" and @class="hfe-menu-item"]';

//   // Wait for the element to be visible
//   await page.waitForSelector(shopLinkXPath, { state: "visible", timeout: 60000 });

//   // Debugging: Add log to check if the element is found and take a screenshot
//   console.log(await page.isVisible(shopLinkXPath));
//   await page.screenshot({ path: "before_click_shop.png", timeout: 30000 });

//   // Click the Shop link
//   await page.locator(shopLinkXPath).click();
//   await expect(page).toHaveURL("https://www.redbubble.com/people/sqassociates/shop");

//   // Take a screenshot after click
//   await page.screenshot({ path: "after_click_shop.png", timeout: 30000 });
// });
