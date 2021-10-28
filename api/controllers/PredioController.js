const database = require("../models");

class PredioController {
  // CREATE
  static async criaPredio(req, res) {
    const novoPredio = req.body;
    try {
      const novoPredioCriado = await database.Predio.create(novoPredio);

      return res.status(500).json(novoPredioCriado);
    } catch (error) {
      return res.status(500).json(error.message);
    }
  }

  // READ
  static async pegaTodosPredios(req, res) {
    try {
      const todosOsPredios = await database.Predio.findAll();

      return res.status(200).json(todosOsPredios);
    } catch (error) {
      return res.status(500).json(error.message);
    }
  }

  static async pegaUmPredio(req, res) {
    const { id } = req.params;
    try {
      const umPredio = await database.Predio.findOne({
        where: { id: Number(id) },
      });

      return res.status(200).json(umPredio);
    } catch (erro) {
      return res.status(500).json(error.message);
    }
  }

  // UPDATE
  static async atualizaPredio(req, res) {
    const novasInfos = req.body;
    const { id } = req.params;

    try {
      await database.Predio.update(novasInfos, { where: { id: Number(id) } });

      const predioAtualizado = await database.Predio.findOne({
        where: { id: Number(id) },
      });

      return res.status(200).json(predioAtualizado);
    } catch (error) {
      return res.status(500).json(error.message);
    }
  }

  // DELETE
  static async deletaPredio(req, res) {
    const { id } = req.params;
    try {
      await database.Predio.destroy({ where: { id: Number(id) } });

      return res.status(200).json({mensagem: `Id ${id} deletado!`})
    } catch (error) {
      return res.status(500).json(error.message);
    }
  }
}

module.exports = PredioController;
