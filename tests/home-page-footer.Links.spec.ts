import { test, expect } from "@playwright/test";

test.describe("Home Page Footer Links Tests", () => {
  // Set a higher timeout for the entire test suite
  test.setTimeout(300000); // 5 minutes

  test.beforeEach(async ({ page }) => {
    await page.goto("https://softwarequalityassociates.com/", { waitUntil: "networkidle" });
  });

  //   test.only("click upwork footer", async ({ page }) => {
  //     const [upworkPage] = await Promise.all([
  //       page.waitForEvent("popup"),
  //       page.click(".elementor-repeater-item-c1104d1"),
  //     ]);
  //     await upworkPage.waitForLoadState();
  //     expect(upworkPage.url()).toBe("https://www.upwork.com/freelancers/~018cf87642b34f089c");
  //   });

  //   test.only("click twitter footer", async ({ page }) => {
  //     // Navigate to the home page

  //     const [twitterPage] = await Promise.all([
  //       page.waitForEvent("popup"),
  //       page.click(".elementor-repeater-item-7de7550"),
  //     ]);

  //     await twitterPage.waitForLoadState();
  //     expect(twitterPage.url()).toMatch(/https:\/\/x\.com\/SQASS1(\?mx=2)?/);
  //   });
  // });

  //   test.only("click linkedin footer", async ({ page }) => {
  //     const linkedinLinkSelector = ".elementor-repeater-item-eb3cdb2";

  //     // Wait for the element to be visible
  //     await page.waitForSelector(linkedinLinkSelector, { state: "visible", timeout: 300000 });

  //     // Debugging: Add log to check if the element is found and take a screenshot
  //     console.log(await page.isVisible(linkedinLinkSelector));
  //     await page.screenshot({ path: "before_click_linkedin_link.png", timeout: 300000 });

  //     // Wait for the popup event and click the element
  //     const [linkedinPage] = await Promise.all([
  //       page.waitForEvent("popup"),
  //       page.click(linkedinLinkSelector),
  //     ]);

  //     await linkedinPage.waitForLoadState();
  //     expect(linkedinPage.url()).toBe(
  //       "https://www.linkedin.com/company/software-quality-associates-va/"
  //     );

  //     // Take a screenshot after interaction
  //     await page.screenshot({ path: "after_click_linkedin_link.png", timeout: 300000 });
  //   });
  // });

  //

  test.only("click youtube footer", async ({ page }) => {
    // Navigate to the home page

    const [youtubePage] = await Promise.all([
      page.waitForEvent("popup"),
      page.click(".elementor-repeater-item-16ed165"),
    ]);

    await youtubePage.waitForLoadState();
    expect(youtubePage.url()).toBe("https://www.youtube.com/@SoftwareQualityAssociates");
  });
});
