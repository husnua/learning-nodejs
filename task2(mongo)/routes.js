/* eslint-disable no-undef */
const express = require('express');

const router = express.Router();
const homeController = require('./controllers/homeController');
const saveController = require('./controllers/saveController');
const loginController = require('./controllers/loginController');
const signupController = require('./controllers/signupController');

router.get('/', homeController);

router.post('/save', saveController);

router.post('/login', loginController);

router.post('/signup', signupController);

module.exports = router;
