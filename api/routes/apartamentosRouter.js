const { Router } = require("express");
const ApartamentoController = require("../controllers/ApartamentoController");

const router = Router();

// GET
router.get("/apartamentos", ApartamentoController.pegaTodosApartamentos);


module.exports = router;
