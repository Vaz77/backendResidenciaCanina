"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Appointment extends Model {
    static associate(models) {
      models.Appointment.belongsTo(models.Dog, {
        foreignKey: "dog_id",
      });
      models.Appointment.belongsTo(models.Service, {
        foreignKey: "service_id",
      });
    }
  }
  Appointment.init(
    {
      duration: DataTypes.STRING,
      status: DataTypes.STRING,
      time: DataTypes.STRING,
      date: DataTypes.STRING,
      observations: DataTypes.STRING,
      dog_id: DataTypes.INTEGER,
      dog_name: DataTypes.STRING,
      service_id: DataTypes.INTEGER,
      service_name: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "Appointment",
    }
  );
  return Appointment;
};
