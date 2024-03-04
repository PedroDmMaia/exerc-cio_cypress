/// <reference types="cypress" />

describe('Testes para a lista de contatos', () => {
    beforeEach(() => {
        cy.visit('https://agenda-contatos-react.vercel.app/')
    })

    it('deve adicionar um contato', () => {
        cy.get('[type="text"]').type('Pedro Maia')
        cy.get('[type="email"]').type('pedrodelmonico@teste.com')
        cy.get('[type="tel"]').type(1136528720)
        cy.get('.adicionar').click()
    })

    it('deve alterar o nome, email e telefone', () => {
        cy.get('.contato').last().find('.sc-gueYoa > .edit').click()
        cy.get('[type="text"]').clear()
        cy.get('[type="email"]').clear()
        cy.get('[type="tel"]').clear()
        cy.get('[type="text"]').type('Pedro henrique')
        cy.get('[type="email"]').type('pedrohenrique@teste.com')
        cy.get('[type="tel"]').type(1136859420)
        cy.get('.alterar').click()
    })
    
    it('remover contato', () => {
        cy.get('.contato:last-child > .sc-gueYoa > .delete').click()
    })
})