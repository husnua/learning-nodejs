const express  =  require('express') ;
const port     =  3000 ;
const app      =  express();
var bodyParser = require('body-parser');
var urlencodedParser = bodyParser.urlencoded({ extended: false })
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get('/',function(req,res) {
        res.send('<!DOCTYPE html><center>'+
        '<form action = "http://localhost:3000/kaydet" method = "POST">' +
        '<input type="text" id=baslik name=baslik placeholder="BASLIK GIR"><br>'+
        '<input type="text" id=metin name=metin placeholder="METIN GIR"><br><br>'+
        '<button type=submit>GIR</button>'+
        '</form></center>');


});

app.post('/kaydet',urlencodedParser, function (req,res){
        let baslik=req.body.baslik ;
        let metin=req.body.metin ;
        res.send('<h1>'+baslik+'</h1><p>'+metin+'</p>');
});


app.listen(port) ;
