///<reference types='cypress'/>

import { RegistrationPage } from "../pages/registration.pages";
describe("template spec", () => {
  beforeEach(() => {
    RegistrationPage.launchURL();
    RegistrationPage.signUp().should("be.visible").click();
    cy.location("pathname").should("eq", "/addUser");
  });

  const userFirstName = Cypress.env("firstName");
  const userLastName = Cypress.env("lastName");
  const userEmail = Cypress.env("email");
  const UserPassword = Cypress.env("password");
  const contactText = "Click on any contact to view the Contact Details";

  function enterUserDetail(FirstName, lastName, email, password) {
    RegistrationPage.addUser().within(() => {
      //cy.get("input[id='customer.firstName']").should("have.prop", "value").type(Cypress.env("firstName"));
      RegistrationPage.firstName().type(FirstName);
      RegistrationPage.lastName().type(lastName);
      RegistrationPage.email().type(email);
      RegistrationPage.password().type(password);
    });
    RegistrationPage.submit().should("have.attr", "type", "submit").click();
  }
  it("Verify a valid registration of user", () => {
    enterUserDetail(userFirstName, userLastName, userEmail, UserPassword);
    RegistrationPage.homePage().invoke("text").should("include", contactText);
  });

  it("Verify that a user cannot submit when there's an error", () => {
    enterUserDetail(userFirstName, userLastName, userEmail, UserPassword);
    RegistrationPage.errorMessage().each(($tr) => {
      cy.wrap($tr)
        .should("have.id", "error")
        .and("contain", "User validation failed")
        .invoke("text");
      cy.location("pathname").should("equal", "/addUser");
    });
  });
});
