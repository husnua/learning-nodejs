const express = require('express');

const low = require('lowdb');
const FileSync = require('lowdb/adapters/FileSync');

const adapter = new FileSync('db.json');
const db = low(adapter);


const port = 3000;
const app = express();
const bodyParser = require('body-parser');

const routes = require('./routes');

app.db = db;

app.use(bodyParser.urlencoded({ extended: false }));

db.defaults({ basliklar: [], metinler: [] })
  .write();


app.set('view engine', 'pug');

app.use('/', routes);

app.listen(port);
