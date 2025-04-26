/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
  return knex.schema.createTable("clientes", (table) => {
    table.increments("id");
    table.string("name");
    table.string("last_name");
    table.string("document_number");
    table.string("email").unique();
  });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function (knex) {
  return knex.schema.dropTable("clientes");
};
