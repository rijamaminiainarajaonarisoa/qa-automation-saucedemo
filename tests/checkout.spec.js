import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';
import { ProductsPage } from '../pages/ProductsPage';
import { CartPage } from '../pages/CartPage';
import { CheckoutPage } from '../pages/CheckoutPage';

test('Checkout avec succès', async ({ page }) => {
  const login = new LoginPage(page);
  const products = new ProductsPage(page);
  const cart = new CartPage(page);
  const checkout = new CheckoutPage(page);

  await login.open();
  await login.login('standard_user', 'secret_sauce');

  await products.addProductToCart();
  await products.goToCart();
  await cart.checkout();

  await checkout.fillInformation();
  await checkout.finishOrder();

  await expect(await checkout.getSuccessMessage())
    .toHaveText('Thank you for your order!');
});
