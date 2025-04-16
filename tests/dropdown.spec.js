import {test,spec, expect} from '@playwright/test';

test('Handel multiple dropdown box', async({page})=>{
    await page.goto("https://freelance-learn-automation.vercel.app/signup")
    await page.locator("//*[@name='state']").selectOption({label:"Maharashtra"});
    await page.waitForTimeout(2000);
    await page.locator("//*[@name='state']").selectOption({label:"Lakshadweep"});
    await page.waitForTimeout(2000);
    const dropdownValue =await page.locator("//*[@name='state']").textContent();
    console.log(" All state values are \n"+dropdownValue)
    expect(dropdownValue.includes("Tamil Nadu")).toBeTruthy()

    await page.locator("//*[@name='hobbies']").selectOption(["Swimming","Playing"]);
    await page.waitForTimeout(2000);
    

});
