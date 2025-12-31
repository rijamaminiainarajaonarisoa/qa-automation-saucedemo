export class CartPage {
  constructor(page) {
    this.page = page;
    this.productName = '.inventory_item_name';
    this.checkoutButton = '#checkout';
  }

  getProductName() {
    return this.page.locator(this.productName);
  }

  async checkout() {
    await this.page.click(this.checkoutButton);
  }
}
