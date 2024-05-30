///<reference types='cypress'/>
import { ContactRegistrationPage } from "../pages/contactRegistration.page";
import { LoginPage } from "../pages/login.page";
describe("Contact Registration", () => {
  beforeEach(() => {
    ContactRegistrationPage.launchURL();
    LoginPage.login(userEmail, password);
    LoginPage.pathName().should("equal", "/contactList");
    ContactRegistrationPage.clkAddContact().click();
    LoginPage.pathName().should("equal", "/addContact");
  });

  const password = Cypress.env("password");
  const firstName = Cypress.env("firstName");
  const lastName = Cypress.env("lastName");
  const birthdate = Cypress.env("birthdate");
  const userEmail = Cypress.env("userEmail");
  const phone = Cypress.env("phone");
  const street1 = Cypress.env("street1");
  const street2 = Cypress.env("street2");
  const city = Cypress.env("city");
  const stateProvince = Cypress.env("stateProvince");
  const postalCode = Cypress.env("postalCode");
  const country = Cypress.env("country");

  expect(firstName, "first name was set").to.be.a("string").and.not.be.empty;
  expect(lastName, "last name was set").to.be.a("string").and.not.be.empty;
  it("Enter the contact value", () => {
    ContactRegistrationPage.ContactReg(
      firstName,
      lastName,
      birthdate,
      userEmail,
      phone,
      street1,
      street2,
      city,
      stateProvince,
      postalCode,
      country
    );
    ContactRegistrationPage.pathName().should("equal", "/contactList");
  });
});
