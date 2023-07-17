'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Appointment extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      models.Appointment.belongsTo(models.Dog, {
        foreignKey: 'dog_id',
      });
      models.Appointment.belongsToMany(models.Service, {
        through: 'AppointmentService',
        foreignKey: 'appointment_id',
      });
      
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