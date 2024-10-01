// @ts-check
const { test, expect } = require('@playwright/test');

test('Realizando login Inválido', async ({ page }) => {
  await page.goto('https://poster-store.pages.dev/#');

  await page.locator('a[id="signup-button"]').click();

  await page.locator('input[id="swal-username"]').fill('lane');

  await page.locator('input[id="swal-password"]').fill('gilmore girls');

  await page.locator('button[class="swal2-confirm swal2-styled"]').click();

  await page.waitForSelector("text='User created successfully'");
});