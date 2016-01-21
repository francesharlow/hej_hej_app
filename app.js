var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var ejs = 'ejs';
var Sequelize = require('sequelize');

// Configuration
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static(__dirname + '/public'));
app.use(express.static(__dirname + '/bower_components'));
app.set('view engine', 'ejs')

//Database
// var sequelize = new Sequelize('database', 'username', 'password', {
//   host: 'localhost',
//   dialect: 'mysql'|'mariadb'|'sqlite'|'postgres'|'mssql',

//   pool: {
//     max: 5,
//     min: 0,
//     idle: 10000
//   },

//   // SQLite only
//   storage: 'path/to/database.sqlite'
// });

// Routes
app.get('/', function(req, res){
  res.render('index');
})

app.listen(process.env.PORT || 3000);