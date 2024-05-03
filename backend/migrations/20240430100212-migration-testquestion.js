'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    return queryInterface.sequelize.transaction(t=>{
      return  Promise.all([
        queryInterface.addColumn(
          'testquestions', // table name
          'uuid', // new field name
          {
            type: Sequelize.UUID,
            defaultValue: Sequelize.UUIDV4,
            unique:true,
          
          },{ transaction: t },
        ),
        queryInterface.addColumn(
          'testquestions', // table name
          'testId', // new field name
          {
            type: Sequelize.UUID,
            defaultValue: Sequelize.UUIDV4,
            unique:true,
            references: {
              model: "Tests",
              key: "uuid",
            },
          },{ transaction: t },
        ),
        queryInterface.addColumn(
          'testquestions', // table name
          'questionId', // new field name
          {
            type: Sequelize.UUID,
            defaultValue: Sequelize.UUIDV4,
            unique:true,
            references: {
              model: "Questions",
              key: "uuid",
            },
          },{ transaction: t },
        ),
      ])
    })
   
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('users');
     */
    return queryInterface.sequelize.transaction(t => {
      return Promise.all([
        queryInterface.removeColumn('testquestions', 'uuid', { transaction: t }),
        queryInterface.removeColumn('testquestions', 'testId', { transaction: t }),
        queryInterface.removeColumn('testquestions', 'questionId', {
          transaction: t,
        }),
      ]);
    });
  }
};
