const db = require("../db/connection");

const Cliente = {
  getAll: () => db("clientes"),
  getByName: (name) => db("clientes").where({ name }).first(),
  getById: (id) => db("clientes").where({ id }).first(),
  create: (cliente) => db("clientes").insert(cliente).returning("*"),
  update: (id, cliente) =>
    db("clientes").where({ id }).update(cliente).returning("*"),
  delete: (id) => db("clientes").where({ id }).del(),
  count: () => db("clientes").count(),
};

module.exports = Cliente;
