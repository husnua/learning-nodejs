const express = require('express');

const low = require('lowdb');
const FileSync = require('lowdb/adapters/FileSync');

const adapter = new FileSync('db.json');
const db = low(adapter);

const port = 3000;
const app = express();
const bodyParser = require('body-parser');

const routes = require('./routes');

app.use(bodyParser.urlencoded({ extended: false }));

db.defaults({ basliklar: [], metinler: [] })
  .write();

let countb = db.get('basliklar')
  .size()
  .value();

let countm = db.get('metinler')
  .size()
  .value();

let baslikVeri;
let metinVeri;

app.set('view engine', 'pug');

app.use('/', routes);

app.listen(port);
