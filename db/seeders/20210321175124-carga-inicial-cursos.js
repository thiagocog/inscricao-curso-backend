'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    
    await queryInterface.bulkInsert('cursos', 
      [
        {
          name: 'Curso de Javascript',
          coordinator: 'Brendan Eich',
          start_date: '2021-04-01',
          status: true
        },
        {
          name: 'Curso de Python',
          coordinator: 'Guido van Rossum',
          start_date: '2021-05-01',
          status: true
        },
        {
          name: 'Curso de Java',
          coordinator: 'James Gosling',
          start_date: '2021-05-20',
          status: true
        },
        {
          name: 'Curso de PHP',
          coordinator: 'Rasmus Lerdorf',
          start_date: '2021-07-15',
          status: true
        },
        {
          name: 'Curso de Node.js',
          coordinator: 'Ryan Dahl',
          start_date: '2021-05-29',
          status: true
        },
        {
          name: 'Curso de React',
          coordinator: 'Jordan Walke',
          start_date: '2021-04-10',
          status: true
        }
      ],
      {
        updateOnDuplicate: ['name', 'coordinator', 'start_date', 'status'],
        ignoreDuplicates: true
      }
    )    
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('cursos', null, {});
  }
};
