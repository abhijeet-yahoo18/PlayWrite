const{test,expect}= require('@playwright/test')

test("Total count till page get loaded", async function ({page}) {
    await page.goto("https://freelance-learn-automation.vercel.app/login/")
    await page.waitForLoadState("networkidle")
    const countName=await page.locator("//*[@type='checkbox']").count()
    expect(countName).toEqual(6)
});