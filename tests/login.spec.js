// @ts-check
const { test, expect } = require('@playwright/test');

test('Realizando login Inválido', async ({ page }) => {
  await page.goto('https://poster-store.pages.dev/#');

  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle(/Poster Store/);

  await page.locator('a[id="login-button"]').click();

  await page.locator('input[id="swal-username"]').fill('user1');

  await page.locator('input[id="swal-password"]').fill('ksdpass1');

  await page.locator('button[class="swal2-confirm swal2-styled"]').click();
 
  await page.waitForSelector('text="Invalid username or password"')
});

test('Realizando Login com Sucesso', async ({ page }) => {
  await page.goto('https://poster-store.pages.dev/#');

  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle(/Poster Store/);

  await page.locator('a[id="login-button"]').click();

  await page.locator('input[id="swal-username"]').fill('user1');

  await page.locator('input[id="swal-password"]').fill('pass1');

  await page.locator('button[class="swal2-confirm swal2-styled"]').click();
 
  await page.waitForSelector('text="Logged in successfully"')
});




