const express = require("express");
const predios = require("./prediosRouter");
const apartamentos = require("./apartamentosRouter");

module.exports = (app) => {
  app.use(
    express.json(),
    express.urlencoded({ extended: true }),
    predios,
    apartamentos
  );
};
