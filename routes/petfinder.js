const router = require('express').Router();
const { getBreedInfo } = require('../services/petfinder');

router.get('/', getBreedInfo, (req, res) => {
  res.render('index', {
    result: res.result,
  });
});

module.exports = router;
