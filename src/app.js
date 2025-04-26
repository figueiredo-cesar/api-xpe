const express = require("express");
const clientesRoutes = require("./routes/clienteRoutes");

const app = express();
app.use(express.json());
app.use("/clientes", clientesRoutes);

module.exports = app;
