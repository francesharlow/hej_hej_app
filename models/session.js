'use strict';

module.exports = function(sequelize, DataTypes) {
  var Session = sequelize.define('sessions', {
    sid: {
      type: Sequelize.STRING,
      primaryKey: true
    },
      expire: {
        type: Sequelize.DATE,
        allowNull: true
      },
      sess: Sequelize.JSON
  });
  return Session;
};
