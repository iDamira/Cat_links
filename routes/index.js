const router = require('express').Router();
const { getRandomFact } = require('../services/catfact');

router.get('/', getRandomFact, (req, res) => {
  res.render('index', {
    result: res.result,
  });
});

module.exports = router;
