const {test,expect}=require('@playwright/test')
test("Autocomplete testcases", async function({page}) {

    await page.goto("https://www.google.com/")    
    await page.getByTitle("Search").fill("Java")
    await page.waitForSelector("//*[@id='Alh6id']")
    await page.waitForTimeout(100);
    await page.keyboard.press("ArrowDown")
    await page.keyboard.press("ArrowDown")
    await page.keyboard.press("ArrowDown")
    await page.waitForTimeout(1000);
    await page.keyboard.press("Enter")
})

test("Autocomplete testcases with array", async function({page}) {

    await page.goto("https://www.google.com/")    
    await page.getByTitle("Search").fill("java")
    await page.waitForSelector("//*[@id='Alh6id']")
    const allElements = await page.locator("//*[@id='Alh6id")
    await page.waitForTimeout(100);
    for(let i=0;i<=allElements.length;i++)
    {
       const elementName= await allElements[i].textContent()
        if(elementName.includes('compiler')){
            await allElements[i].click()
        }
    }
})