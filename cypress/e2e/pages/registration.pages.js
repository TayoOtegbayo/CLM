export const RegistrationPage = {
  launchURL(){
    return cy.visit("/");
  },
  signUp() {
    return cy.get('button[id="signup"]');
  },
  addUser() {
    return cy.get("#add-user");
  },
  firstName() {
    return cy.get("input[id='firstName']");
  },
  lastName() {
    return cy.get("input[id='lastName']");
  },
  email() {
    return cy.get("input[id='email']");
  },
  password() {
    return cy.get("input[id='password']");
  },
  submit() {
    return cy.get("#submit");
  },
  homePage() {
    return cy.get(".main-content > :nth-child(2)");
  },
  errorMessage() {
    return cy.get("span#error");
  },
};
