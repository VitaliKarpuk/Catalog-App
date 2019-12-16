describe('My First Test', function() {
    it('Third Test', function() {
      cy.visit('https://weather.com/de-DE/')
      cy.get('.input__inputElement__1GjGE')
      .type('Das Wetter in...')
      .should('have.value', 'Das Wetter in...')
    })
  })
  