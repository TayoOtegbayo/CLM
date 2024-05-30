import { LoginPage } from "../pages/login.page";

describe("Login spec", () => {
  const errorMessage = "Incorrect username or password";

  it("Valid login", () => {
    const userEmail = Cypress.env("userEmail");
    const password = Cypress.env("password");
    expect(userEmail, "userEmail was set").to.be.a("string").and.not.be.empty;
    expect(password, "password was set").to.be.a("string").and.not.be.empty;

    LoginPage.launchURL()
    LoginPage.login(userEmail, password);
    LoginPage.pathName().should("equal", "/contactList");
  });

  
  it("Invalid login", () => {
    const userEmail = Cypress.env("userEmail");
    const password = Cypress.env("invalidPassword");
    expect(userEmail, "userEmail was set").to.be.a("string").and.not.be.empty;
    expect(password, "password was set").to.be.a("string").and.not.be.empty;

    LoginPage.launchURL()
    LoginPage.login(userEmail, password);
    LoginPage.errorMessage().each(($tr) => {
      cy.wrap($tr)
        .should("have.id", "error")
        .and("contain", errorMessage)
        .invoke("text");
      LoginPage.pathName().should("equal", "/");
    });
  });
});
