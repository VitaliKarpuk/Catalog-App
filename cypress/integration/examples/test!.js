describe('My First Test', function() {
    it('firstTest', function() {
      cy.visit('https://weather.com/ru-BY/weather/today/l/BOXX0005:1:BO')
      cy.get('.styles__button__1Rnmk').eq(0).click({force: true})
      cy.contains('°F').click()

     
  
    })
  })
  