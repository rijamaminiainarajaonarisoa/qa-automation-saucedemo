import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';

test('Utilisateur valide peut se connecter', async ({ page }) => {
  const login = new LoginPage(page);

  await login.open();
  await login.login('standard_user', 'secret_sauce');

  await expect(page).toHaveURL(/inventory.html/);
});

test('Utilisateur bloqué ne peut pas se connecter', async ({ page }) => {
  const login = new LoginPage(page);

  await login.open();
  await login.login('locked_out_user', 'secret_sauce');

  await expect(page.locator(login.errorMessage)).toBeVisible();
});
