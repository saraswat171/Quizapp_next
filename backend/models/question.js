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
      this.belongsTo(models.User, {foreignKey: 'userId' , as: 'user', targetKey:'uuid'})
    }
  }
  Question.init({
    uuid:{
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      unique:true
    },
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
  
    marks:{
      type: DataTypes.INTEGER,
      allowNull:false,
    },
    userId:{
      type:DataTypes.UUID,
      allowNull:false,
      references: {
        model:'Users',
        key:'uuid'
      }
    }
  }, 
  
   
  
  
  {
    sequelize,
    modelName: 'Question',
  });
  return Question;
};