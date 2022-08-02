exports.up = function (knex, Promise) {
  return knex.schema.table('challenges', function (t) {
    t.boolean('selected').defaultTo(false)
  })
}

exports.down = function (knex, Promise) {
  return knex.schema.table('challenges', function (t) {
    t.dropColumn('selected')
  })
}
