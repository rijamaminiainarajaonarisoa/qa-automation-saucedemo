export class ProductsPage {
  constructor(page) {
    this.page = page;
    this.addBackpack = '#add-to-cart-sauce-labs-backpack';
    this.cartIcon = '.shopping_cart_link';
  }

  async addProductToCart() {
    await this.page.click(this.addBackpack);
  }

  async goToCart() {
    await this.page.click(this.cartIcon);
  }
}
