// Update with your config settings.

/**
 * @type { Object.<string, import("knex").Knex.Config> }
 */
module.exports = {
  development: {
    client: "pg",
    connection: {
      database: "xpe",
      user: process.env.USERNAME,
      password: process.env.PASSWORD,
    },
    migrations: {
      tableName: "knex_migrations",
    },
  },
};
