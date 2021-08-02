
// Checking for Scenario 3 - Verifying that clicking on 'Page 2’ of  the 'Lesson pages’ document causes a modal to pop up. 

describe('TestForScenario-3', () => {

    it('CheckForModalPopup', () => {

        cy.visit('https://www.inquisitive.com/lesson/62-mapping')
        cy.get('[data-selector=worksheet]').eq(1).scrollIntoView().click()
        cy.get('[data-selector=react-modal-window]').should('be.visible')
    })
})