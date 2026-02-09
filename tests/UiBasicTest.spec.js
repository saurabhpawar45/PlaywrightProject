import { test,expect } from '@playwright/test';

test('Test Basic Playwright script',async ({page})=>
{
//    const context =  await browser.newContext();
//     const page = await context.newPage();
   await page.goto("https://rahulshettyacademy.com/loginpagePractise/");

   console.log( await page.title());
   await expect(page).toHaveTitle('LoginPage Practise | Rahul Shetty Academy')
   await page.locator('input#username').fill('rahulshetty');
   await page.locator('input#password').fill('learning');
   await page.locator('#signInBtn').click();
});
