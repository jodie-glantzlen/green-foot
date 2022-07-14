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

module.exports = router
