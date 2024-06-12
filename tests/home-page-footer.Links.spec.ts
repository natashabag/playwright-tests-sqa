import { test, expect } from "@playwright/test";

test.describe("Home Page Footer Links Tests", () => {
  // Set a higher timeout for the entire test suite
  test.setTimeout(120000); // 2 minutes

  test.beforeEach(async ({ page }) => {
    await page.goto("https://softwarequalityassociates.com/", { waitUntil: "networkidle" });
  });

  test.only("click upwork footer", async ({ page }) => {
    const [upworkPage] = await Promise.all([
      page.waitForEvent("popup"),
      page.click(".elementor-repeater-item-c1104d1"),
    ]);
    await upworkPage.waitForLoadState();
    expect(upworkPage.url()).toBe("https://www.upwork.com/freelancers/~018cf87642b34f089c");
  });

  test.only("click twitter footer", async ({ page }) => {
    // Navigate to the home page

    const [twitterPage] = await Promise.all([
      page.waitForEvent("popup"),
      page.click(".elementor-repeater-item-7de7550"),
    ]);

    await twitterPage.waitForLoadState();
    expect(twitterPage.url()).toMatch(/https:\/\/x\.com\/SQASS1(\?mx=2)?/);
  });
});

test.only("click discord footer", async ({ page }) => {
  // Navigate to the home page

  const [discordPage] = await Promise.all([
    page.waitForEvent("popup"),
    page.click(".elementor-repeater-item-11b5f0a"),
  ]);

  await discordPage.waitForLoadState();
  expect(discordPage.url()).toMatch(/https:\/\/discord\.(gg|com\/invite)\/d8XZPx3B/);
});

test.only("click youtube footer", async ({ page }) => {
  // Navigate to the home page

  const [youtubePage] = await Promise.all([
    page.waitForEvent("popup"),
    page.click(".elementor-repeater-item-16ed165"),
  ]);

  await youtubePage.waitForLoadState();
  expect(youtubePage.url()).toBe("https://www.youtube.com/@SoftwareQualityAssociates");
});
