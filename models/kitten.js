/* eslint no-multi-spaces: ["error", { exceptions: { "VariableDeclarator": true } }] */
/* eslint no-param-reassign: ["error", { "props": false }] */

const { ObjectID } = require('mongodb');
const { getDB }    = require('../lib/dbConnect.js');

function createKitten(req, res, next) {
  const userObject = {
    pictue: req.body.user.kpic,
    name: req.body.user.kittenname,
    gender: req.body.user.gender,
    breed: req.body.user.breed,
    littersize: req.body.user.littersize,
    breedername: req.body.user.username,
  };

getDB().then((db) => {
  db.collection('kittens')
  .insert(userObject, (insertErr, user) => {
    if (insertErr) return next(insertErr);

    res.user = dbUser;
    db.close();
    return next();
  });
});
}

function getKittenById(id) {
  return getDB().then((db) => {
    const promise = new Promise((resolve, reject) => {
      db.collection('kittens')
        .findOne({ _id: ObjectID(id) }, (findError, user) => {
          if (findError) reject(findError);
          db.close();
          resolve(user);
        });
    });
    return promise;
  });
}

function getKittenByKittenname(username) {
  return getDB().then((db) => {
    const promise = new Promise((resolve, reject) => {
      db.collection('kittens')
        .findOne({ username }, (findError, user) => {
          if (findError) reject(findError);
          db.close();
          resolve(user);
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
