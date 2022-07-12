const { Sequelize, Datatypes } = require('sequelize');
const sequelize = new Sequelize('sqlite::memory:');
const bcrypt = require('bcrypt');

const User = sequelize.define('user', {
    id: {
      type: Datatypes.STRING,
      allowNull: false,      
    },
    name: {
      type: Datatypes.STRING,
      allowNull: false,
    },
    email: {
      type: Datatypes.STRING,
      allowNull: true,
    },
    password: {
      type: Datatypes.STRING,
      allowNull: false,
    },
});