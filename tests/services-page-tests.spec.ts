import { test, expect } from "@playwright/test";
import { selectors, urls, openURL } from "../pages/services-page";

test.describe("Service Page", () => {
  test.beforeEach(async ({ page }) => {
    await openURL(page);
  });

  test("should redirect to services page", async ({ page }) => {
    await page.click(selectors.servicesButton);
    await expect(page).toHaveURL(urls.servicesURL);
    await expect(page.locator(selectors.pageHeader)).toBeVisible();
  });
});
