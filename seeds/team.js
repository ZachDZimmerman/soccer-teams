
exports.seed = function(knex, Promise) {
  return knex('team').del().then(function() {
    return Promise.all([
      knex('team').insert({
        country_id: 1,
        player: "Messi",
        ranking: 1, image_url:'https://upload.wikimedia.org/wikipedia/commons/thumb/1/1a/Flag_of_Argentina.svg/2000px-Flag_of_Argentina.svg.png'
      }),
      knex('team').insert({
        country_id: 2,
        player: 'Ronaldo (but not the real one)',
        ranking: 8, image_url:'https://upload.wikimedia.org/wikipedia/commons/thumb/5/5c/Flag_of_Portugal.svg/2000px-Flag_of_Portugal.svg.png'
      }),
      knex('team').insert({
        country_id: 3,
        player: 'Neymar' ,
        ranking: 7, image_url:'https://upload.wikimedia.org/wikipedia/en/thumb/0/05/Flag_of_Brazil.svg/1280px-Flag_of_Brazil.svg.png'
      })
    ])
  })
};
