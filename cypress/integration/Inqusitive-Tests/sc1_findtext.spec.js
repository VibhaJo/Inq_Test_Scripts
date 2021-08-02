describe('TestForScenario-1', () => {
    
// Checking for Scenario 1 - Verifying the Text 'Inquisitive Differentiation' is present.
    it('CheckforText-InqDiff', () => {
        cy.visit('https://www.inquisitive.com/about')
        cy.contains('Inquisitive Differentiation').scrollIntoView().should('be.visible')
    })  
})