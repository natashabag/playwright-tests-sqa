import { Page, expect } from "@playwright/test";

export class STUPage {
  constructor(private page: Page) {}

  // Selectors
  buttonSTU = this.page.locator("#menu-item-1183");
  joinNowButtons = this.page
    .locator(".elementor-button.elementor-button-link.elementor-size-md")
    .filter({ hasText: "Join now" });
  joinNowTopButton = this.joinNowButtons.first();
  joinNowButtonTwo = this.joinNowButtons.nth(2);
  joinNowButtonThree = this.joinNowButtons.nth(3);

  joinStuButton = this.page
    .locator(".elementor-button.elementor-button-link.elementor-size-md")
    .filter({ hasText: "Join STU" });

  heading = this.page.getByRole("heading", {
    name: "Software Testing University",
  });

  // URL
  stuURL = "https://softwarequalityassociates.com/stu/";
  stuSkoolURL = "https://www.skool.com/stu/about";
  stuLiteSkoolURL = "https://www.skool.com/testers/about";

  async openStuURL() {
    await this.page.goto(this.stuURL);
  }

  // Methods
  async clickSTUButton() {
    await this.buttonSTU.click();
  }

  async clickJoinNowTopButton() {
    await this.joinNowTopButton.click();
  }
  async clickJoinNowButtonTwo() {
    await this.joinNowButtonTwo.scrollIntoViewIfNeeded();
    await this.joinNowButtonTwo.waitFor({ state: "visible" });
    await this.joinNowButtonTwo.click();
  }
  async clickJoinNowButtonThree() {
    await this.joinNowButtonThree.scrollIntoViewIfNeeded();
    await this.joinNowButtonThree.waitFor({ state: "visible" });
    await this.joinNowButtonThree.click();
  }

  async verifyJoinNowButtons() {
    await expect(this.joinNowButtons).toHaveCount(4);
  }

  async verifySTUPage() {
    await expect(this.page).toHaveURL(this.stuURL);
    await expect(this.heading).toBeVisible();
    await expect(this.page.getByRole("heading")).toContainText(
      "Software TestingUniversity"
    );
  }
  async verifySTUSkoolPage() {
    await expect(this.page).toHaveURL(this.stuSkoolURL);
  }
  async verifySTULiteSkoolPage() {
    await expect(this.page).toHaveURL(this.stuLiteSkoolURL);
  }
}
