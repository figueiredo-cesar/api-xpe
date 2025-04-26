const ClienteService = require("../services/ClienteService");

module.exports = {
  async count(req, res) {
    const resp = await ClienteService.count();
    res.json({ totalClientes: resp[0].count });
  },

  async findAll(req, res) {
    const clientes = await ClienteService.getAll();
    res.json(clientes);
  },

  async findById(req, res) {
    try {
      const cliente = await ClienteService.getById(req.params.id);
      res.json(cliente);
    } catch (err) {
      res.status(404).json({ error: err.message });
    }
  },

  async findByName(req, res) {
    try {
      const clientes = await ClienteService.getByName(req.params.name);
      res.json(clientes);
    } catch (err) {
      res.status(404).json({ error: err.message });
    }
  },

  async create(req, res) {
    const cliente = await ClienteService.create(req.body);
    res.status(201).json(cliente[0]);
  },

  async update(req, res) {
    const cliente = await ClienteService.update(req.params.id, req.body);
    res.json(cliente[0]);
  },

  async delete(req, res) {
    await ClienteService.delete(req.params.id);
    res.status(204).send();
  },
};
