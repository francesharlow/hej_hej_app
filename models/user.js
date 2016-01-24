'use strict';

module.exports = function(sequelize, DataTypes) {
  var User = sequelize.define('users', {
    username: {
      type: Sequelize.STRING,
      allowNull: false,
      unique: true
    },
    password: {
      type: Sequelize.STRING,
      allowNull: false
    },
    imgUrl: {
      type: Sequelize.STRING,
      allowNull: true,
      defaultValue: "https://upload.wikimedia.org/wikipedia/commons/c/c7/Gustavo-III%2C-Rey-de-Suecia_1777-by-Roslin.JPG"
  },  
  {
    classMethods: {
      associate: function(models) {
        // User.belongsTo(models.Session);
        User.hasMany(models.Game);
        User.hasMany(models.Word);
      }
    }
  });

  return User;
};

// sequelize.sync({ force: true }).success(function(err) {
//     // insert new user
//     User.create({
//         username: "fran",
//         password: "abc123";
//     }).success(function(user) {
//         // you can now access the newly created user via the variable user
//         console.log(user);
//     });
// });