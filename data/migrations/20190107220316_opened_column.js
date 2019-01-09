
exports.up = function(knex, Promise) {
  return knex.schema.table('boxes', table => {
    table.boolean('opened');
  })
  
};

exports.down = function(knex, Promise) {
  return knex.schema.table('boxes', table => {
    table.dropColumn('opened');
  });
  
};
