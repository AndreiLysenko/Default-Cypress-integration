/// <reference types = 'Cypress'/>

describe('test describe', ()=> {
    it('test',()=>{
        cy.visit('https://en.wikipedia.org/wiki/JavaScript')
        cy.get('h1#firstHeading').contains('JavaScript')
    })
})