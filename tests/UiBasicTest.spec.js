import { test,expect } from '@playwright/test';

test.skip('Test Basic Playwright script',async ({page})=>
{
//    const context =  await browser.newContext();
//     const page = await context.newPage();
   const userName = page.locator("#username") ;
   const signIn = page.locator('#signInBtn');
   const cardTitles = page.locator('.card-body a');
   await page.goto("https://rahulshettyacademy.com/loginpagePractise/");

   console.log( await page.title());
   await expect(page).toHaveTitle('LoginPage Practise | Rahul Shetty Academy')
   await page.locator('input#username').fill('rahulshetty');
   await page.locator('input#password').fill('Learning@830$3mK2');
   await signIn.click();
   let errorMsg = await page.locator("[style*='block']").textContent();
   console.log( errorMsg);
   await expect(await page.locator("[style*='block']")).toContainText('Incorrect');
   await userName.fill("");
   await userName.fill("rahulshettyacademy");
   await signIn.click();
   console.log(await cardTitles.nth(0).textContent());
   console.log(await cardTitles.first().textContent());
   console.log(await cardTitles.allTextContents())
});

