var express = require('express');
var morgan = require('morgan');
var path = require('path');

var app = express();
app.use(morgan('combined'));

app.get('/', function (req, res) {
  res.sendFile(path.join('index.html'));
});

app.get('/luck.css', function (req, res) {
  res.sendFile(path.join('luck.css'));
});

app.get('/1.png', function (req, res) {
  res.sendFile(path.join('1.png'));
});

app.get('/2.png', function (req, res) {
  res.sendFile(path.join('2.png'));
});

app.get('/images.jpg', function (req, res) {
  res.sendFile(path.join('images.jpg'));
});

var port = 8080; // Use 8080 for local development because you might already have apache running on 80
app.listen(8080, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});
