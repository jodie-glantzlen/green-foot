exports.up = function (knex) {
  return knex.schema.createTable('my_challenges', table => {
    table.increments('id')
    table.integer('challenge_id')
    table.boolean('completed').defaultsTo(false)

  })
}

exports.down = function (knex) {
  return knex.schema.dropTable('my_challenges')
}
