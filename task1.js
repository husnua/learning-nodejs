const express = require('express');

const port = 3000;
const app = express();
const bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

let baslikVeri;
let metinVeri;

app.get('/', (req, res) => {
  res.send(`<!DOCTYPE html><center>'
    <form action = "http://localhost:${port}/kaydet" method="POST"> 
    <input type="text" id=baslik name=baslik placeholder="BASLIK GIR"><br>
    <input type="text" id=metin name=metin placeholder="METIN GIR"><br><br>
    <button type=submit>GIR</button>
    </form></center>`);
});

app.post('/kaydet', (req, res) => {
  const { baslik = 'varsayilan', metin } = req.body;

  baslikVeri = baslik;
  metinVeri = metin;

  res.send(`
    <h1>${baslikVeri}</h1>
    <p>${metinVeri}</p>`);
});

app.get('/icerik', (req, res) => {
  res.send(metinVeri);
});

app.listen(port);
