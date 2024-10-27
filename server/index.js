const express = require('express') // Common JS modules
const app = express()

app.get('/', (req, res) => {
  res.send({message: 'Server listening on port 5001'})
})

app.listen(5001)
