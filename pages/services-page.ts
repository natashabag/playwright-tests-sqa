import { Page, expect } from "@playwright/test";

export class ServicesPage {
  constructor(private page: Page) {}

  // Selectors
  servicesButton = this.page.locator("#menu-item-1555");
  pageHeader = this.page.locator("h1:has-text('Services')");

  // URL
  servicesURL = "https://softwarequalityassociates.com/services/";
  homeURL = "https://softwarequalityassociates.com/";

  // Methods
  async openHomePage() {
    await this.page.goto(this.homeURL);
  }

  async clickServicesButton() {
    await this.servicesButton.click();
  }

  async verifyServicesPage() {
    await expect(this.page).toHaveURL(this.servicesURL);
    await expect(this.pageHeader).toBeVisible();
  }
}
