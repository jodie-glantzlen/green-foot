exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex('my_challenges').del()
    .then(function () {
      // Inserts seed entries
      return knex('my_challenges').insert([
        { id: 1, challenge_id: 2, completed: 0}
  
      ])
    })
}
