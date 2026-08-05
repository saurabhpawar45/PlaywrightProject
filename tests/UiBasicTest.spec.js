import { test,expect } from '@playwright/test';

test.use({
  viewport: 
  {height:1080,width:1920},
  launchOptions: {
    args: ['--start-maximized']
  }
});
test('Test Basic Playwright script',async ({page})=>
{
//    const context =  await browser.newContext();
//     const page = await context.newPage();
   await page.goto("https://www.cricbuzz.com/");
   await page.pause();

});
