
exports.up = function(knex, Promise) {
  return knex.schema.createTable('country', function(table) {
    table.increments();
    table.string('name');
  })

};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('country');

};
