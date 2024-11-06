// @ts-check
const { test, expect } = require("@playwright/test");

test("adicionando produto ao carrinho", async ({ page }) => {
  await page.goto("https://poster-store.pages.dev/#");

  // Espera que o título contenha "Poster Store"
  await expect(page).toHaveTitle(/Poster Store/);
 // Clica no botão de loginn
  await page.locator('a[id="login-button"]').click();
  //Elemento de campo de usuário
  await page.locator('input[id="swal-username"]').fill("user1");
  //elemento campo de senha
  await page.locator('input[id="swal-password"]').fill("pass1");
  //elemento do botão de login
  await page.locator('button[class="swal2-confirm swal2-styled"]').click();
  //elemento esperar por seletor com mensagem desejada
  await page.waitForSelector(':has-text("Logged in successfully")');
  //elemento botão de confirmação
  await page.locator('button[class="swal2-confirm swal2-styled"]').click();
  //// Localiza um elemento 'div' que contém a classe CSS
  // garantindo que o texto "Starry Night" e esse filtro ajuda a identificar o cartão correto.
  //elemento que localiza o botao dentro dessee cartão que possui as classes e tendo um click
  // Esse clique provavelmente aciona alguma ação específica, como adicionar o item ao carrinho ou abrir uma visualização mais detalhada do cartão. o mesmo com os localizador abaixo
  await page
    .locator(
      'div[class="card shadow-md hover:shadow-lg transition-shadow duration-300 animate__animated animate__fadeInUp"]',
      { hasText: "Starry Night" }
    )
    .locator('button[class="btn btn-primary btn-sm mt-4 w-full"]')
    .click();
  await page
    .locator(
      'div[class="card shadow-md hover:shadow-lg transition-shadow duration-300 animate__animated animate__fadeInUp"]',
      { hasText: "Tropical Paradise" }
    )
    .locator('button[class="btn btn-primary btn-sm mt-4 w-full"]')
    .click();
  //// Aguarda 5000  (5 segundos) antes de continuar com a execução do código
  await page.waitForTimeout(5000);
});
