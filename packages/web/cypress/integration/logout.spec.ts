/// <reference types="cypress"/>

describe('login', () => {
  before(() => {
    // LogIn
    cy.visit('http://localhost:3000');
    cy.get('[data-testid=login-button]').click();

    cy.get('[data-testid=register-form]').within(() => {
      cy.get('[name=email]').type('cypress2@test.de');
      cy.get('[name=password]').type('my-test-password');
    });
    cy.get('[data-testid=register-form]').submit();
    cy.get('[data-testid=logout-button]');
  });

  beforeEach(() => {
    Cypress.Cookies.preserveOnce('qid');
  });

  it('click logout button', () => {
    cy.visit('http://localhost:3000');
    cy.get('[data-testid=logout-button]').click();
    cy.get('[data-testid=login-button]');
  });
});
