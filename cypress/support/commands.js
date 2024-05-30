import { LoginPage } from "../e2e/pages/login.page";
// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --

//

Cypress.Commands.add("login", (userEmail, password) => {
  cy.session(
    `user ${userEmail} login`,
    () => {
      cy.log("**log in**");
      cy.visit("/");
      LoginPage.getUserEmail().type(userEmail);
      // hide the password from the Console Log
      LoginPage.getPasssword().type(password, { log: false });
      LoginPage.getLogin().click();
      cy.location("pathname").should("equal", "/contactList");
    },
    {
      validate() {
        cy.log("**validate login session");
        // try visiting the page and
        // confirm the browser stays at /contactList
        cy.visit("/contactList");
        cy.location("pathname").should("eq", "/contactList");
      },
    }
  );
});
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })login(userEmail, password) {
