describe('Vote page navigation', () => {
    Cypress._.times(5, (k) => {
        it('Visits the votepage of our app', () => {
            cy.visit('http://localhost:3000/')
          cy.get("img").should('have.length', 2).should('have.attr','src').should('not.be.empty')
          cy.get("p").eq(0).should('not.be.empty')
          cy.get("p").eq(2).should('not.be.empty')
        })
    })
    
    it('clicks the first image to vote', () => {
        cy.visit('http://localhost:3000/')
        cy.wait(1000)
        cy.get("img").eq(0).click()
        cy.wait(1000)
        cy.get("img").eq(1).click()
    })
    
  })
  
  describe('Leaderboard page navigation', () => {
    Cypress._.times(5, (k) => {
        it('Visits the leaderboard of our app', () => {
            cy.visit('http://localhost:3000/')
          cy.get('a').eq(1).click()
          cy.contains('Leaderboard Page')
         
        })
    })

    
  })