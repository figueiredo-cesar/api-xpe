const Cliente = require("../models/Cliente");

module.exports = {
  async count() {
    return Cliente.count();
  },

  async getAll() {
    return Cliente.getAll();
  },

  async getById(id) {
    const cliente = await Cliente.getById(id);
    if (!cliente) throw new Error("Cliente não encontrado");
    return cliente;
  },

  async getByName(name) {
    const clientes = await Cliente.getByName(name);
    if (!clientes.length) throw new Error("Cliente não encontrado");
    return clientes;
  },

  async create(data) {
    return Cliente.create(data);
  },

  async update(id, data) {
    return Cliente.update(id, data);
  },

  async delete(id) {
    return Cliente.delete(id);
  },
};
