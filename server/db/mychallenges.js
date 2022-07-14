const connection = require('./connection')

function selectMyChallenges (db = connection) {
  return db('my_challenges')
  .select()
  .join('challenges', 'my_challenges.challenge_id', 'challenges.id')
}

module.exports = {
  selectMyChallenges
}
