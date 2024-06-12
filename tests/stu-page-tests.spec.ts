import { test, expect } from "@playwright/test";
import { STUPage } from "../pages/stu-page";

test.describe("STU Page", () => {
  let stuPage: STUPage;

  test.beforeEach(async ({ page }) => {
    stuPage = new STUPage(page);
    await stuPage.openStuURL();
  });

  test("should open STU", async ({ page }) => {
    await stuPage.verifySTUPage();
  });

  test("should display 4 buttons", async ({ page }) => {
    await stuPage.verifyJoinNowButtons();
  });
  test("should click Join Now Button One", async ({ page }) => {
    await stuPage.clickJoinNowTopButton();
    await page.pause();
    await stuPage.verifySTUSkoolPage();
  });
  test("should click Join Now Button Two", async ({ page }) => {
    await page.pause();
    await stuPage.clickJoinNowButtonTwo();
    await stuPage.verifySTUSkoolPage();
  });
  test("should click Join Now Button Three", async ({ page }) => {
    await stuPage.clickJoinNowButtonThree();
    await stuPage.verifySTULiteSkoolPage();
  });
});
