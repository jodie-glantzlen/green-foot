const connection = require('./connection')

function getmyChallenges (db = connection) {
  return db('my_challenges').select()
}

module.exports = {
  getmyChallenges
}
