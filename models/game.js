'use strict';

module.exports = function(sequelize, DataTypes) {
  var Game = sequelize.define('games', {
    score: {
      type: Sequelize.INTEGER,
      allowNull: false,
    },
    userId: {
      references: "Users", // notice the plural, it's the name of the table
      referencesKey: "id"
    },
  {
    classMethods: {
      associate: function(models) {
        Game.belongsTo(models.User);
        Game.hasMany(models.Point);
      }
    }
  });
  
  return Game;
};

// sequelize.sync()