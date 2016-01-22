var express = require('express');
var path = require('path');
var bodyParser = require('body-parser');
var ejs = require('ejs');
var cookieParser = require('cookie-parser')
// var session = require('express-sessions');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use(express.static(path.join(__dirname, 'public')));

// db
var Sequelize = require('sequelize');

var sequelize = new Sequelize('postgres://localhost:5432/hej_hej_app')
console.log(sequelize);

sequelize
  .authenticate()
  .then(function(err) {
    console.log('Connection has been established successfully.');
  }, function (err) { 
    console.log('Unable to connect to the database:', err);
  });

// var SequelizeStore = require('connect-session-sequelize')(session.Store);

app.use(cookieParser())
// app.use(session({
//   secret: 'keyboard cat',
//   store: new SequelizeStore({
//     db: sequelize
//   }),
//   proxy: true // if you do SSL outside of node.
// }))

//routes
app.get('/', function(req, res){
  res.render('index');
})

app.listen(process.env.PORT || 3000);