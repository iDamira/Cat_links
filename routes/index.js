const router = require('express').Router();
const { getRandomFact } = require('../services/catfact');

router.get('/', getRandomFact, (req, res) => {
  res.render('index', {
    randomFact: res.result,
  });
});

module.exports = router;
