"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Dog extends Model {
    static associate(models) {
      models.Dog.belongsTo(models.User, {
        foreignKey: "user_id",
      });
      models.Dog.belongsToMany(models.Service, {
        through: "Appointment",
        foreignKey: "dog_id",
      });
    }
  }
  Dog.init(
    {
      dog_name: DataTypes.STRING,
      breed: DataTypes.STRING,
      age: DataTypes.STRING,
      wheight: DataTypes.STRING,
      pathologies: DataTypes.STRING,
      user_id: DataTypes.INTEGER,
      user_dni: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "Dog",
    }
  );
  return Dog;
};
