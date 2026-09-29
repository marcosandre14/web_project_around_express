const router = require("express").Router();
const {
  getCards,
  createCard,
  deleteCard,
  likeCard,
  dislikeCard,
} = require("../controllers/cards");

// GET /cards — retorna todos os cartões
router.get("/", getCards);

// POST /cards — cria um novo cartão
router.post("/", createCard);

// DELETE /cards/:cardId — deleta um cartão por _id
router.delete("/:cardId", deleteCard);

router.put("/:cardId/likes", likeCard);
router.delete("/:cardId/likes", dislikeCard);

module.exports = router;
