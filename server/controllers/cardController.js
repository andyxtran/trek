const Cards = require('../db/cardModel');

const cardController = {};

cardController.addCard = async (req, res) => {
  const result = await Cards.createCard(req);
  res.json(result);
};

cardController.updateCard = async (req, res, next) => {
  const result = await Cards.updateCard(req);
  res.json(result);
};

cardController.deleteCard = async (req, res, next) => {
  const result = await Cards.deleteCard(req);
  res.json(result);
};

// should return an array of results
cardController.getCards = async (req, res) => {
  const result = await Cards.getCards(req);
  res.json(result);
};

module.exports = cardController;
