// Importa o roteador do Express para gerenciar as rotas de cartões
const router = require('express').Router();
// Importa o módulo 'path' para gerenciar caminhos no sistema de arquivos
const path = require('path');
// Importa a versão de Promises do módulo 'fs' para operações de arquivos
const fs = require('fs').promises;

// Define o caminho absoluto do arquivo cards.json
const cardsPath = path.join(__dirname, '..', 'data', 'cards.json');

// Função utilitária para ler o arquivo JSON de forma assíncrona
const readData = async (filePath) => {
  const data = await fs.readFile(filePath, 'utf8');
  return JSON.parse(data);
};

// Rota GET /cards - Retorna a lista completa de cartões
router.get('/', async (req, res) => {
  try {
    // Lê e parseia o conteúdo do arquivo cards.json
    const cards = await readData(cardsPath);
    // Envia o array de cartões em formato JSON
    return res.send(cards);
  } catch (err) {
    // Retorna mensagem padrão de erro 500 caso a leitura falhe
    return res.status(500).send({ message: 'Ocorreu um erro no servidor' });
  }
});

// Exporta o roteador para uso na aplicação principal
module.exports = router;
