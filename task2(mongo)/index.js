const express = require('express');

const { MongoClient } = require('mongodb');

const url = 'mongodb://localhost:27017/mydb';


MongoClient.connect(url, { useNewUrlParser: true }, (err, db) => {
  if (err) throw err;
  const dbo = db.db('mydb');
  dbo.createCollection('users', (hata, res) => {
    if (hata) throw hata;
    console.log('Collection created!');

    db.close();
  });
});
const port = 3000;
const app = express();
const bodyParser = require('body-parser');

const routes = require('./routes');


app.use(bodyParser.urlencoded({ extended: false }));


app.set('view engine', 'pug');

app.use('/', routes);

app.listen(port);
