/* eslint no-multi-spaces: ["error", { exceptions: { "VariableDeclarator": true } }] */

const kittensRouter  = require('express').Router();
const { createKitten } = require('../models/kitten');
const { authenticate } = require('../lib/auth');

/**
 * Creates a new user by handling the POST request from a form with action `/users`
 * It uses the createUser middleware from the user model
 */
kittensRouter.post('/', createKitten, (req, res) => {
  res.redirect('/');
});

/**
 * Takes the user to its profile by handling any GET request to `/users/profile`
 * It redirects to /login when attempted to be reached by a non logged in user
 * It is "protected" by the authenticate middleware from the auth library
 */
// kittensRouter.get('/profile', authenticate, (req, res) => {
//   res.render('users/account', {
//     user: res.user,
//   });
// });

module.exports = kittensRouter;
