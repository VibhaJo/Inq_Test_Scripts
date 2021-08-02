// Verifying error message is generated if the syntax of the email is invalid.

// Assigning the test data array file to the declared constant
const testData = require("../../fixtures/EmailSyntaxData.json")

// For Each Loop will loop the test for each data-set.
testData.forEach((data) => {
     describe('EmailSyntaxValidaiton', () => {
        beforeEach(() => {
            cy.visit('https://www.inquisitive.com/signin')
        })

        it(`Email Syntax Validation - Test Email - ${data.email}`, () => {
            cy.get('[data-selector=sign-in-email]').type(data.email)
            cy.get('[data-selector=sign-in-password]').type(data.password)
            cy.get('[data-selector=sign-in-button]').click()
            cy.contains('Email address is not valid.').should('be.visible')
        })
    })
})