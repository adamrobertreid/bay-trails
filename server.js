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
app.use('/vendor', express.static(__dirname + '/bower_components'));
// log api requests
app.use(logger('dev'));


// ROUTES==================================================
app.get('/api',controllers.api.index);

// Auth Routes
var usersCtrl = controllers.users;
app.post('/auth/signup', usersCtrl.signup);
app.post('/auth/login', usersCtrl.login);
app.get('/api/me', auth.ensureAuthenticated, usersCtrl.showCurrentUser);
app.put('/api/me', auth.ensureAuthenticated, usersCtrl.updateCurrentUser);

//Adding favorite trail to users profile
app.put('/api/me/trails/:id', auth.ensureAuthenticated, usersCtrl.putFavCurrentUser);

//JSON API Endpoints ======================================

var trailsCtrl = controllers.trails;
app.get('/api/trails', trailsCtrl.index);
app.post('/api/trails', trailsCtrl.create);
app.get('/api/trails/:id', trailsCtrl.show);
app.put('/api/trails/:id', trailsCtrl.update);
app.delete('/api/trails/:id', trailsCtrl.destroy);




// CATCH All Route =========================================
app.get(['/', '/signup', '/login', '/logout', '/admin', '/profile', '/trails*'], function (req, res) {
  res.sendFile(__dirname + '/views/index.html');
});


// start app ===============================================
// set our port
var port = process.env.PORT || 3000;
// startup our app at https://localhost:4000
app.listen(port);
// shoutout to the user
console.log('Magic happens on https://localhost:' + port);
