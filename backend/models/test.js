'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Test extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
        this.belongsTo(models.User, {foreignKey: 'userId' , as: 'user', targetKey:'uuid'})
    }
  }
  Test.init({
    uuid:{
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      allowNull:false,
      unique:true
    },
    testName: {
     type: DataTypes.STRING,
     allowNull:false,
    },
   
    instruction:{
      type:DataTypes.STRING,
      allowNull:false,
    },
    duration:{
      type:DataTypes.INTEGER,
      allowNull:false
    },
    userId:{
      type:DataTypes.UUID,
      allowNull:false,
      references: {
        model:'Users',
        key:'uuid'
      }
    }
  
  }, {
    sequelize,
    modelName: 'Test',
  });
  return Test;
};