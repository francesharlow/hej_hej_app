var express = require('express');
var app = express();
var path = require('path');
var bodyParser = require('body-parser');
var cookieParser = require('cookie-parser');
var ejs = require('ejs');
var Sequelize = require('sequelize');

// Configuration
app.user(cookieParser());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static(__dirname + '/public'));
app.use(express.static(__dirname + '/bower_components'));
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

var routes = require('./routes/index');
var users  = require('./routes/users');

app.use('/', routes);
app.use('/users', users);

module.exports = app;