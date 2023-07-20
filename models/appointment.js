'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Appointment extends Model {
    static associate(models) {
    }
  }
  Appointment.init({
    duration: DataTypes.STRING,
    status: DataTypes.STRING,
    time: DataTypes.STRING,
    date: DataTypes.STRING,
    observations: DataTypes.STRING,
    dog_id: DataTypes.INTEGER,
    dog_name: DataTypes.STRING,
    service_id: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Appointment',
  });
  return Appointment;
};