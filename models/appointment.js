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
      models.Appointment.belongsTo(models.User, {
        foreignKey: "user_id",
      });
    }
  }
  Appointment.init(
    {
      duration: DataTypes.STRING,
      date_exit: DataTypes.DATEONLY,
      time: DataTypes.STRING,
      date: DataTypes.DATEONLY,
      observations: DataTypes.STRING,
      dog_id: DataTypes.INTEGER,
      dog_name: DataTypes.STRING,
      service_id: DataTypes.INTEGER,
      service_name: DataTypes.STRING,
      user_id: DataTypes.INTEGER
    },
    {
      sequelize,
      modelName: "Appointment",
    }
  );
  return Appointment;
};
