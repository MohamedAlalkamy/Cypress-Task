describe('Register on Parabank', () => {
  it('should register a new user', () => {
    cy.visit('/register.htm');

    cy.get('#customer\\.firstName').type('John');
    cy.get('#customer\\.lastName').type('Doe');
    cy.get('#customer\\.address\\.street').type('123 Cypress Ave');
    cy.get('#customer\\.address\\.city').type('Cypress City');
    cy.get('#customer\\.address\\.state').type('CA');
    cy.get('#customer\\.address\\.zipCode').type('90210');
    cy.get('#customer\\.phoneNumber').type('1234567890');
    cy.get('#customer\\.ssn').type('123-45-6789');
    cy.get('#customer\\.username').type('Test');
    cy.get('#customer\\.password').type('test123');
    cy.get('#repeatedPassword').type('test123');

    cy.get('input[value="Register"]').click();

    cy.contains('Your account was created successfully. You are now logged in.');
  });
});
