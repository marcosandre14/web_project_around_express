# Tripleten web_project_around_express (API Back-End)

## Descrição do Projeto

Este é o projeto back-end para a aplicação "EUA Afora", desenvolvido com Node.js, Express e MongoDB. A API fornece um ecossistema completo de persistência de dados para utilizadores e cartões de fotos, seguindo estritamente a arquitetura MVC (Model-View-Controller) e as boas práticas de desenvolvimento de software.

## Funcionalidades Principais

- **Utilizadores:**
  - `GET /users`: Retorna a lista de todos os utilizadores.
  - `GET /users/:userId`: Retorna um utilizador específico pelo ID.
  - `POST /users`: Cria um novo utilizador com validações de esquema.
  - `PATCH /users/me`: Atualiza o perfil do utilizador (nome e descrição).
  - `PATCH /users/me/avatar`: Atualiza o avatar do utilizador.

- **Cartões:**
  - `GET /cards`: Retorna todos os cartões cadastrados (populando os dados do proprietário).
  - `POST /cards`: Cria um novo cartão associado a um proprietário.
  - `DELETE /cards/:cardId`: Remove um cartão pelo ID.
  - `PUT /cards/:cardId/likes`: Adiciona uma curtida num cartão (com operador `$addToSet`).
  - `DELETE /cards/:cardId/likes`: Remove uma curtida de um cartão (com operador `$pull`).

- **Tratamento de Erros:**
  - Respostas padronizadas para códigos HTTP `400` (dados inválidos / ID incorreto), `404` (recurso não encontrado via `.orFail()`) e `500` ("Ocorreu um erro no servidor").

## Tecnologias e Técnicas Utilizadas

- **Node.js**: Ambiente de execução do JavaScript no servidor.
- **Express.js**: Framework para criação de rotas e gestão do servidor HTTP.
- **MongoDB & Mongoose**: Base de dados NoSQL e ODM para modelagem e validação estrita de esquemas.
- **Arquitetura MVC**: Separação clara de responsabilidades entre modelos, rotas e controladores.
- **ESLint (Configuração Airbnb)**: Padronização e qualidade de código.
- **EditorConfig**: Uniformidade na formatação entre diferentes editores.

## Como Executar o Projeto

- Clone o repositório para a sua máquina local.
- Instale as dependências com o comando:

(npm install)

- Certifique-se de que o seu servidor MongoDB local ou remoto está ativo.
- Inicie o servidor em modo de produção:

(npm run start)

- Ou em modo de desenvolvimento (com recarga automática):

(npm run dev)

- Aceda à API através de http://localhost:3000 utilizando ferramentas como o Postman.
