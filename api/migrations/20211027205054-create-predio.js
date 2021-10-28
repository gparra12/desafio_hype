'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Predios', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      nome: {
        allowNull: false,
        type: Sequelize.STRING
      },
      sigla: {
        allowNull: false,
        type: Sequelize.STRING
      },
      endereco: {
        allowNull: false,
        type: Sequelize.STRING
      },
      cidade: {
        allowNull: false,
        type: Sequelize.STRING
      },
      estado: {
        allowNull: false,
        type: Sequelize.STRING
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('Predios');
  }
};