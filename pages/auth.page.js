import Page from './page'

class AuthPage extends Page {
  get inputUsername() { return cy.get('#Username') }
  get inputPassword() { return cy.get('#Password') }
  get loginButton() { return cy.get('.btn-primary') }

  open() {
    return super.open('/Prod/Account/LogIn')
  }

}

export default new AuthPage()