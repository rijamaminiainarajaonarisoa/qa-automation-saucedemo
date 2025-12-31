import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';
import { ProductsPage } from '../pages/ProductsPage';
import { CartPage } from '../pages/CartPage';

test('Ajouter un produit au panier', async ({ page }) => {
  const login = new LoginPage(page);
  const products = new ProductsPage(page);
  const cart = new CartPage(page);

  await login.open();
  await login.login('standard_user', 'secret_sauce');

  await products.addProductToCart();
  await products.goToCart();

  await expect(cart.getProductName()).toBeVisible();
});
