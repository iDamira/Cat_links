const indexRouter = require('express').Router();
const { getRandomFact } = require('../services/catfact');

indexRouter.get('/', getRandomFact, (req, res) => {
  res.render('index/home', {
    randomFact: res.result,
  });
});

// This route serves your `/login` form
indexRouter.get('/login', (req, res) => {
  res.render('index/existingUser');
});

// This route serves your `/signup` form
indexRouter.get('/signup', (req, res) => {
  res.render('index/newUser');
});

indexRouter.get('/newcat', (req, res) => {
  res.render('index/newKitten');
});

module.exports = indexRouter;
