import { test,expect } from '@playwright/test';

test('Test Basic Playwright script',async ({page})=>
{
   await page.goto('https://rahulshettyacademy.com/client');
   await page.locator('#userEmail').fill('saurabhpawar4510@gmail.com');
   await page.locator('#userPassword').fill('Saurabh@1');
   await page.locator('#login').click();
   await page.waitForLoadState('networkidle');
   const titles = await page.locator('.card-body b').allTextContents();
   
   console.log(titles);
});

