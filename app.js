// Importa o framework Express para gerenciar a aplicação HTTP
const express = require("express");
// Importa o Mongoose para conectar e interagir com o MongoDB
const mongoose = require("mongoose");

// Importa os módulos de roteamento criados na pasta /routes
const usersRouter = require("./routes/users");
const cardsRouter = require("./routes/cards");

// Cria uma instância da aplicação Express
const app = express();
// Define a porta de execução
const { PORT = 3000 } = process.env;

// Conecta ao servidor MongoDB local e ao banco 'aroundb'
mongoose
  .connect("mongodb://localhost:27017/aroundb")
  .then(() => {
    console.log("Conectado ao MongoDB");
  })
  .catch((err) => {
    console.error("Erro ao conectar ao MongoDB:", err);
  });

// Middleware para analisar corpos de requisição em JSON
app.use(express.json());

// Middleware temporário para simular um usuário logado (Autor do cartão)
app.use((req, res, next) => {
  req.user = {
    _id: "6abb889ed17b5d597299357f",
  };
  next();
});

// Monta as rotas de usuários sob o caminho base '/users'
app.use("/users", usersRouter);
// Monta as rotas de cartões sob o caminho base '/cards'
app.use("/cards", cardsRouter);

// Middleware para capturar requisições em rotas não registradas (Erro 404)
app.use((req, res) => {
  res.status(404).send({ message: "Recurso requisitado não encontrado" });
});

// Inicia o servidor e o coloca escutando na porta especificada
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
