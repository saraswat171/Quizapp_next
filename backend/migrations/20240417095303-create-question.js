'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Questions', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      questionname: {
        allowNull: false,
        type: Sequelize.STRING
      },
      answer: {
        allowNull: false,
        type: Sequelize.STRING
      },
      marks: {
        allowNull: false,
        type: Sequelize.INTEGER
      },
      options: {
        allowNull: false,
        type: Sequelize.ARRAY(Sequelize.STRING)
      },
      uuid:{
        type: Sequelize.UUID,
        defaultValue: Sequelize.UUIDV4,
        unique:true,
      },
      userId:{
        type: Sequelize.UUID,
        allowNull: false,
        references: {
          model: "Users",
          key: "uuid",
        },
      },
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
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Questions');
  }
};