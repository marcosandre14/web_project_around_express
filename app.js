// Importa o framework Express para gerenciar a aplicação HTTP
const express = require('express');
// Importa os módulos de roteamento criados na pasta /routes
const usersRouter = require('./routes/users');
const cardsRouter = require('./routes/cards');

// Cria uma instância da aplicação Express
const app = express();
// Define a porta de execução (3000 por padrão)
const { PORT = 3000 } = process.env;

// Monta as rotas de usuários sob o caminho base '/users'
app.use('/users', usersRouter);
// Monta as rotas de cartões sob o caminho base '/cards'
app.use('/cards', cardsRouter);

// Middleware para capturar requisições em rotas não registradas (Erro 404)
app.use((req, res) => {
  res.status(404).send({ message: 'Recurso requisitado não encontrado' });
});

// Inicia o servidor e o coloca escutando na porta especificada
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
