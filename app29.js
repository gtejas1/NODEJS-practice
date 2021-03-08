var express = require('express');
var app = express();

var port = process.env.PORT || 3000;

app.use('/public', express.static(__dirname + '/public'));

app.use('/', function (req, res, next) {
    console.log('Request URL: ' + req.url);
    next();
});

app.get('/', function (req,res) {
    res.send('<html><head><link href=public/style.css type=text/css rel=stylesheet/></head><body><h1>Hello World!</h1></body></html>');
});

app.get('/person/:id', function (req,res) {
    res.send('<html><head><link href=public/style.css type=text/css rel=stylesheet/></head><body><h1>Person: '+req.params.id +' </h1></body></html>');
});

app.get('/api', function (req,res) {
    res.json({ firstname:'john',lastname:'doe' });
});

app.listen(port);