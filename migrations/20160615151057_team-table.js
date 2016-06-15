
exports.up = function(knex, Promise) {
  return knex.schema.createTable('team', function(table) {
    table.increments();
    table.integer('country_id').references('id').inTable('country');
    table.string('player');
    table.integer('ranking');
    table.string('image_url');

  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('team');
};
