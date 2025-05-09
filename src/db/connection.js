const knex = require("knex");
const config = require("../../knexfile");

console.log(config);

const db = knex(config.development);

module.exports = db;
