const fetch = require('node-fetch');

const API_URL = 'http://catfacts-api.appspot.com/api/facts?';

function getRandomFact(req, res, next) {
  fetch(`${API_URL}`)
  .then(r => r.json())
  .then((result) => {
    res.result = result
    next();
  })
  .catch((err) => {
    res.err = err;
    next();
  });
}

module.exports = { getRandomFact };
