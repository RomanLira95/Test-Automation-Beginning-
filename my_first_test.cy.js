/// <reference types="cypress" />



describe('Google search test', function() {

  it("Google page opens", function() {

  cy.visit('https://google.com')

  })

  it("Accept Cookies", function() {

  cy.get ('#L2AGLb > .QS5gu').click()

  })

  it("Naruto Shipudden search", function() {

  cy.get (".gLFyf").type("Naruto Sipudden{enter}")

  })
  
  it("Accept Cookies", function() {

  cy.get ('#L2AGLb > .QS5gu').click()
  
  })

  it("Click on correct search request", function() {

  cy.get ('#fprsl').click() 

  })
  
  it("Open Videos", function() {

  cy.get ('.MUFPAc > :nth-child(3) > a').click() 

  })

  it("Accept Cookies", function() {

  cy.get ('#L2AGLb > .QS5gu').click()
  
  })


})