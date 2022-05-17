import Page from '../page'

class AppPage extends Page {
  get addEmployeeButton() { return cy.get('[id="add"]') }
  get employeesTable() { return cy.get('[id="employeesTable"]')}
  get editButton() { return cy.get('.fa-edit.fas') }
  get deleteIconButton() { return cy.get('.fa-times.fas') }
  get deleteButton() { return cy.get('[id="deleteEmployee"]') }
  get inputFirstName() { return cy.get('[id="firstName"]') }
  get inputLastName() { return cy.get('[id="lastName"]') }
  get inputDependants() { return cy.get('[id="dependants"]') }
  get addButton() { return cy.get('[id="addEmployee"]') }
  get updateButton() { return cy.get('[id="updateEmployee"]') }
}

export default new AppPage()