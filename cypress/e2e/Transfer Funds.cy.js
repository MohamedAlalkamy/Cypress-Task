describe('Transfer Funds', () => {
  before(() => {
    cy.login('Test', 'test123');
  });

  it('should transfer funds between accounts', () => {
    cy.visit('/transfer.htm');

    cy.get('#amount').type('100');
    cy.get('#fromAccountId').select('12345'); // Replace with actual account ID
    cy.get('#toAccountId').select('67890'); // Replace with actual account ID
    cy.get('input[type="submit"]').click();

    cy.contains('You successfully transferred $100.00');
  });
});
