exports.up = function (knex) {
  return knex.schema.createTable("users", function (table) {
    table.increments("id").primary();
    table.string("email").unique().index();
    table.string("username").unique().index();
    table.string("password");
    table.string("recovery_code");
    table.string("confirmation_code");
    table.timestamps(true, true);
  });
};

exports.down = function (knex) {
  return knex.schema.dropTable("users");
};
