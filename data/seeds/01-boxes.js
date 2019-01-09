
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('boxes').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('boxes').insert([
        {count: 8, brand: 'Crayola', opened: 1},
        { count: 24, brand: 'Crayola', opened: 1 },
        { count: 32, brand: 'RossArt', opened: 1 }

      ]);
    });
};
