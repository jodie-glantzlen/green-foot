exports.up = function (knex, Promise) {
  return knex.schema.table('my_challenges', function (t) {
    t.string('user_email').defaultTo(null)
  })
}

exports.down = function (knex, Promise) {
  return knex.schema.table('my_challenges', function (t) {
    t.dropColumn('user_email')
  })
}
