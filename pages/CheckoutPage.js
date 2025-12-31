export class CheckoutPage {
  constructor(page) {
    this.page = page;
    this.firstName = '#first-name';
    this.lastName = '#last-name';
    this.postalCode = '#postal-code';
    this.continueButton = '#continue';
    this.finishButton = '#finish';
    this.successMessage = '.complete-header';
  }

  async fillInformation() {
    await this.page.fill(this.firstName, 'John');
    await this.page.fill(this.lastName, 'Doe');
    await this.page.fill(this.postalCode, '75000');
    await this.page.click(this.continueButton);
  }

  async finishOrder() {
    await this.page.click(this.finishButton);
  }

  async getSuccessMessage() {
    return this.page.locator(this.successMessage);
  }
}
