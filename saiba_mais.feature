Feature: Acessar a página "Saiba mais"

  Scenario: Clicar no botão "Saiba mais"
    Given que estou na página inicial da Nexdom
    When eu clico no botão "Saiba mais" com a classe "elementor-button-text"
    Then sou redirecionado para a página correspondente
