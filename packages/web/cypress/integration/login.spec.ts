/// <reference types="cypress"/>

describe('login', () => {
  it('click login button', () => {
    cy.visit('http://localhost:3000');
    cy.get('[data-testid=login-button]').click();

    cy.get('[data-testid=register-form]').within(() => {
      cy.get('[name=email]').type('cypress@test.de');
      cy.get('[name=password]').type('my-test-password');
    });
    cy.get('[data-testid=register-form]').submit();
  });
});
