const {test,ex, expect} = require('@playwright/test');


test('Page Playwrite Test',async function({page})
{
    //playwright code
    expect(12).toBe(12.0);
 
});
test('String Playwrite Test',async function({page})
{
    //playwright code
    expect("Abhijeet Sabale").toContain("Abhijeet");
});
test('to be include Test',async function({page})
{
    //playwright code
    expect("Abhijeet Sabale".includes("Sabale")).toBeTruthy();
});


