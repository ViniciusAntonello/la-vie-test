'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class create - pacientes extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  create - pacientes.init({
    nome: DataTypes.STRING,
    email: DataTypes.STRING,
    idade: DataTypes.DATE
  }, {
    sequelize,
    modelName: 'create-pacientes',
  });
  return create - pacientes;
};