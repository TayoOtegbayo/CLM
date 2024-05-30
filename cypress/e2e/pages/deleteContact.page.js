export const DeleteContact = {
  deleteFromContactList() {
    return cy.get("#delete");
  },
  confirmPage(){
    cy.location("pathname") //contactlistpage
  }
};
