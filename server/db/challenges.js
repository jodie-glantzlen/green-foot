const connection = require('./connection')

function selectAllChallenges (db = connection) {
  return db('challenges').select()
}

function selectChallengeById (id, db = connection) {
  return db('challenges').select().where('id', id).first()
}

function updateChallenge (id, detailToUpdate, db = connection) {
  return db('challenges').where('id', id).update(detailToUpdate) // {selected: true}
}

module.exports = {
  selectAllChallenges,
  selectChallengeById,
  updateChallenge
}
