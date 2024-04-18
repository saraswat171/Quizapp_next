'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Tests', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      testName: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      uuid:{
        type: Sequelize.UUID,
        defaultValue: Sequelize.UUIDV4,
        unique:true
      },
      instruction:{
        type:Sequelize.STRING,
        allowNull:false,
      },
      duration:{
        type:Sequelize.INTEGER,
        allowNull:false,
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
    await queryInterface.dropTable('Tests');
  }
};