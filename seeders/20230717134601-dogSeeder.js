'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "Dogs",
      [
        {
          id: 1,
          dog_name: "Max",
          breed: "Labrador",
          age: "3años",
          wheight: "24kg",
          pathologies: "ninguna",
          user_dni: "54187543K",
          user_id: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: 2,
          dog_name: "Buddy",
          breed: "Boxer",
          age: "2años",
          wheight: "20kg",
          pathologies: "alergia al pienso de vacuno",
          user_dni: "52417856G",
          user_id: 3,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: 3,
          dog_name: "Toby",
          breed: "Pitbull",
          age: "5años",
          wheight: "18kg",
          pathologies: "Alergia a las flores",
          user_dni: "54127854M",
          user_id: 4,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: 4,
          dog_name: "Yaky",
          breed: "Perro salchicha",
          age: "10años",
          wheight: "9kg",
          pathologies: "Dolencia en la cadera",
          user_dni: "54187543K",
          user_id: 1,
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
