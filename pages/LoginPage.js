export class LoginPage {
  constructor(page) {
    this.page = page;
    this.username = '#user-name';
    this.password = '#password';
    this.loginButton = '#login-button';
    this.errorMessage = '[data-test="error"]';
  }

  async open() {
    await this.page.goto('https://www.saucedemo.com');
  }

  async login(user, password) {
    await this.page.fill(this.username, user);
    await this.page.fill(this.password, password);
    await this.page.click(this.loginButton);
  }
}
