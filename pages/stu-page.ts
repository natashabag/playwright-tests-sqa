import { Page, expect } from "@playwright/test";

export class STUPage {
  constructor(private page: Page) {}

  // Buttons:
  joinNowButtons = this.page
    .locator(".elementor-button.elementor-button-link.elementor-size-md")
    .filter({ hasText: "Join now" });
  joinNowTopButton = this.joinNowButtons.first();
  joinNowStuButton = this.joinNowButtons.nth(2);
  joinNowStuLiteButton = this.joinNowButtons.nth(3);
  joinSkoolButton = this.page
    .locator(".elementor-button.elementor-button-link.elementor-size-md")
    .filter({ hasText: "Join Skool" });
  joinStuButton = this.page
    .locator(".elementor-button.elementor-button-link.elementor-size-md")
    .filter({ hasText: "Join STU" });
  closeButton = this.page.locator(
    "//*[@id='elementor-lightbox-slideshow-single-img']/div/a"
  );

  // Heading:
  heading = this.page.getByRole("heading", {
    name: "Software Testing University",
  });

  // Image:
  image = this.page.locator(
    ".elementor-element.elementor-element-2a1c644.elementor-widget.elementor-widget-image img"
  );

  // URL
  stuURL = "https://softwarequalityassociates.com/stu/";
  stuSkoolURL = "https://www.skool.com/stu/about";
  stuLiteSkoolURL = "https://www.skool.com/testers/about";

  async openStuURL() {
    await this.page.goto(this.stuURL);
  }

  // Button Methods:
  async clickJoinNowTopButton() {
    await this.joinNowTopButton.click();
  }
  async clickJoinNowStuButton() {
    await this.joinNowStuButton.scrollIntoViewIfNeeded();
    await this.joinNowStuButton.waitFor({ state: "visible" });
    await this.joinNowStuButton.click();
  }
  async clickJoinNowStuLiteButton() {
    await this.joinNowStuLiteButton.scrollIntoViewIfNeeded();
    await this.joinNowStuLiteButton.waitFor({ state: "visible" });
    await this.joinNowStuLiteButton.click();
  }
  async clickjoinStuButton() {
    await this.joinStuButton.scrollIntoViewIfNeeded();
    await this.joinStuButton.waitFor({ state: "visible" });
    await this.joinStuButton.click();
  }

  async clickjoinSkoolButton() {
    await this.joinSkoolButton.scrollIntoViewIfNeeded();
    await this.joinSkoolButton.waitFor({ state: "visible" });
    await this.joinSkoolButton.click();
  }

  // Click Image:
  async clickImage() {
    await this.image.scrollIntoViewIfNeeded();
    await this.image.waitFor({ state: "visible" });
    await this.image.click();
  }

  async closeImage() {
    await this.closeButton.click();
  }
  // Verification Methods:
  async verifyJoinNowButtons() {
    await expect(this.joinNowButtons).toHaveCount(4);
  }

  async verifyCloseButtonDisplayed() {
    await expect(this.closeButton).toBeVisible();
  }

  async verifyCloseButtonNotDisplayed() {
    await expect(this.closeButton).toBeHidden();
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
