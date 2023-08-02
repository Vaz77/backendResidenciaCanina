"use strict";
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("Appointments", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      dog_name: {
        type: Sequelize.STRING,
      },
      time: {
        type: Sequelize.STRING,
      },
      date: {
        type: Sequelize.STRING,
      },
      date_exit: {
        type: Sequelize.STRING,
      },
      duration: {
        type: Sequelize.STRING,
      },
      observations: {
        type: Sequelize.STRING,
      },
      service_name: {
        type: Sequelize.STRING,
      },
      dog_id: {
        type: Sequelize.INTEGER,
        references: {
          model: "Dogs",
          key: "id",
        },
      },
      service_id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        references: {
          model: "Services",
          key: "id",
        },
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable("Appointments");
  },
};
