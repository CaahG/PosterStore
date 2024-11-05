// @ts-check
const { test, expect } = require('@playwright/test');
//const { submitLogin } = require('../src/pages/login');

test('Realizando login Inválido', async ({ page }) => {
  await page.goto('https://poster-store.pages.dev/#');

  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle(/Poster Store/);

  await page.locator('a[id="login-button"]').click();

  await page.locator('input[id="swal-username"]').fill('user1');

  await page.locator('input[id="swal-password"]').fill('kspass1');

  await page.locator('button[class="swal2-confirm swal2-styled"]').click();
 
  await expect(page.locator('text="Invalid username or password"')).toBeVisible();

});

//test('Realizando Login com Sucesso', async ({ page }) => {
  ///await page.goto('https://poster-store.pages.dev/#');
  // Expect a title "to contain" a substring.
  ///await expect(page).toHaveTitle(/Poster Store/);
  ///await submitLogin(page);
  ///await page.waitForSelector('text="Logged in successfully"')
//});




