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

  test("should display 4 'join now' buttons", async ({ page }) => {
    await stuPage.verifyJoinNowButtons();
  });
  test("should click join now top button and open STU page", async ({
    page,
  }) => {
    await stuPage.clickJoinNowTopButton();
    await stuPage.verifySTUSkoolPage();
  });
  test("should click join STU button and open STU page", async ({ page }) => {
    await stuPage.clickjoinStuButton();
    await stuPage.verifySTUSkoolPage();
  });
  test("should click join now button from STU section and open STU page", async ({
    page,
  }) => {
    await stuPage.clickJoinNowStuButton();
    await stuPage.verifySTUSkoolPage();
  });
  test("should click join now Stu Lite Button and open STU Lite page", async ({
    page,
  }) => {
    await stuPage.clickJoinNowStuLiteButton();
    await stuPage.verifySTULiteSkoolPage();
  });
  test("should click join skool button and open STU page", async ({ page }) => {
    await stuPage.clickjoinSkoolButton();
    await stuPage.verifySTUSkoolPage();
  });
  test("should open and close image", async ({ page }) => {
    await stuPage.clickImage();
    await stuPage.verifyCloseButtonDisplayed();
    await stuPage.closeImage();
    await stuPage.verifyCloseButtonNotDisplayed();
  });
});
