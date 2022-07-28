module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('user', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      UNIQUE: true,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      UNIQUE: true,
    },
    image: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: 'https://res.cloudinary.com/dzqbzqgjm/image/upload/v1599098981/default-profile-picture_qjqjqj.png',
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    passwordConfirmation: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    isAdmin: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: false
    }
  })
  return User
};
