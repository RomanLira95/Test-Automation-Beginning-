/// <reference types="cypress" />

///This is a login test case made for the reqruitment task purposes.

///It is a Positive Test Case verifying if User is able to log in with valid credentials. 

describe('Paymi Login Test', () => {

  it('Verify if User will be able to log in with a valid username and password', () => {
    
    cy.visit('https://staging.paymi.com/.')
  
    cy.get("#user_email").type("viper9732@gmail.com")
    
    cy.get("#user_password").type("12345Ff!")
    
    cy.get("#log_in").click()
  })

})
