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
      aluno_name: {
        allowNull: false,
        type: Sequelize.TEXT
      },
      aluno_email: {
        allowNull: false,
        type: Sequelize.TEXT
      },
      aluno_data_nascimento: {
        allowNull: false,
        type: Sequelize.DATE
      },
      curso_id: {
        references: {
          model: 'cursos', 
          key:'id'
        },
        onDelete: 'CASCADE',
        type: Sequelize.INTEGER
      }
    })
  },

  down: async (queryInterface, Sequelize) => {
    
    return queryInterface.dropTable('inscricoes');

  }
};
