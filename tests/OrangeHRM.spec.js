const{test,expect} =require('@playwright/test');

test("Verify OrangeHRM title",async ({page})=> {
   await page.goto("https://opensource-demo.orangehrmlive.com/");
   const url =await page.url();
   console.log("Title is "+url);
   const title=await page.title()
   console.log("Page title is "+title)
   //to check retry
   await expect(page).toHaveTitle("OrangeHR")
});