// eslint-disable-next-line no-unused-expressions
const low = require('lowdb');
const FileSync = require('lowdb/adapters/FileSync');


let i;
const loginController = (req, res) => {
  const adapter = new FileSync('db.json');
  const db = low(adapter);
  const { eposta, sifre } = req.body;

  const data = db.get('user').value();

  const count = db.get('user')
    .size()
    .value();

  for (i = 0; i < count; i += 1) {
    console.log(data[i].email + data[i].password);
    if (data[i].email === eposta) {
      if (data[i].password === sifre) {
        const Ad = data[i].name;
        const Soyad = data[i].surname;
        res.render('giris1', { Ad, Soyad });
        i = -1;
        break;
      }
    }
  }
  if (i !== -1) {
    res.render('giris2');
  }
  // eslint-disable-next-line no-console
};

module.exports = loginController;
