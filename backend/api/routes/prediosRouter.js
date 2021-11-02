const { Router } = require("express");

const PredioController = require("../controllers/PredioController");
const ApartamentoController = require("../controllers/ApartamentoController");

const router = Router();

// GET
router
  .get("/predios", PredioController.pegaTodosPredios) // SELECT TODOS PRÉDIOS
  .get("/predio/:predioId/apartamentos",PredioController.pegaTodosApartamentosDaquelePredio) // SELECT TODOS APARTAMENTO DE X PREDIO)
  .get("/predio/:id", PredioController.pegaUmPredio) // SELECT 1 PRÉDIO
  .get("/predio/:predioId/apartamento/:apartamentoId",ApartamentoController.pegaUmApartamento); // SELECT 1 APARTAMENTO);

// POST
router
  .post("/predio", PredioController.criaPredio) // CREATE PRÉDIO
  .post("/predio/:predioId/apartamento", ApartamentoController.criaApartamento); // CREATE APARTAMENTO

// PUT
router
  .put("/predio/:id", PredioController.atualizaPredio) // UPDATE PRÉDIO
  .put("/predio/:predioId/apartamento/:apartamentoId",ApartamentoController.atualizaApartamento); // UPDATE APARTAMENTO

// DELETE
router
  .delete("/predio/:id", PredioController.deletaPredio) // DELETE PRÉDIO
  .delete("/predio/:predioId/apartamento/:apartamentoId",ApartamentoController.deletaApartamento); // DELETE APARTAMENTO

module.exports = router;
