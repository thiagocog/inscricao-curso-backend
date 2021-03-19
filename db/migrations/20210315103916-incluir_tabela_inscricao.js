'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {

    return queryInterface.createTable('inscricoes', { 
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
      email: {
        allowNull: false,
        type: Sequelize.TEXT
      },
      data_nascimento: {
        allowNull: false,
        type: Sequelize.DATE
      },
      curso_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'cursos', 
          key:'id'
        },
        onDelete: 'CASCADE'
      }
    })
  },

  down: async (queryInterface, Sequelize) => { 
    return queryInterface.dropTable('inscricoes');
  }
}
