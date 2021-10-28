'use strict';
const {
  Model
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Predio extends Model {
    static associate(models) {
      Predio.hasMany(models.Apartamentos, {
        foreignKey: "id_predio"
      })
    }
  };
  Predio.init({
    nome: DataTypes.STRING,
    sigla: DataTypes.STRING,
    endereco: DataTypes.STRING,
    cidade: DataTypes.STRING,
    estado: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Predio',
  });
  return Predio;
};