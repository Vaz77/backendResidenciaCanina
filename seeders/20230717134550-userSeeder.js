'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "Users",
      [
        {
          id: 1,
          name: "Dani",
          surname: "Velazquez Fernandez",
          dni: "54187543K",
          email:"dani@email.com",
          phone: "654789521",
          password: "dani1234",
          role_id: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: 2,
          name: "Admin",
          surname: "Admin",
          email: "admin@email.com",
          password: "admin1234",
          role_id: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: 3,
          name: "Jesus",
          surname: "Martinez Velazquez",
          dni: "52417856G",
          email:"jesus@email.com",
          phone: "685412785",
          password: "jesus1234",
          role_id: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: 4,
          name: "Adrian",
          surname: "Martinez Lopez",
          dni: "54127854M",
          email:"adrian@email.com",
          phone: "684751245",
          password: "adrian1234",
          role_id: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
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
