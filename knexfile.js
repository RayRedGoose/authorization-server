module.exports = {
  development: {
    client: "pg",
    connection: "postgres://localhost/auth_server",
    migrations: {
      directory: "./src/db/migrations",
    },
    seeds: {
      directory: "./src/db/seeds/dev",
    },
    useNullAsDefault: true,
  },
  production: {
    client: "pg",
    connection: process.env.DATABASE_URL + `?ssl=true`,
    migrations: {
      directory: "./src/db/migrations",
    },
    seeds: {
      directory: "./src/db/seeds/dev",
    },
    useNullAsDefault: true,
  },
  test: {
    client: "pg",
    connection: "postgres://localhost/auth_server_test",
    migrations: {
      directory: "./src/db/migrations",
    },
    seeds: {
      directory: "./src/db/seeds/test",
    },
    useNullAsDefault: true,
  },
};
