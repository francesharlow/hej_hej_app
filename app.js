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
// sequelize initialization
var sequelize = new Sequelize("postgres://username:password@localhost:5432/dbname");
 
// check database connection
sequelize.authenticate().complete(function(err) {
    if (err) {
      console.log('Unable to connect to the database:', err);
    } else {
      console.log('Connection has been established successfully.');
    }
});

// Routes
app.get('/', function(req, res){
  res.render('index');
})

app.listen(process.env.PORT || 3000);