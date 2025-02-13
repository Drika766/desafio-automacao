describe('Teste do botão "Saiba mais"', () => {
    it('Deve clicar no botão "Saiba mais"', () => {
        cy.visit('https://nexdom.tec.br/'); // Acessa o site
        cy.get('.elementor-button-text').click(); // Clica no botão "Saiba mais"
        
        // Adicione alguma verificação para garantir que a ação foi bem-sucedida
        cy.url().should('include', '/'); // Altere conforme o destino esperado
    });
});
