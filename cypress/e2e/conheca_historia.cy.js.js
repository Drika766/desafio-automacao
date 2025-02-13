describe('Teste do botão "Conheça nossa história"', () => {
    it('Deve clicar na setinha "Conheça nossa história"', () => {
        cy.visit('https://nexdom.tec.br/'); // Acessa o site
        cy.xpath('/html/body/div[2]/div[1]/div/div/div/div[3]/div/div/div/svg').click(); // Clica no botão
        
        // Adicione alguma verificação para garantir que a ação foi bem-sucedida
        cy.url().should('include', '/'); // Altere conforme o destino esperado
    });
});
