
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('crayons').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('crayons').insert([
        { color: 'blood red', box_id: 1 },
        { color: 'blue', box_id: 1 },
        { color: 'orangered', box_id: 1 }
      ]);
    });
};
