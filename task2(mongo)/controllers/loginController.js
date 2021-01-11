// eslint-disable-next-line no-unused-expressions
const { MongoClient } = require('mongodb');


const url = 'mongodb://localhost:27017/mydb';
let myobj = {};


const loginController = (req, res) => {
  const { eposta, sifre } = req.body;
  MongoClient.connect(url, { useNewUrlParser: true }, (err, db) => {
    if (err) throw err;
    const dbo = db.db('mydb');
    dbo.collection('users').findOne({ email: eposta }, (hata, result) => {
      if (hata) {
        console.log('HATA !!!');
        throw hata;
      }
      try {
        if (result == null) {
          const obj = { email: eposta, err: 'NotFound' };
          throw obj;
        }
        if (result.password === sifre) {
          console.log('Sifre doğru');
          myobj = result;
          res.render('giris1', { Ad: myobj.name, Soyad: myobj.surname });
          console.log(myobj);
        } else {
          console.log('Sifre hatalı');
          res.render('giris3', { EPOSTA: result.email });
        }
      } catch (error) {
        console.log(error);
        res.render('giris2');
      }
    });
    db.close();
  });
};

module.exports = loginController;
