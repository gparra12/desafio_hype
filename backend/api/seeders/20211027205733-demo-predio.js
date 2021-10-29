"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      "Predios",
      [
        {
          nome: "Take Urban Habitat",
          sigla: "TAKE",
          endereco: "Avenida Marechal Floriano Peixoto, 1212",
          cidade: "Curitiba",
          estado: "Paraná",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          nome: "Keep Urban Habitat",
          sigla: "KEEP",
          endereco: "Rua José Cadilhe, 415",
          cidade: "Curitiba",
          estado: "Paraná",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          nome: "Bloom Urban Habitat",
          sigla: "BLOOM",
          endereco: "Rua Amazonas, 1302",
          cidade: "Curitiba",
          estado: "Paraná",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          nome: "Hope City Habitat",
          sigla: "HOPE",
          endereco: "Rua Edmundo Alberto Mercer, 425",
          cidade: "Curitiba",
          estado: "Paraná",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          nome: "Pixel City Habitat",
          sigla: "PIXEL",
          endereco: "Rua Casemiro Augusto Rodacki, 103",
          cidade: "Curitiba",
          estado: "Paraná",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete("Predios", null, {});
  },
};
