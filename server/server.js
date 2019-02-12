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

// if user is authenticated, fetch his job cards from db
// app.post('/signin', userController.verify, cardModel.getCards, (req, res, next) => {
//   if (res.locals.result) res.status(200).redirect('../userpage.html');
//   else res.status(404).send('could not find username and/or password');
// });

// user should be presented with a new card page after successful signup
// app.post('/signin', userController.verify, sessionController.startSession, cardController.getCards, (req, res, next) => {
//   if (res.locals.result) res.status(200).send();

app.post('/signin',
  userController.verify,
  sessionController.startSession,
  (req, res) => res.status(200).json({ jwt: req.locals.jwt }));

app.post('/signup', userController.signup, (req, res, next) => {
  if (res.locals.result) res.status(200).redirect(`${req.baseUrl}/secret`);
  else res.status(404).send('SHENANIGANS :(');
});

app.post('/newjobcard', cardController.addCard, (req, res) => {
  if (res.locals.result) res.status(200).send('New Job card created');
  else res.status(404).send('No good');
});

app.get('/getCards', cardController.getCards, (req, res, next) => {
  console.log(res.locals.result);
  if (res.locals.result) res.status(200).send(res.locals.result);
  else res.status(404).send('SHENANIGANS :(');
});

app.put('/updateCards', cardController.updateCard, (req, res, next) => {
  if (res.locals.result) res.status(200).send('CARD SUCCESSFULLY UPDATED!');
  else res.status(404).send('SHENANIGANS :(');
});

app.post('/deleteCards', cardController.deleteCard, (req, res, next) => {
  if (res.locals.result) res.status(200).send('CARD SUCCESSFULLY DELETED!');
  else res.status(404).send('SHENANIGANS :(');
});

// app.post('/addCards', cardController.createCard, (req, res, next) => {
//   if (res.locals.result) res.status(200).send('CARD SUCCESSFULLY CREATED!');
//   else res.status(404).send('SHENANIGANS :(');
// });

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../index.html'));
});

app.listen(3000);
