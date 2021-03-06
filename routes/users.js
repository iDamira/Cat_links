/* eslint no-multi-spaces: ["error", { exceptions: { "VariableDeclarator": true } }] */

const usersRouter  = require('express').Router();
const { createUser } = require('../models/user');
const { authenticate } = require('../lib/auth');

/**
 * Creates a new user by handling the POST request from a form with action `/users`
 * It uses the createUser middleware from the user model
 */
usersRouter.post('/', createUser, (req, res) => {
  res.redirect('/login');
});

/**
 * Takes the user to its profile by handling any GET request to `/users/profile`
 * It redirects to /login when attempted to be reached by a non logged in user
 * It is "protected" by the authenticate middleware from the auth library
 */
usersRouter.get('/profile', authenticate, (req, res) => {
  res.render('users/account', {
    user: res.user,
  });
});


module.exports = usersRouter;

