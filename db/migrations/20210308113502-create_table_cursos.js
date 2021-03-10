'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('cursos', { 
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      name: {
        allowNull: false,
        type: Sequelize.TEXT
      },
      coordinator: {
        allowNull: false,
        type: Sequelize.TEXT
      },
      start_date: {
        allowNull: false,
        type: Sequelize.DATE
      },
      status: {
        allowNull: false,
        type: Sequelize.BOOLEAN,
        defaultValue: true,
      }
    });     
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('cursos');  
  }
};
