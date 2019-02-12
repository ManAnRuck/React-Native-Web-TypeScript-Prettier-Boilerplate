/// <reference types="cypress"/>

describe('open Website', () => {
  it('open webpage', () => {
    cy.visit('http://localhost:3000');
    cy.visit('http://localhost:3000/work');
    cy.visit('http://localhost:3000/company');
  });
});
