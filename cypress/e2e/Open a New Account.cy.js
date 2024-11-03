describe('Open New Account', () => {
  before(() => {
    cy.login('Test', 'test123');
  });

  it('should open a new account', () => {
    cy.visit('/openaccount.htm');

    cy.get('#type').select('SAVINGS');;

    cy.get('input[value="Open New Account"]').click();

    cy.contains('Congratulations, your new account is now open.');
  });
});
