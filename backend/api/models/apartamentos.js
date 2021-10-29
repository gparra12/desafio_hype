'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Apartamentos extends Model {
    static associate(models) {
      Apartamentos.belongsTo(models.Predio, {
        foreignKey: "id_predio"
      })
    }
  };
  Apartamentos.init({
    codigo_apartamento: DataTypes.STRING,
    numero_quartos: DataTypes.INTEGER,
    numero_banheiros: DataTypes.INTEGER,
    numero_suites: DataTypes.INTEGER,
    area_total: DataTypes.FLOAT
  }, {
    sequelize,
    modelName: 'Apartamentos',
  });
  return Apartamentos;
};