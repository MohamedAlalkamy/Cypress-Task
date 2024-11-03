describe('Login to Parabank', () => {
  it('should login with valid credentials', () => {
    cy.visit('/index.htm');

    cy.get('input[name="username"]').type('Test');
    cy.get('input[name="password"]').type('test123');
    cy.get('input[value="Log In"]').click();

    cy.contains('Accounts Overview');
  });
});
