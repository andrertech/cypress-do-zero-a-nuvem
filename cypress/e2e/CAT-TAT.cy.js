
  describe('Central de Atendimento ao Cliente TAT', () => {
    beforeEach(() => {
      cy.visit('./src/index.html')
    })
    
  it('Verifica o título da aplicação', () => {
    cy.title().should('be.equal', 'Central de Atendimento ao Cliente TAT')
  })

  it('Preenche os campos obrigatórios e envia o formulário', () => {
    const longText = Cypress._.repeat('abcdefghijklmnopqrstuvwxyz', 10)

    cy.get('#firstName').type('Bryan')
    cy.get('#lastName').type('Whitaker White')
    cy.get('#email').type('bww@gmail.com')
    cy.get('#open-text-area').type(longText, {delay: 0})
    cy.get('button[type="submit"]').click()

    cy.get('.success').should('be.visible')
  })

  it('Exibe mensagem de erro ao submeter o formulário com um email com formatação inválida',() => {
    cy.get('#firstName').type('Bryan')
    cy.get('#lastName').type('Whitaker White')
    cy.get('#email').type('bww@gmail,com')
    cy.get('#open-text-area').type('teste')
    cy.get('button[type="submit"]').click()

    cy.get('.error').should('be.visible')
  })

  it.only('Campo telefone continua vazio quando preenchido com um valor não-númerico',() => {
    cy.get('#phone')
      .type('abcde')
      .should('have.value','')
  })

})
