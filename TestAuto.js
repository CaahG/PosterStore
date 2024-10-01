const { test, expect } = require('@playwright/test');

test('busca no Google e verifica resultados', async ({ page }) => {
  // Acessar o Google
  await page.goto('https://www.google.com');

 