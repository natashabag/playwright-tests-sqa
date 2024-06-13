import { test, expect } from "@playwright/test";

test.describe("Home Page Top Social Links Tests", () => {
  // Set a higher timeout for the entire test suite
  test.setTimeout(300000); // 5 minutes

  test.beforeEach(async ({ page }) => {
    await page.goto("https://softwarequalityassociates.com/", {
      waitUntil: "networkidle",
    });
  });

  test("click discord top social link", async ({ page }) => {
    const [discordPage] = await Promise.all([
      page.waitForEvent("popup"),
      page.click(".elementor-repeater-item-cef435f"),
    ]);

    await discordPage.waitForLoadState();
    expect(discordPage.url()).toMatch(
      /https:\/\/discord\.(gg|com\/invite)\/d8XZPx3B/
    );
  });

  test("click top youtube social link", async ({ page }) => {
    const youtubeLinkSelector = ".elementor-repeater-item-6ad6bee";

    // Wait for the element to be visible
    await page.waitForSelector(youtubeLinkSelector, {
      state: "visible",
      timeout: 300000,
    });

    // Debugging: Add log to check if the element is found and take a screenshot
    console.log(await page.isVisible(youtubeLinkSelector));
    await page.screenshot({
      path: "before_click_youtube_link.png",
      timeout: 300000,
    });

    // Wait for the popup event and click the element
    const [youtubePage] = await Promise.all([
      page.waitForEvent("popup"),
      page.click(youtubeLinkSelector),
    ]);

    await youtubePage.waitForLoadState();
    expect(youtubePage.url()).toMatch(
      "https://www.youtube.com/@SoftwareQualityAssociates"
    );
  });

  test("click upwork top social link", async ({ page }) => {
    const [upworkPage] = await Promise.all([
      page.waitForEvent("popup"),
      page.click(".elementor-repeater-item-045e83c"),
    ]);
    await upworkPage.waitForLoadState();
    expect(upworkPage.url()).toBe(
      "https://www.upwork.com/freelancers/~018cf87642b34f089c"
    );
  });
});
