const Card = require("../models/card");

// Retorna todos os cartões
const getCards = (req, res) => {
  Card.find({})
    .populate("owner")
    .then((cards) => res.status(200).send(cards))
    .catch((err) =>
      res.status(500).send({ message: "Ocorreu um erro no servidor" }),
    );
};

// Cria um novo cartão
const createCard = (req, res) => {
  const { name, link } = req.body;
  const owner = req.user._id;

  Card.create({ name, link, owner })
    .then((card) => res.status(201).send(card))
    .catch((err) => {
      if (err.name === "ValidationError") {
        return res.status(400).send({ message: "Dados inválidos fornecidos" });
      }
      return res.status(500).send({ message: "Ocorreu um erro no servidor" });
    });
};

// Deleta um cartão pelo _id
const deleteCard = (req, res) => {
  const { cardId } = req.params;

  Card.findByIdAndDelete(cardId)
    .orFail(() => {
      const error = new Error("Cartão não encontrado");
      error.statusCode = 404;
      throw error;
    })
    .then((card) =>
      res.status(200).send({ message: "Cartão deletado com sucesso", card }),
    )
    .catch((err) => {
      if (err.name === "CastError") {
        return res.status(400).send({ message: "Id de cartão inválido" });
      }
      if (err.statusCode === 404) {
        return res.status(404).send({ message: err.message });
      }
      return res.status(500).send({ message: "Ocorreu um erro no servidor" });
    });
};

// Curtir um cartão
const likeCard = (req, res) => {
  Card.findByIdAndUpdate(
    req.params.cardId,
    { $addToSet: { likes: req.user._id } },
    { new: true },
  )
    .orFail(() => {
      const error = new Error("Cartão não encontrado");
      error.statusCode = 404;
      throw error;
    })
    .then((card) => res.status(200).send(card))
    .catch((err) => {
      if (err.name === "CastError") {
        return res.status(400).send({ message: "Id de cartão inválido" });
      }
      if (err.statusCode === 404) {
        return res.status(404).send({ message: err.message });
      }
      return res.status(500).send({ message: "Ocorreu um erro no servidor" });
    });
};

// Descurtir um cartão
const dislikeCard = (req, res) => {
  Card.findByIdAndUpdate(
    req.params.cardId,
    { $pull: { likes: req.user._id } },
    { new: true },
  )
    .orFail(() => {
      const error = new Error("Cartão não encontrado");
      error.statusCode = 404;
      throw error;
    })
    .then((card) => res.status(200).send(card))
    .catch((err) => {
      if (err.name === "CastError") {
        return res.status(400).send({ message: "Id de cartão inválido" });
      }
      if (err.statusCode === 404) {
        return res.status(404).send({ message: err.message });
      }
      return res.status(500).send({ message: "Ocorreu um erro no servidor" });
    });
};

module.exports = {
  getCards,
  createCard,
  deleteCard,
  likeCard,
  dislikeCard,
};
