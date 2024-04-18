'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    return Promise.all([
      queryInterface.addColumn(
        'Users', // table name
        'uuid', // new field name
        {
          type: Sequelize.UUID,
          defaultValue: Sequelize.UUIDV4,
          unique:true,
        },
      ),
    ])
  },

  async down (queryInterface, Sequelize) {
    return Promise.all([
      queryInterface.removeColumn('Users', 'uuid'),
   
    ]);
  }
};
