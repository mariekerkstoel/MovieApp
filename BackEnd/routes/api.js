const express = require('express')

const router = express.Router()

router.get('/', (req, res) =>{
  res.send('Hello, you are on the api route')
})

module.exports = router
