const connection = require('./connection')

function selectAllChallenges (db = connection) {
  return db('challenges').select()
}

function updateChallenge (id, detailToUpdate, db = connection) {
  return db('challenges').where('id', id).update(detailToUpdate) // {selected: true}
}

module.exports = {
  selectAllChallenges,
  updateChallenge
}
