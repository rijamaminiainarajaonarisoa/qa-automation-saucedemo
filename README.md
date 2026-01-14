# QA Automation – SauceDemo

## Présentation
Projet d'automatisation de tests pour le site [https://www.saucedemo.com](https://www.saucedemo.com) utilisant **Playwright** et le **Page Object Model**.

## Structure du projet

## Installation

1. Installer Node.js >= 18
2. Installer les dépendances :

```bash
npm install

## Exécution des tests
Pour lancer tous les tests :
Pour lancer un test spécifique : npx playwright test tests/product.spec.js

## Choix techniques
- **Page Object Model** pour séparer la logique des pages des tests
- **Assertions explicites** pour la robustesse
- Tests organisés par modules : login, produit, checkout

## Bonus
Il est possible d’intégrer ces tests dans un **pipeline CI/CD GitHub Actions** pour exécution automatique à chaque push.
