const fetch = require('node-fetch');

const APIF_URL = 'http://catfacts-api.appspot.com/api/facts?';

function getRandomFact(req, res, next) {
  fetch(`${APIF_URL}`)
  .then(r => r.json())
  .then((fact) => {
    res.result = fact
    next();
  })
  .catch((err) => {
    res.err = err;
    next();
  });
}

module.exports = { getRandomFact };
