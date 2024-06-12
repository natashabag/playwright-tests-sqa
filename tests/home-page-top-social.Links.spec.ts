import { test, expect } from "@playwright/test";

test.describe("Home Page Top Social Links Tests", () => {
  // Set a higher timeout for the entire test suite
  test.setTimeout(120000); // 2 minutes

  test.beforeEach(async ({ page }) => {
    await page.goto("https://softwarequalityassociates.com/", { waitUntil: "networkidle" });
  });

  test.only("click upwork top social link", async ({ page }) => {
    const [upworkPage] = await Promise.all([
      page.waitForEvent("popup"),
      page.click(".elementor-repeater-item-045e83c"),
    ]);
    await upworkPage.waitForLoadState();
    expect(upworkPage.url()).toBe("https://www.upwork.com/freelancers/~018cf87642b34f089c");
  });
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

test.only("click linkedin footer", async ({ page }) => {
  const [linkedinPage] = await Promise.all([
    page.waitForEvent("popup"),
    page.click(".elementor-repeater-item-eb3cdb2"),
  ]);
  await linkedinPage.waitForLoadState();
  expect(linkedinPage.url()).toBe(
    "https://www.linkedin.com/company/software-quality-associates-va/"
  );
});

test.only("click discord top social link", async ({ page }) => {
  // Navigate to the home page

  const [discordPage] = await Promise.all([
    page.waitForEvent("popup"),
    page.click(".elementor-repeater-item-cef435f"),
  ]);

  await discordPage.waitForLoadState();
  expect(discordPage.url()).toMatch(/https:\/\/discord\.(gg|com\/invite)\/d8XZPx3B/);
});

test.only("click top youtube social link", async ({ page }) => {
  // Navigate to the home page

  const [youtubePage] = await Promise.all([
    page.waitForEvent("popup"),
    page.click(".elementor-repeater-item-6ad6bee"),
  ]);

  await youtubePage.waitForLoadState();
  expect(youtubePage.url()).toBe("https://www.youtube.com/@SoftwareQualityAssociates");
});
