import { Page, expect } from "@playwright/test";

export class STUPage {
  constructor(private page: Page) {}

  // Selectors
  buttonSTU = this.page.locator("#menu-item-1183");
  heading = this.page.getByRole("heading", {
    name: "Software Testing University",
  });

  // URL
  stuURL = "https://softwarequalityassociates.com/stu/";

  // Methods
  async clickSTUButton() {
    await this.buttonSTU.click();
  }

  async verifySTUPage() {
    await expect(this.page).toHaveURL(this.stuURL);
    await expect(this.heading).toBeVisible();
    await expect(this.page.getByRole("heading")).toContainText(
      "Software TestingUniversity"
    );
  }
}
