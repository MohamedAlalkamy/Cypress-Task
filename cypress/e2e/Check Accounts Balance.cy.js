describe('Account Balance Check', () => {
  before (() => {
    cy.login('Test', 'test123');
  });

  it('should display account balance', () => {
    cy.visit('/overview.htm');

    cy.contains('Total Balance').should('be.visible');
    cy.get('.balance').then($balance => {
      const balance = $balance.text();
      expect(parseFloat(balance)).to.be.greaterThan(0);
    });
  });
});
