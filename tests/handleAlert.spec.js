const {test, expect}=require('@playwright/test')
//Need to check
test ("Handle multiple alerts", async function ({page}) {
    await page.goto("https://the-internet.herokuapp.com/javascript_alerts") 
    
page.on('dialog',async(dialogWindow)=>
    {
        expect(dialogWindow.type()).toContain('Confirm')
        expect(dialogWindow.message()).toContain("I am a JS Confirm")
        await page.waitForTimeout(1000)
        await dialogWindow.dismiss()
    })
    await page.getByText("Click for JS Confirm").click()    
})