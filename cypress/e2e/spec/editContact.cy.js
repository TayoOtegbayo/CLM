///<reference types='cypress'/>

import { EditContactPage } from "../pages/editContact.page";
import { LoginPage } from "../pages/login.page";
describe("template spec", () => {
  beforeEach(() => {
    LoginPage.launchURL();
    LoginPage.login(userEmail, password);
    LoginPage.pathName().should("equal", "/contactList");
  });

  const userEmail = Cypress.env("userEmail");
  const password = Cypress.env("password");

  it("Verify a user can edit a contact", () => {
    EditContactPage.selectContact();
    EditContactPage.confirmPage().should("eq", "/contactList");
    EditContactPage.selectContact().click();
    EditContactPage.editContact().click();
    EditContactPage.editFirstName().clear().type("Gracias");
    EditContactPage.clkSubmit();
    EditContactPage.confirmPage().should("eq", "/contactDetails");
    EditContactPage.clkReturn().click();
    LoginPage.pathName().should("equal", "/contactList");
  });
});
