# Tripleten web_project_around_express (API Back-End)

## Descrição do Projeto

Este é o projeto back-end para a aplicação "EUA Afora", desenvolvido com Node.js e Express. A API é responsável por servir dados mockados de usuários e cartões de fotos através de arquivos JSON, tratando rotas e lidando com erros de requisição de forma assíncrona.

## Funcionalidades

- **GET /users**: Retorna a lista com todos os usuários cadastrados.
- **GET /users/:id**: Retorna as informações de um usuário específico pelo seu ID único.
- **GET /cards**: Retorna a lista de cartões/lugares cadastrados.
- **Tratamento de Erros**: Respostas com códigos HTTP 404 para rotas ou IDs inexistentes e 500 para erros internos do servidor.

## Tecnologias e Técnicas Utilizadas

- **Node.js**: Ambiente de execução do JavaScript no servidor.
- **Express.js**: Framework para criação de rotas e gerenciamento do servidor HTTP.
- **Nodemon**: Ferramenta de Hot Reload para reinício automático do servidor em desenvolvimento.
- **ESLint (Configuração Airbnb)**: Padronização e qualidade de código.
- **EditorConfig**: Padronização da formatação entre editores de código.
- **Módulos Nativos Node.js (`fs` e `path`)**: Manipulação de arquivos do sistema de forma assíncrona.

## Como Executar o Projeto

1. Clone o repositório.
2. Instale as dependências com `npm install`.
3. Inicie o servidor em modo de desenvolvimento com `npm run dev`.
4. Acesse `http://localhost:3000` no seu navegador ou via Postman.
