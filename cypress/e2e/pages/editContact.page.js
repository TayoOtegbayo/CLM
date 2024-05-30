export const EditContactPage = {
  selectContact() {
    return cy.get(":nth-child(3) > :nth-child(2)");
  },
  confirmPage() {
    return cy.location("pathname");
  },
  editContact() {
    return cy.get("#edit-contact");
  },
  editFirstName() {
    return cy.get('input[id="firstName"]');
  },
  clkSubmit() {
    return cy.get("#submit").click();
  },
  clkReturn() {
    return cy.get("#return");
  },
};
