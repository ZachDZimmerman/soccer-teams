
exports.seed = function(knex, Promise) {
  return knex('team').del().then(function() {
    return Promise.all([

    knex('country').insert({id: 1, name: 'Argentina'}),
    knex('country').insert({id: 2, name: 'Portugal'}),
    knex('country').insert({id: 3, name: 'Brazil'})
    ]);
  });
};
