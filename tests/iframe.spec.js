const {test,spect} = require('@playwright/test')

test("iframe testing", async function ({page}) {
    await page.goto("https://docs.oracle.com/javase/8/docs/api/")
   const iframe= await page.frameLocator("//*[@name='packageFrame']")
    await iframe.locator("//*[text()='AbstractAction']").click()
    await page.waitForTimeout(30)

})
