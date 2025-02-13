describe('Teste do botão Saiba Mais', () => {
  beforeEach(() => {
    cy.visit('https://nexdom.tec.br/');
  });

  it('Clica no botão Saiba Mais', () => {
    cy.xpath('/html/body/div[2]/div[1]/div/div/div/div[3]/div/div/a').click();
    
    // Adiciona uma verificação para garantir que a navegação ocorreu corretamente
    cy.url().should('include', 'saiba-mais'); // Altere conforme necessário
  });
});
