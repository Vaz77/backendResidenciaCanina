'use strict';
// el ORM no trabaja con las migraciones
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  // El método up funciona cuando lanzamos la migración al servidor con el comando db:migrate
  async up(queryInterface, Sequelize) {
    // Utiliza el método createTable, es decir, está creando la tabla en la base de datos, el primer argumento es el nombre de la tabla y tras él vienen los campos que va a contener
    await queryInterface.createTable('Roles', {
      // La id se crea de manera automática
      id: {
        // Esto no permite que el campo sea nulo en ningún caso
        allowNull: false,
        // Esto hace que se vaya creando solo, de manera autoincremental
        autoIncrement: true,
        // De manera predeterminada, la ID es la clave primaria de la tabla
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      name: {
        type: Sequelize.STRING
      },
      // Por defecto, todas las tablas contienen timestamps, que se crean solas y son de tipo fecha. Nos indicarán la fecha de creación y de actualización de cada campo.
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  // El método down funciona cuando queremos hacer un rollback de migraciones, eliminando la tabla correspondiente
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Roles');
  }
};