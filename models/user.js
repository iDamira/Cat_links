
/* eslint no-multi-spaces: ["error", { exceptions: { "VariableDeclarator": true } }] */
/* eslint no-param-reassign: ["error", { "props": false }] */

const { ObjectID } = require('mongodb');
const { getDB }    = require('../lib/dbConnect.js');
const bcrypt       = require('bcryptjs');

const SALTROUNDS = 10;

function createUser(req, res, next) {
  const userObject = {
    username: req.body.user.username,
    password: bcrypt.hashSync(req.body.user.password, SALTROUNDS),
    email: req.body.user.email,
    phone: req.body.user.phone,
    firstname: req.body.user.firstname,
    lastname: req.body.user.lastname,
    city: req.body.user.city,
    state: req.body.user.state,
    zipcode: req.body.user.zipcode,
    type: req.body.user.usertype,
  };

getDB().then((db) => {
  db.collection('users')
  .insert(userObject, (insertErr, dbUser) => {
    if (insertErr) return next(insertErr);

    res.user = dbUser;
    db.close();
    return next();
  });
});
}

function getUserById(id) {
  return getDB().then((db) => {
    const promise = new Promise((resolve, reject) => {
      db.collection('users')
        .findOne({ _id: ObjectID(id) }, (findError, user) => {
          if (findError) reject(findError);
          db.close();
          resolve(user);
        });
    });
    return promise;
  });
}

function getUserByUsername(username) {
  return getDB().then((db) => {
    const promise = new Promise((resolve, reject) => {
      db.collection('users')
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
  createUser,
  getUserById,
  getUserByUsername,
};
