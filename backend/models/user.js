'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      this.hasMany(models.Test, {foreignKey: 'userId', sourceKey:'uuid'})
      this.hasMany(models.Question, {foreignKey: 'userId', sourceKey:'uuid'})
    }
  }
  User.init({
    uuid:{
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      allowNull:false,
      unique:true
    },
    name: {
      type:DataTypes.STRING,
      allowNull:false,
    } ,
   
    password: {
      type:DataTypes.STRING,
      allowNull:false,

    },
    email: {
      type:DataTypes.STRING,
      allowNull:false,
      unique:true,
    },
    role: {
      type:DataTypes.ENUM('admin', 'student'),
      allowNull:false,
      unique:true,
    }
  }, {
    sequelize,
    tableName:'Users',
    modelName: 'User',
  });
  return User;
};