const{test,expect}=require('@playwright/test')
const readData= JSON.parse(JSON.stringify(require("../tests/testData.json")))

test("Read the file from JSON", async function ({page}) {
    await page.goto("https://freelance-learn-automation.vercel.app/signup")
    await page.locator("//*[@placeholder='Name']").fill(readData.name,{delay:600})
    await page.locator("//*[@placeholder='Email']").fill(readData.emailid,{delay:600})

    
    
});