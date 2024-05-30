export const ContactRegistrationPage = {
  launchURL() {
    return cy.visit("/");
  },
  clkAddContact() {
    return cy.get('button[id="add-contact"]');
  },
  pathName() {
    return cy.location("pathname");
  },
  ContactReg(
    firstName,
    lastName,
    birthdate,
    email,
    phone,
    street1,
    street2,
    city,
    stateProvince,
    postalCode,
    country
  ) {
    cy.get(".main-content").within(() => {
      cy.get('input[id="firstName"]').type(firstName);
      cy.get('input[id="lastName"]').type(lastName);
      cy.get('input[id="birthdate"]').type(birthdate);
      cy.get('input[id="email"]').type(email);
      cy.get('input[id="phone"]').type(phone);
      cy.get('input[id="street1"]').type(street1);
      cy.get('input[id="street2"]').type(street2);
      cy.get('input[id="city"]').type(city);
      cy.get('input[id="stateProvince"]').type(stateProvince);
      cy.get('input[id="postalCode"]').type(postalCode);
      cy.get('input[id="country"]').type(country);
      cy.get('button[id="submit"]').click();
    });
  },
};
