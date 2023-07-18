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
    time: DataTypes.STRING,
    status: DataTypes.STRING,
    date: DataTypes.DATE,
    observations: DataTypes.STRING,
    dog_id: DataTypes.INTEGER,
    service_id: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Appointment',
  });
  return Appointment;
};