'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class testquestion extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      this.belongsTo(models.Test, {foreignKey: 'testId' , as: 'test', targetKey:'uuid'})
      this.belongsTo(models.Question, {foreignKey: 'questionId' , as: 'question', targetKey:'uuid'})
    }
  }
  testquestion.init({
    uuid:{
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      allowNull:false,
      unique:true
    },
    isOptional:{
      type: DataTypes.Boolean,
      defaultValue: false,
    },
    testId:{
      type:DataTypes.UUID,
      allowNull:false,
      references: {
        model:'Test',
        key:'uuid'
      }
    },
    questionId:{
      type:DataTypes.UUID,
      allowNull:false,
      references: {
        model:'Question',
        key:'uuid'
      }
    }

  }, {
    sequelize,
    modelName: 'testquestion',

  });
  return testquestion;
};