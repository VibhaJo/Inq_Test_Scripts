// Checking for Scenario 2 - Verifying URL has changed and modal window is present.
describe('TestForScenario-2', () => {

    beforeEach(() => {
        cy.visit('https://www.inquisitive.com')
        cy.get('[data-selector=btn-join-inquisitive]').click()

    })

// Test to check Modal is present
    it('CheckforJoinModal', () => {

        cy.get('[data-selector=react-modal-window]').should('be.visible')
    })

// Test to check URL is updated
    it('CheckforURLUpdate', () => {

        cy.url().should('not.eq', 'https://www.inquisitive.com')
    })
})

