"use strict";
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable("Apartamentos", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      id_predio: {
        allowNull: false,
        references: { model: "Predios", key: "id" },
        type: Sequelize.INTEGER,
      },
      codigo_apartamento: {
        allowNull: false,
        type: Sequelize.STRING,
      },
      numero_quartos: {
        allowNull: false,
        type: Sequelize.INTEGER,
      },
      numero_banheiros: {
        allowNull: false,
        type: Sequelize.INTEGER,
      },
      numero_suites: {
        type: Sequelize.INTEGER,
      },
      area_total: {
        allowNull: false,
        type: Sequelize.FLOAT,
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable("Apartamentos");
  },
};
