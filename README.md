Desafio Parte 1 - Testes de API com Cypress

Este projeto contém a automação de testes de API utilizando Cypress.
O objetivo é validar o fluxo de criação de usuário, autenticação, listagem de livros e associação de livros a um usuário na API pública DemoQA Book Store
.

Tecnologias utilizadas

Node.js

Cypress

Cenários implementados

Criar usuário – Criação dinâmica de um usuário com userName único.

Gerar token – Autenticação do usuário criado.

Autorizar usuário – Verifica se o usuário pode ser autorizado.

Listar livros – Consulta todos os livros disponíveis na API.

Adicionar livro 1 – Associa o livro com ISBN 9781449331818 ao usuário.

Adicionar livro 2 – Associa o livro com ISBN 9781593277574 ao usuário.

Verificar usuário com os livros escolhidos – Confirma que os livros foram associados corretamente ao usuário.

📂 Estrutura do projeto
📁 projeto-desafio-parte1
 ┣ 📁 cypress
 ┃ ┗ 📁 e2e
 ┃   ┗ desafio_parte1.cy.js
 ┣ 📄 cypress.config.js
 ┣ 📄 package.json
 ┣ 📄 README.md

Como executar o projeto
1. Clonar o repositório
git clone https://github.com/seu-usuario/projeto-desafio-parte1.git
cd projeto-desafio-parte1

2. Instalar dependências
npm install

3. Executar os testes

Modo interativo (abre a interface do Cypress):

npx cypress open


Modo headless (execução direto no terminal):

npx cypress run

Resultado esperado

Usuário criado com sucesso.

Token gerado e autorização confirmada.

Listagem de livros retornando dados.

Associação de 2 livros ao usuário.

Validação final confirmando que o usuário possui os livros escolhidos.

Autor: Kelvinho Play
Data: 2025
