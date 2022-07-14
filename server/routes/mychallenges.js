const express = require('express')

const db = require('../db/mychallenges')

const router = express.Router()

router.get('/mychallenges', (req, res) => {
   db.selectMyChallenges()
    .then((results) => res.json(results))
    .catch(err => {
      console.log(err)
      res.status(500).json({ message: 'Somthing went wrong' })
    })
})

router.post('/mychallenges', (req, res) => {
  const newChallenge = req.body
  db.insertMyChallenge(newChallenge)
  .then((idArr) => {
    newChallenge.id = idArr[0]
    res.json(newChallenge)
  })
})

router.patch('/mychallenges', (req, res) => {
  const id = req.body.id
  const completed = req.body

  db.updateMyChallenge(id, completed)
  .then((update) => res.json(update))
})
module.exports = router
