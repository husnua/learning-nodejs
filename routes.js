/* eslint-disable no-undef */
const express = require('express');

const router = express.Router();
const homeController = require('./controllers/homeController');
const saveController = require('./controllers/saveController');

const VeriController = require('./controllers/veriController');

router.get('/', homeController);

router.post('/kaydet', saveController);


router.get('/veri', VeriController);

module.exports = router;
