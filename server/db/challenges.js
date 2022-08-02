const connection = require('./connection')

function selectAllChallenges (db = connection) {
  return db('challenges').select()
}



module.exports = {
  selectAllChallenges
}
