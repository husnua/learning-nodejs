// eslint-disable-next-line no-unused-expressions
const low = require('lowdb');
const FileSync = require('lowdb/adapters/FileSync');

const adapter = new FileSync('db.json');

const db = low(adapter);

const VeriController = (req, res) => {
  const data = db.get('basliklar').value();
  const data2 = db.get('metinler').value();
  // eslint-disable-next-line no-console
  console.log(data);
  res.render('veri', { data, data2 });
};

module.exports = VeriController;
