const {test,expect}=require('@playwright/test')
test("validate login",async function({page}){
    await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
    await page.viewportSize
    await page.getByPlaceholder("Username").fill("Admin",{delay:700});
    await page.getByPlaceholder("Password").type("admin123",{delay:700});
    await page.locator("//*[text()=' Login ']").click()
    await page.waitForTimeout(5000);
    await expect(page).toHaveTitle("OrangeHRM");
    await page.locator("(//*[@alt='profile picture'])[1]").click()
    await page.waitForTimeout(5000);   
    await page.locator("(//*[text()='Logout'])[1]").click()
    await page.waitForTimeout(5000);
})
test("Caputure error message by entering invalid login details",async function({page}){
    await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
    await page.getByPlaceholder("Username").fill("Admin",{delay:700});
    await page.getByPlaceholder("Password").type("admin123567",{delay:700});
    await page.locator("//*[text()=' Login ']").click()
    const errorMessage=await page.locator("//*[text()='Invalid credentials']").textContent()
    console.log("error message "+errorMessage);
    expect(errorMessage.includes("Invalid")).toBeTruthy()
})