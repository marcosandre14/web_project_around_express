// Importa o roteador do Express para modularizar as rotas da aplicação
const router = require('express').Router();
// Importa o módulo 'path' para lidar com caminhos de diretórios e arquivos
const path = require('path');
// Importa a API de Promises do módulo 'fs' para realizar leitura assíncrona de arquivos
const fs = require('fs').promises;

// Define o caminho absoluto para o arquivo JSON contendo os dados dos usuários
const usersPath = path.join(__dirname, '..', 'data', 'users.json');

// Função utilitária assíncrona para ler e converter o conteúdo do arquivo JSON
const readData = async (filePath) => {
  const data = await fs.readFile(filePath, 'utf8');
  return JSON.parse(data);
};

// Rota GET /users - Retorna a lista completa de usuários
router.get('/', async (req, res) => {
  try {
    // Tenta ler o arquivo JSON de usuários
    const users = await readData(usersPath);
    // Retorna a lista de usuários com status HTTP 200 (Sucesso)
    return res.send(users);
  } catch (err) {
    // Caso ocorra alguma falha na leitura do arquivo, responde com erro 500
    return res.status(500).send({ message: 'Ocorreu um erro no servidor' });
  }
});

// Rota GET /users/:id - Busca e retorna um único usuário pelo seu ID
router.get('/:id', async (req, res) => {
  // Extrai o parâmetro 'id' passado na URL da requisição
  const { id } = req.params;

  try {
    // Lê a lista de usuários
    const users = await readData(usersPath);
    // Procura o usuário cujo _id seja idêntico ao informado na URL
    const user = users.find((item) => item._id === id);

    // Se o usuário não for encontrado no array, retorna status 404
    if (!user) {
      return res.status(404).send({ message: 'ID de usuário não encontrado' });
    }

    // Retorna os dados do usuário encontrado
    return res.send(user);
  } catch (err) {
    // Trata erros inesperados do servidor respondendo com status 500
    return res.status(500).send({ message: 'Ocorreu um erro no servidor' });
  }
});

// Exporta as rotas configuradas para serem montadas no app.js
module.exports = router;
