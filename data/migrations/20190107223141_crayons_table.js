exports.up = function (knex, Promise) {
  return knex.schema.createTable('crayons', table => {
    table.increments();
    table.string('color').notNullable();
    table.integer('box_id').unsigned().references('id').inTable('boxes');
  });

};

exports.down = function(knex, Promise) {
return knex.schema.dropTableIfExists('crayons');
};
