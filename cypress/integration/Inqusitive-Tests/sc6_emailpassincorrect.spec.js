// Verifying the Error message is generated when incorrect email or password is entered.
// Data set consists of sets of unregistered email-passwords.

// Assigning the test data array file to the declared constant
const testData = require("../../fixtures/EmailPassNotRegData.json")

// For Each Loop will loop the test for each data-set.
testData.forEach((data) => {
    describe('EmailPasswordIncorrect', () => {
       beforeEach(() => {
           cy.visit('https://www.inquisitive.com/signin')
       })


        it(`Check for Incorrect Email or Password for Data - ${data.name}`, () => {

            cy.get('[data-selector=sign-in-email]').type(data.email)
            cy.get('[data-selector=sign-in-password]').type(data.password)
            cy.get('[data-selector=sign-in-button]').click()
            cy.contains('Email or password is incorrect').should('be.visible')
        })
    })
})
