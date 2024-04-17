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
      // define association here
    }
  }
  Test.init({
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
    }
  
  }, {
    sequelize,
    modelName: 'Test',
  });
  return Test;
};