// server.js

// modules ===================================
var express = require('express');
var app = express();
var bodyParser = require('body-parser');


// configuration ===========================================

// get all data/stuff of the body (POST) parameters
// parse application/json
app.use(bodyParser.json());

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));

// set the static files location /public/img will be /img for users
app.use('/public',express.static(__dirname + '/public'));

// set 'html' as the engine, using ejs's renderFile function
var ejs = require('ejs');
app.engine('html', ejs.renderFile);
app.set('view engine', 'html');

// var controllers = require('./controllers');

// routes ==================================================


app.get('/', function homepage (req, res) {
  res.sendFile(__dirname + '/views/index.html');
});

//JSON API Endpoints
require('./app/routes')(app); // configure our routes




//catch all for anything
app.get('*', function homepage (req, res) {
  res.sendFile(__dirname + '/views/index.html');
});

// start app ===============================================
// set our port
var port = process.env.PORT || 3000;
// startup our app at http://localhost:4000
app.listen(port);
// shoutout to the user
console.log('Magic happens on http://localhost:3000/' + port);
