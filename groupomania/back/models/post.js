'use strict';
const {
  Model
} = require('sequelize');
const user = require('./user')
module.exports = (sequelize, DataTypes) => {
  class post extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({post, user}) {
      user.hasMany(post)
      post.belongsTo(user)
      // define association here
    }
  }
  post.init({
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
