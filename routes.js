const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  res.render('form');
});

router.post('/kaydet', (req, res) => {
  const { baslik = 'varsayilan', metin } = req.body;

  console.log(req.body);

  baslikVeri = baslik;
  metinVeri = metin;

  db.get('basliklar')
    .push({ id: countb += 1, title: baslikVeri })
    .write();
  db.get('metinler')
    .push({ id: countm += 1, title: metinVeri })
    .write();

  res.send(`
    <h1>${baslikVeri}</h1>
    <p>${metinVeri}</p>`);
});

router.get('/icerik', (req, res) => {
  res.render('index', { title: 'Title', bas: baslikVeri, message: metinVeri });
});

router.get('/veri', (req, res) => {
  const data = db.get('basliklar').value();
  // eslint-disable-next-line no-console
  console.log(data);
  res.render('veri', { data });
});

module.exports = router;
