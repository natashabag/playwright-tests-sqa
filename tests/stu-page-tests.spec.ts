import { test, expect } from "@playwright/test";
import { STUPage } from "../pages/stu-page";
import { ServicesPage } from "../pages/services-page";

test.describe("STU Page", () => {
  let stuPage: STUPage;
  let servicesPage: ServicesPage;

  test.beforeEach(async ({ page }) => {
    servicesPage = new ServicesPage(page);
    await servicesPage.openHomePage();

    stuPage = new STUPage(page);
  });

  test("should open STU", async ({ page }) => {
    await stuPage.clickSTUButton();
    await stuPage.verifySTUPage();
  });
});
