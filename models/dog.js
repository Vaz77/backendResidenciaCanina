'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Dog extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      models.Dog.hasMany(models.Appointment, {
        foreignKey: 'dog_id',
      });
      models.Dog.belongsTo(models.User, {
        foreignKey: 'user_id',
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