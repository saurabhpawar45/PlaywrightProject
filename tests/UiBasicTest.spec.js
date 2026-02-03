import { test } from '@playwright/test';

test('Test Basic Playwright script',async ({page})=>
{
//    const context =  await browser.newContext();
//     const page = await context.newPage();
   await page.goto("https://www.cricbuzz.com/");
});
