// eslint-disable-next-line no-unused-expressions
const low = require('lowdb');
const FileSync = require('lowdb/adapters/FileSync');

const saveController = (req, res) => {

  const adapter = new FileSync('db.json');
  const db = low(adapter);

  let count = db.get('user')
    .size()
    .value();
  const {
    ad,
    soyad,
    eposta,
    sifre,
  } = req.body;


  db.get('user')
    .push({
      id: count += 1,
      name: ad,
      surname: soyad,
      email: eposta,
      password: sifre,
    }).write();

  res.render('sonuc');
};


module.exports = saveController;
