const {test,expect}= require('@playwright/test')
test("Mouse Hover", async function ({page}) {
    await page.goto("https://www.amazon.in/")
    await page.waitForTimeout(100);
    await page.locator("(//*[text()='Hello, sign in']/ancestor::a)[1]").hover()
    await page.getByText("Your Orders").click()
})