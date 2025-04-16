const {test,expect}=require('@playwright/test')
test("Keyboard Events in Playwright", async function ({page}) {
    await page.goto("https://www.google.com/")
    await page.locator("//*[@name='q']").fill("Java")
    await page.keyboard.press("Control+A")
    await page.keyboard.press("Backspace")
    
})