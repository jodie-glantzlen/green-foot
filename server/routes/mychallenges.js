const express = require('express')
const db = require('../db/mychallenges')
const router = express.Router()

router.get('/mychallenges', (req, res) => {
  const query = req.query

  db.selectMyChallenges(query.user_email)
    .then((results) => res.json(results))
    .catch((err) => res.status(500).json({ msg: err.message }))
})

router.post('/mychallenges', (req, res) => {
  const newChallenge = req.body
  db.insertMyChallenge(newChallenge)
    .then((idArr) => {
      newChallenge.id = idArr[0]
      res.json(newChallenge)
    })
    .catch((err) => res.status(500).json({ msg: err.message }))
})

router.patch('/mychallenges', (req, res) => {
  const id = req.body.id
  const completed = req.body

  db.updateMyChallenge(id, completed)
    .then((update) => res.json(update))
    .catch((err) => res.status(500).json({ msg: err.message }))
})

router.delete('/mychallenges/:id', (req, res) => {
  const id = req.params.id

  db.deleteMyChallenge(id)
    .then(() => {
      res.json('delete successful')
    })
    .catch((err) => res.status(500).json({ msg: err.message }))
})

module.exports = router
