const database = require("../models");

class ApartamentoController {
  // CREATE
  static async criaApartamento(req, res) {
    const { predioId } = req.params;
    const novoApartamento = { ...req.body, id_predio: Number(predioId) };
    try {
      const novoApartamentoCriado = await database.Apartamentos.create(
        novoApartamento
      );

      return res.status(500).json(novoApartamentoCriado);
    } catch (error) {
      return res.status(500).json(error.message);
    }
  }

  // READ
  static async pegaTodosApartamentos(req, res) {
    try {
      const todosOsApartamentos = await database.Apartamentos.findAll();

      return res.status(200).json(todosOsApartamentos);
    } catch (error) {
      return res.status(500).json(error.message);
    }
  }

  static async pegaUmApartamento(req, res) {
    const { predioId, apartamentoId } = req.params;
    try {
      const umApartamento = await database.Apartamentos.findOne({
        where: { id: Number(apartamentoId), id_predio: Number(predioId) },
      });

      if (umApartamento === null)
        return res
          .status(500)
          .json({ message: `Apartamento ${id} não existe` });

      return res.status(200).json(umApartamento);
    } catch (erro) {
      return res.status(500).json(error.message);
    }
  }

  // UPDATE
  static async atualizaApartamento(req, res) {
    const { predioId, apartamentoId } = req.params;
    const novasInfos = req.body;

    try {
      await database.Apartamentos.update(novasInfos, {
        where: { id: Number(apartamentoId), id_predio: Number(predioId) },
      });

      const apartamentoAtualizado = await database.Apartamentos.findOne({
        where: { id: Number(apartamentoId) },
      });

      return res.status(200).json(apartamentoAtualizado);
    } catch (error) {
      return res.status(500).json(error.message);
    }
  }

  // DELETE
  static async deletaApartamento(req, res) {
    const { predioId, apartamentoId } = req.params;
    try {
      await database.Apartamentos.destroy({
        where: { id: Number(apartamentoId) },
      });

      return res.status(200).json({ message: `Id ${id} deletado!` });
    } catch (error) {
      return res.status(500).json(error.message);
    }
  }
}

module.exports = ApartamentoController;
