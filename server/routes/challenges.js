const express = require('express')

const db = require('../db/challenges')

const router = express.Router()

router.get('/', (req, res) => {
  db.selectAllChallenges()
    .then((allChallenges) => {
      res.json(allChallenges)
    })
    .catch(err => console.log(err.message))
})

router.patch('/', (req, res) => {
  const id = req.body.id
  const detailToUpdate = { selected: req.body.selected }
  console.log('from routes: ', req.body)

  db.updateChallenge(id, detailToUpdate)
    .then((updatedChallenge) => {
      res.json(updatedChallenge)
    })
    .catch((err) => res.status(500).json({ msg: err.message }))
})

module.exports = router
