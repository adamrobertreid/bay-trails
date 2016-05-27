// server.js

// modules & express =======================================
var express = require('express'),
    app = express(),
    bodyParser = require('body-parser'),
    logger = require('morgan'),
    auth = require('./middleware/auth'),
    controllers = require("./controllers");

// require and load dotenv
require('dotenv').load();

// configuration ===========================================

// get all data/stuff of the body (POST) parameters
// parse application/json
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// set the static files location /public/img will be /img for users
app.use(express.static(__dirname + '/public'));

// log api requests
app.use(logger('dev'));


// ROUTES==================================================

// Auth Routes
var usersCtrl = controllers.users;
app.post('/auth/signup', usersCtrl.signup);
app.post('/auth/login', usersCtrl.login);
app.get('/api/me', auth.ensureAuthenticated, usersCtrl.showCurrentUser);
app.put('/api/me', auth.ensureAuthenticated, usersCtrl.updateCurrentUser);

//JSON API Endpoints ======================================




// CATCH All Route =========================================
app.get(['/', '/signup', '/login', '/logout', '/profile'], function (req, res) {
  res.sendFile(__dirname + '/views/index.html');
});


// //catch all for anything
// app.get('*', function homepage (req, res) {
//   res.sendFile(__dirname + './views/index.html');
// });

// start app ===============================================
// set our port
var port = process.env.PORT || 3000;
// startup our app at http://localhost:4000
app.listen(port);
// shoutout to the user
console.log('Magic happens on http://localhost:' + port);
