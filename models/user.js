'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    static associate(models) {
      models.user.belongsTo(models.role, {
        foreignKey: "role_id",
      })
    }
    static associate(models) {
      // define association here
      models.User.hasMany(models.Dog, {
        foreignKey: 'user_id',
      });
      

    }
  }
  User.init({
    name: DataTypes.STRING,
    surname: DataTypes.STRING,
    dni: DataTypes.STRING,
    email: DataTypes.STRING,
    password: DataTypes.STRING,
    role_id: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'User',
  });
  return User;
};