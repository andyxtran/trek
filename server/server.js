const express = require('express');

const app = express();
const path = require('path');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const db = require('./db/userModel');
const userController = require('./controllers/userController');
const sessionController = require('./controllers/sessionController');
const cardController = require('./controllers/cardController');

app.use(express.static(path.join(__dirname, './../')));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());

app.get('/', (req, res, next) => {
  res.sendFile(path.join(__dirname, '../index.html'));
});

app.post('/signin', userController.verify, sessionController.startSession, (req, res) => res.status(200).json({ jwt: req.locals.jwt }));

app.post('/validateJwt', sessionController.validateJwt);

app.post('/signup', userController.signup, (req, res, next) => {
  if (res.locals.result) res.status(200).send('you are signed up!');
  else res.status(404).send('SHENANIGANS :(');
});

app.post('/newjobcard', cardController.addCard);

app.post('/getcards', cardController.getCards);

app.put('/updatecards', cardController.updateCard);

app.delete('/deletecards', cardController.deleteCard);

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../index.html'));
});

app.listen(3000);
