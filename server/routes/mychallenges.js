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

module.exports = router
