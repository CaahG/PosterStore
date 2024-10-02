// @ts-check
const { test, expect } = require('@playwright/test');

test('Realizando Logout', async ({ page }) => {
    await page.goto('https://poster-store.pages.dev/#');

    // Expect a title "to contain" a substring.
    await expect(page).toHaveTitle(/Poster Store/);

    await page.locator('a[id="login-button"]').click();

    await page.locator('input[id="swal-username"]').fill('user1');

    await page.locator('input[id="swal-password"]').fill('pass1');

    await page.locator('button[class="swal2-confirm swal2-styled"]').click();

    await page.waitForSelector('text="Logged in successfully"');

    await page.click('button[class="swal2-confirm swal2-styled"]', { timeout: 5_000 })
    // await page.locator('a[class="swal2-confirm swal2-styled"]').click();

    await page.locator('a[class="btn btn-outline btn-sm"]').click()

    await page.waitForSelector('text="Logged out successfully"');

    await page.locator('button[class="swal2-confirm swal2-styled"]').click();

});
