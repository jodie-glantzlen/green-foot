const connection = require('./connection')

function selectMyChallenges (db = connection) {
  return db('my_challenges')
  .select('*', 'my_challenges.id AS myChallengeId')
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

 
function deleteMyChallenge (id, db=connection) {
  return db('my_challenges').where('id', id).del()
}

module.exports = {
  selectMyChallenges,
  insertMyChallenge,
  deleteMyChallenge,
  updateMyChallenge
}
