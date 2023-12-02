var express = require('express');
var app = express();

app.set('view engine', 'ejs');
app.use(express.static('public'));

app.get('/page2', function(req, res) {
    res.render("../views/page2");
});

app.get('/page3', function(req, res) {
    res.render("../views/page3");
});

app.get('/page4', function(req, res) {
    res.render("../views/page4");
});

app.get('/', function(req, res) {
    res.render("../views/index");
});

app.get('/offlinePage', function(req, res) {
    res.render("../views/offlinePage");
});

app.listen(3000, function() {
    console.log('Executando na porta 3000');
});

