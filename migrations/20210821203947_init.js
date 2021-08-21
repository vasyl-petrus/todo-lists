exports.up = function (knex) {
  return knex.schema
    .createTable('lists', function (table) {
      table.increments('id').unsigned().primary();
      table.string('name');
    })
    .createTable('tasks', function (table) {
      table.increments('id').unsigned().primary();
      table.string('text');
      table.integer('list_id').unsigned();
      table.foreign('list_id').references('tasks.id').on;
    });
};

exports.down = function (knex) {
  return knex.schema.dropTable('tasks').dropTable('lists');
};
