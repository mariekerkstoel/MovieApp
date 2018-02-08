const express = require('express')

const router = express.Router()

router.get('/', (req, res) =>{
  res.send('Hello, you are on the api route')
})

router.post('/favorites', (req, res) => {
  console.log(req.body)
  res.send(200)
})

module.exports = router
