'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "Appointments",
      [
        {
          id: 1,
          dog_name: "Max",
          time: "10:00 AM",
          date: "2023-08-01",
          date_exit: "2023-08-02",
          duration: "1 hour",
          observations: "Es muy sociable",
          service_name: "Guarderia",
          dog_id: 1,
          service_id: 2,
          user_id: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: 2,
          dog_name: "Buddy",
          time: "2:30 PM",
          date: "2023-08-02",
          date_exit: "2023-08-03",
          duration: "18:55",
          observations: "Es inquieto",
          service_name: "Residencia",
          dog_id: 2,
          service_id: 1,
          user_id: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: 3,
          dog_name: "Toby",
          time: "11:00 AM",
          date: "2023-08-03",
          date_exit: "2023-08-04",
          duration: "10:00",
          observations: "Tiene muchisima energia",
          service_name: "Entrenamiento/paseos",
          dog_id: 3,
          service_id: 3,
          user_id: 3,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: 4,
          dog_name: "Yaky",
          time: "4:00 PM",
          date: "2023-08-05",
          date_exit: "2023-08-06",
          duration: "09:00",
          observations: "Es mayor",
          service_name: "Baños e higiene",
          dog_id: 4,
          service_id: 5,
          user_id: 4,
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
