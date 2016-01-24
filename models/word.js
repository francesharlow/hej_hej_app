'use strict';

module.exports = function(sequelize, DataTypes) {
  var Word = sequelize.define('words', {
    swedish: {
      type: Sequelize.STRING
    },
    english: {
      type: Sequelize.STRING
    },
    imgUrl: {
      type: Sequelize.STRING,
      allowNull: false
    },
    userId: {
      references: "Users", // notice the plural, it's the name of the table
      referencesKey: "id"
    },
  {
    classMethods: {
      associate: function(models) {
        Word.belongsTo(models.User);
        Word.hasMany(models.Point);
      }
    }
  });
  
  return Word;
};