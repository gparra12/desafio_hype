"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      "Apartamentos",
      [
        {
          codigo_apartamento: "306A",
          numero_quartos: 2,
          numero_banheiros: 2,
          numero_suites: 1,
          area_total: 51.68,
          id_predio: 1,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          codigo_apartamento: "706B",
          numero_quartos: 3,
          numero_banheiros: 3,
          numero_suites: 1,
          area_total: 92.87,
          id_predio: 2,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          codigo_apartamento: "406A",
          numero_quartos: 1,
          numero_banheiros: 1,
          numero_suites: 1,
          area_total: 37.84,
          id_predio: 3,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          codigo_apartamento: "307A",
          numero_quartos: 2,
          numero_banheiros: 1,
          numero_suites: 0,
          area_total: 30.45,
          id_predio: 4,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          codigo_apartamento: "306B",
          numero_quartos: 2,
          numero_banheiros: 2,
          numero_suites: 1,
          area_total: 55.18,
          id_predio: 5,
          createdAt: new Date(),
          updatedAt: new Date()
        },
      ],
      {}
    );
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete("Apartamentos", null, {});
  },
};
