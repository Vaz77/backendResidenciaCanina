"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Service extends Model {
    static associate(models) {
      models.Service.belongsToMany(models.Dog, {
        through: "Appointment",
        foreignKey: "service_id",
      });
    }
  }
  Service.init(
    {
      name: DataTypes.STRING,
      price: DataTypes.STRING,
      description: DataTypes.STRING,
      // appointment_id: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "Service",
    }
  );
  return Service;
};
