const {test,expect}=require('@playwright/test')
test.describe("Data driven login function", async function () {
    
})
test("File upload",async function ({page}) {
    
    await page.goto("https://the-internet.herokuapp.com/upload")
    await page.waitForTimeout(1500)
    await page.locator("//*[@name='file']").setInputFiles("C:\\Users\\Acer\\Downloads\\praful_HRPS.pdf")
    await page.waitForTimeout(1500)
    await page.locator("//*[@type='submit']").click()
    expect(await page.locator("//h3")).toHaveText("File Uploaded!") 
})