const express = require('express')
const router = express.Router()
const db = require('../config/dbUtils').db

router.get('/', (req, res) =>{
  res.send('Hello, you are on the api route')
})

router.post('/favorites', (req, res) => {
  const collection = db.get('favorites')

  collection.insert(req.body)
   .then((docs) => {
   }).catch((err) => {
   })
  res.send(200)
})

module.exports = router
