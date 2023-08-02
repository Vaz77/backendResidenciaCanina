'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "Services",
      [
        {
          id: 1,
          service_name: "Residencia",
          price: "15euros/dia",
          description: "Largas estancias",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: 2,
          service_name: "Guarderia",
          price: "30euros/dia",
          description: "Estancias cortas",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: 3,
          service_name: "Entrenamiento/paseos",
          price: "20euros/hora",
          description: "Entrenamiento y paseos para los mas inquietos",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: 4,
          service_name: "Veterinario24h",
          price: "desde 50euros",
          description: "Servicio veterinario 24h",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: 5,
          service_name: "Baños e higiene",
          price: "15euros",
          description: "Salon de belleza canino",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: 6,
          service_name: "Transporte",
          price: "desde 20euros",
          description: "Tranporte especial",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
    );
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
