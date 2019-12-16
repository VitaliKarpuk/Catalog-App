describe('My First Test', function() {
  it('Gets, types and asserts', function() {
    cy.visit('https://weather.com/ru-BY/weather/today/l/BOXX0005:1:BO')
    cy.contains('Почасовой прогноз').click()
    cy.url().should('include', 'https://weather.com/ru-BY/weather/hourbyhour/l/4c9646cf867a989c5e642644562a0496c0d8c505fbe17103eef7cfde35009d07')

  })
})
