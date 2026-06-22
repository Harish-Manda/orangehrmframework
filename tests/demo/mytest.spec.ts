import { test, expect } from "@playwright/test";

test("Should load home page with correct title", async ({ page }) => {
  // Go to the home page
  await page.goto("https://katalon-demo-cura.herokuapp.com/");

  // Assert if the title is correct
  await expect(page).toHaveTitle("CURA Healthcare Service");

  // Assert header text
  await expect(page.locator("//h1")).toHaveText("CURA Healthcare Service");
});

test("should perform action", { tag: "@smoke" }, async ({ page }, testinfo) => {
  await page.locator("//h1").click();
});

test.only("Should do something", async ({ page }) => {
  //✅ page.getby* and page.locator returns a object
  //✅ Above methods no need to awaited
  //✅ The type locator is object
  //✅ Locators are lazy
  await page.goto("https://katalon-demo-cura.herokuapp.com/");
  let makeAppmButton = page.locator("Invalid locator");
  //console.log(">> The type of locator is: ${typeof makeAppmButton}, The value of locator is :${JSON.stringify(makeAppmButton)}");
  await makeAppmButton.click();
  await page.getByRole('heading', { name: 'We Care About Your Health' }).click();
});
