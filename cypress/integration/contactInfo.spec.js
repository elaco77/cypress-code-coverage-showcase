/// <reference types="Cypress" />

context('Contact info panel', () => {
  it('shows correct data', () => {
    cy.visit('http://localhost:3000/customerlist')
      
      .get('[data-cy="aut-b-view-1"]').click()
      .get('.panel-title')
      .should('contain', 'John Smith')

      .get('[data-cy="aut-b-view-2"]').click()
      .get('.panel-title')
      .should('contain', 'ABCD')

      .get('[data-cy="aut-b-view-3"]').click()
      .get('[data-cy="aut-l-title"]')
      .should('contain', 'Tyrion')
  })
})