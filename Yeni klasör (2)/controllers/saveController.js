// eslint-disable-next-line no-unused-expressions
const low = require('lowdb');
const FileSync = require('lowdb/adapters/FileSync');

const adapter = new FileSync('db.json');

const db = low(adapter);

let countb = db.get('basliklar')
  .size()
  .value();

let countm = db.get('metinler')
  .size()
  .value();
const saveController = (req, res) => {
  const { baslik = 'varsayilan', metin } = req.body;


  db.get('basliklar')
    .push({ id: countb += 1, title: baslik })
    .write();
  db.get('metinler')
    .push({ id: countm += 1, title: metin })
    .write();

  res.render('sonuc', { baslik, metin });
};


module.exports = saveController;
