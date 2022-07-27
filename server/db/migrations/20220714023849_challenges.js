exports.up = function (knex) {
  return knex.schema.createTable('challenges', table => {
    table.increments('id')
    table.string('title')
    table.string('description')
    table.integer('points')
    table.string('level')
  })
}

exports.down = function (knex) {
  return knex.schema.dropTable('challenges')
}
