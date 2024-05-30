///<reference types='cypress'/>
export const LoginPage = {
  launchURL() {
    return cy.visit("/");
  },
  mainContentForm() {
    return cy.get(".main-content");
  },
  email() {
    return cy.get('input[id="email"]');
  },
  password() {
    return cy.get('input[id="password"]');
  },
  loginBtn() {
    return cy.get('button[id="submit"]');
  },
  pathName() {
    return cy.location("pathname");
  },
  errorMessage() {
    return cy.get("span#error");
  },
  getLogin() {
    return cy.get('input[value="Log In"]');
  },
  login(email, password) {
    cy.get(".main-content").within(() => {
      cy.get('input[id="email"]').type(email);
      cy.get('input[id="password"]').type(password);
      cy.get('button[id="submit"]').click();
    });
  },
};
