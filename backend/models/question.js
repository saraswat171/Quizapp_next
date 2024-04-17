'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Question extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Question.init({
    questionname: {
      type:DataTypes.STRING,
      allowNull:false,
    },
    answer: {
      type:DataTypes.STRING,
      allowNull:false,
    },
    options: {
      type:DataTypes.ARRAY(DataTypes.STRING),
      allowNull:false,
    },
    uuid:{
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
    },
    marks:{
      type: DataTypes.INTEGER,
      allowNull:false,
    }
  }, 
  
   
  
  
  {
    sequelize,
    modelName: 'Question',
  });
  return Question;
};