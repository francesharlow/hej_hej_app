'use strict';

module.exports = function(sequelize, DataTypes) {
  var Point = sequelize.define('points', {
    gameId: {
      references: "Games", // notice the plural, it's the name of the table
      referencesKey: "id"
    },
    wordId: {
      references: "Words", // notice the plural, it's the name of the table
      referencesKey: "id"
    },
  {
    classMethods: {
      associate: function(models) {
        Point.belongsTo(models.Game);
        Point.belongsTo(models.Word);
      }
    }
  });
  
  return Point;
};