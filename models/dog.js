'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Dog extends Model {
    static associate(models) {
      models.Dog.belongsTo(models.User, {
        foreignKey: 'dog_id',
      }); 
      models.Dog.belongsToMany(models.Service, {
        foreignKey: 'dog_id',
      });
    }
  }
  Dog.init({
    name: DataTypes.STRING,
    breed: DataTypes.STRING,
    age: DataTypes.STRING,
    wheight: DataTypes.STRING,
    pathologies: DataTypes.STRING,
    user_id: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Dog',
  });
  return Dog;
};