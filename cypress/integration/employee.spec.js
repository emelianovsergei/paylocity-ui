import authPage from '../../pages/auth.page'
import appPage from '../../pages/app/app.page'

before(function() {
  authPage.open()
  authPage.inputUsername.type(Cypress.env('username'))
  authPage.inputPassword.type(Cypress.env('password'))
  authPage.loginButton.click()
})

beforeEach(function() {
  Cypress.Cookies.preserveOnce('.AspNetCore.Cookies', '.AspNetCore.Antiforgery.AsW4q1BB7-Y')
})


describe('Add Employee', function() {

  it('successful log in', function() {
    cy.url().should('include', '/Prod/Benefits')
  })

  it('add employee', function() {
    cy.intercept('POST', '/Prod/api/employees')
      .as('Employee')

    appPage.addEmployeeButton.click()
    appPage.inputFirstName.type('Jay')
    appPage.inputLastName.type('Moriarity')
    appPage.inputDependants.type(`${Math.floor(Math.random() * 32)}`)
    appPage.addButton.click()

    cy.wait('@Employee')
      .then((interception) => {
        cy.get('[id="employeesTable"]')
          .should('include.text', interception.response.body.id)
      })
  })
})

describe('Edit Employee', function() {

  it('change first and last name of employee', function() {
    cy.intercept('PUT', '/Prod/api/employees')
      .as('EmployeeUpdate')

    appPage.editButton.click()
    appPage.inputFirstName.clear().type('John')
    appPage.inputLastName.clear().type('Smith')
    appPage.updateButton.click()

    cy.wait('@EmployeeUpdate')
      .then((interception) => {
        cy.get('[id="employeesTable"]')
          .should('include.text', interception.response.body.id)
          .should('include.text','John')
          .should('include.text','Smith')
      })
  })
})

describe('Deleting Employee', function() {

  it('deleting employee', function() {

    appPage.deleteIconButton.click()
    appPage.deleteButton.click()
      appPage.employeesTable.should('include.text', 'No employees found.')
  })
})
