// eslint-disable-next-line no-unused-expressions
const { MongoClient } = require('mongodb');

const url = 'mongodb://localhost:27017/mydb';

const saveController = (req, res) => {
  const {
    ad,
    soyad,
    eposta,
    sifre,
  } = req.body;
  MongoClient.connect(url, { useNewUrlParser: true }, (err, db) => {
    if (err) throw err;
    const dbo = db.db('mydb');
    const myobj = {
      name: ad,
      surname: soyad,
      email: eposta,
      password: sifre,
    };
    dbo.collection('users').insertOne(myobj, (hata, resp) => {
      if (hata) throw hata;
      console.log('1 document inserted');
      console.log(resp);
      db.close();
    });
    dbo.collection('users').find({}).toArray((er, result) => {
      if (er) throw er;
      console.log(result);
      db.close();
    });
  });

  res.render('sonuc');
};


module.exports = saveController;
