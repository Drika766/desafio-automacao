🚀 Desafio de Automação de Testes
Este repositório contém a implementação do desafio de automação de testes utilizando Cypress para testes de front-end e API REST.

📌 Tecnologias Utilizadas
Cypress: Framework de testes end-to-end.
JavaScript: Linguagem utilizada na implementação dos testes.
GitHub API: Para validação de testes na API REST.
📂 Estrutura do Projeto
📁 desafio-automacao  
 ├── 📁 cypress  
 │   ├── 📁 e2e  
 │   │   ├── conheca_historia.feature  
 │   │   ├── saiba_mais.feature  
 │   │   ├── github_api.spec.js  
 │   ├── 📄 cypress.config.js  
 ├── 📄 package.json  
 ├── 📄 package-lock.json  
 ├── 📄 .gitignore  
 ├── 📄 README.md  

🛠️ Configuração do Ambiente
Pré-requisitos
Node.js instalado 
Git instalado
Navegador compatível (Chrome, Edge, Firefox)
Instalação

Clone o repositório:
git clone https://github.com/Drika766/desafio-automacao.git

Acesse a pasta do projeto:
cd desafio-automacao
Instale as dependências:
npm install

▶️ Executando os Testes
Front-end (Testes na NEXDOM)
Para rodar os testes no modo interativo:

npx cypress open
Em seguida, selecione um dos testes e clique em Run.

Para rodar os testes no terminal:
npx cypress run
API (Testes na GitHub API)
Certifique-se de configurar um Personal Access Token (PAT) do GitHub.


Execute os testes da API com:
npx cypress run --spec cypress/e2e/github_api.spec.js
📜 Cenários de Testes Implementados
🔹 Front-end (Site NEXDOM)
✅ Acessar a página "Conheça nossa história" e validar o conteúdo.
✅ Acessar a página "Saiba mais" e validar a exibição correta das informações.

🔹 API REST (GitHub API)
✅ Criar um repositório no GitHub via API.
✅ Consultar o repositório recém-criado.
✅ Criar e consultar uma issue no repositório.
✅ Excluir o repositório via API.
✅ Confirmar que o repositório foi removido.

Adriana
📧 adrianadefatimamartins30@gmail.com
🔗 https://www.linkedin.com/in/adriana-de-f%C3%A1tima-martins-6903a538/
