const fetch = require('node-fetch');

const APIP_URL = 'http://api.petfinder.com/breed.list?';
const APIP_KEY = process.env.PETFINDER_KEY;
const APIP_SECRET = process.env.PETFINDER_SECRET;

function getBreedInfo(req, res, next) {
  // fetch(`${APIP_URL}format=json&key=${APIP_KEY}&animal=cat`)
  fetch('http://api.petfinder.com/breed.list?format=json&key=8ede5202ae847b4902fe16ef0b9616cc&animal=cat')
  .then(r => r.json())
  .then((result) => {
    console.log('trying to console log result:', result);
    res.result = result;
    next();
  })
  .catch((err) => {
    res.err = err;
    console.log('Error: ' + err)
    next();
  });
}

module.exports = { getBreedInfo };

// api.petfinder.com/breed.list?format=json&key=8ede5202ae847b4902fe16ef0b9616cc&animal=cat
