const connection = require('./connection')

function selectMyChallenges (db = connection) {
  return db('my_challenges')
  .select()
  .join('challenges', 'my_challenges.challenge_id', 'challenges.id')
}

function insertMyChallenge (id, db= connection) {
  return db('my_challenges')
  .insert(id)
}

function updateMyChallenge (id, completed, db = connection) {
  return db('my_challenges')
  .where('id', id)
  .update(completed)  // { completed: true }
}
module.exports = {
  selectMyChallenges,
  insertMyChallenge,
  updateMyChallenge
}
