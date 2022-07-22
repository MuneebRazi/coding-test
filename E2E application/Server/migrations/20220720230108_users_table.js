
exports.up = async (knex_db) => {
  await knex_db.schema.createTable('users', function (table) {
    table.increments('id');
    table.string('fullName').notNullable();
    table.string('contact').notNullable();
    table.string('address').notNullable();
    table.integer('age').notNullable();
    table.string('email').notNullable();
    table.string('password').notNullable();
    table.timestamps(true, true);

    table.unique(['email'], `users_email`);

  })
};

exports.down = async (knex_db) => {
  await knex_db.schema.dropTable('users');
};
