import { Page } from "@playwright/test";

export const selectors = {
  // Buttons:
  servicesButton: "#menu-item-1555",
  // Headers:
  pageHeader: "h1:has-text('Services')",
};

export async function openURL(page: Page) {
  await page.goto("https://softwarequalityassociates.com/");
}
export const urls = {
  servicesURL: "https://softwarequalityassociates.com/services/",
};
