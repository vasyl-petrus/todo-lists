const createTablesSafely = (knex) => (tables) => {
  const createTables = tables.map(({ name, schema }) => {
    return knex.schema.createTable(name, schema);
  });

  return Promise.all(createTables).catch((e) => {
    const dropTables = tables.map(({ name }) => {
      return knex.schema.dropTableIfExists(name);
    });

    return Promise.all(dropTables).then(() => Promise.reject(e));
  });
};
exports.up = function (knex) {
  return createTablesSafely(knex)([
    {
      name: 'lists',
      schema(listsTable) {
        listsTable.increments('id').unsigned().primary();
        listsTable.string('name');
      },
    },
    {
      name: 'tasks',
      schema(tasksTable) {
        tasksTable.increments('id').unsigned().primary();
        tasksTable.string('text');
        tasksTable
          .foreign('list_id')
          .references('list_id')
          .inTable('lists')
          .onDelete('cascade');
      },
    },
  ]);
};

exports.down = function (knex) {
  return knex.schema.dropTable('lists');
};
