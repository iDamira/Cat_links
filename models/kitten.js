/* eslint no-multi-spaces: ["error", { exceptions: { "VariableDeclarator": true } }] */
/* eslint no-param-reassign: ["error", { "props": false }] */

const { ObjectID } = require('mongodb');
const { getDB }    = require('../lib/dbConnect.js');

function createKitten(req, res, next) {
  const kittenObject = {
    pictue: req.body.user.kpic,
    name: req.body.user.kittenname,
    gender: req.body.user.gender,
    breed: req.body.user.breed,
    littersize: req.body.user.littersize,
    breedername: req.body.user.username,
  };

getDB().then((db) => {
  db.collection('kittens')
  .insert(kittenObject, (insertErr, dbKitten) => {
    if (insertErr) return next(insertErr);

    res.kitten = dbKitten;
    db.close();
    return next();
  });
});
}

function getKittenById(id) {
  return getDB().then((db) => {
    const promise = new Promise((resolve, reject) => {
      db.collection('kittens')
        .findOne({ _id: ObjectID(id) }, (findError, kitten) => {
          if (findError) reject(findError);
          db.close();
          resolve(kitten);
        });
    });
    return promise;
  });
}

function getKittenByKittenname(kittenname) {
  return getDB().then((db) => {
    const promise = new Promise((resolve, reject) => {
      db.collection('kittens')
        .findOne({ kittenname }, (findError, kitten) => {
          if (findError) reject(findError);
          db.close();
          resolve(kitten);
        });
    });
    return promise;
  });
}

module.exports = {
  createKitten,
  getKittenById,
  getKittenByKittenname,
};
