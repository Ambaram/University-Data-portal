/// <reference types="cypress" />

describe("Hello worls", () => {
    it("Profiles rendered", () => {
        cy.visit('http://localhost:3000')
    })

    it("Search button hidden", () => {
        cy.visit('http://localhost:3000')
        cy.get('.No-input')
    })
    it("Grades expansion button collapsed", () => {
        cy.visit('http://localhost:3000')
        cy.get('.Button').contains('+')
    })

    it("search field and tag input field exists", () => {
        cy.visit('http://localhost:3000')
        cy.get('input').get('.Profile-tag')
    })

    it("Grades are hidden", () => {
        cy.visit("http://localhost:3000")
        cy.get('.Profile-grades')
    })

    it("Tag getting added", () => {
        cy.visit("http://localhost:3000")
        cy.get(".Tag-names").should('not.exist')
    })
})