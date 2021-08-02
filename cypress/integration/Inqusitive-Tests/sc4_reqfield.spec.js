// Checking for Scenario 4 - Required Field Validation - Email and Password

describe('RequiredFieldValidation', () => {

    
    beforeEach(() => {
        cy.visit('https://www.inquisitive.com/signin')

    })

    // Checking error message is visible when sign in button is clicked without entering email ID.
    it('SignInEmailRequired', () => {

        cy.get('[data-selector=sign-in-password]').type('abc')
        cy.get('[data-selector=sign-in-button]').click()
        cy.contains('Email is required.').should('be.visible')
    })

     // Checking error message is visible when sign in button is clicked without entering password.
    it('SignInPasswordRequired', () => {

        cy.get('[data-selector=sign-in-email]').type('abc@xyz.com')
        cy.get('[data-selector=sign-in-button]').click()
        cy.contains('Password is required.').should('be.visible')
    })
})
