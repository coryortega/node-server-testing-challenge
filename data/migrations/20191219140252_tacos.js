
exports.up = function(knex) {
  
    return knex.schema.createTable('tacos', tbl => {
        tbl.increments();
    
        tbl.string('name', 255).notNullable();
      });

};

exports.down = function(knex) {
    return knex.schema.dropTableIfExists('tacos');
};
