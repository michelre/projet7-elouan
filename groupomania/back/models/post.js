'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class post extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  post.init({
    author: DataTypes.STRING,
    text: DataTypes.STRING,
    image: DataTypes.STRING,
    likes: DataTypes.INTEGER,
    usersliked: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'post',
  });
  return post;
};