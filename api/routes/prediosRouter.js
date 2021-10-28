const { Router } = require("express");

const PredioController = require("../controllers/PredioController");
const ApartamentoController = require("../controllers/ApartamentoController");


const router = Router();


// GET
router.get("/predios", PredioController.pegaTodosPredios); // SELECT TODOS PRÉDIOS
router.get("/predio/:id", PredioController.pegaUmPredio); // SELECT 1 PRÉDIO
router.get("/predio/:predioId/apartamento/:apartamentoId", ApartamentoController.pegaUmApartamento); // SELECT 1 APARAMENTO


// POST
router.post("/predio", PredioController.criaPredio); // CREATE PRÉDIO
router.post("/predio/:predioId/apartamento", ApartamentoController.criaApartamento); // CREATE APARTAMENTO


// PUT
router.put("/predio/:id", PredioController.atualizaPredio); // UPDATE PRÉDIO
router.put("/predio/:predioId/apartamento/:apartamentoId", ApartamentoController.atualizaApartamento); // UPDATE APARTAMENTO


// DELETE
router.delete("/predio/:id", PredioController.deletaPredio) // DELETE PRÉDIO
router.delete("/predio/:predioId/apartamento/:apartamentoId", ApartamentoController.deletaApartamento) // DELETE APARTAMENTO


module.exports = router;
