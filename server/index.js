const express = require('express') // Common JS modules
require('./services/passport')

const app = express()
require('./routes/authRoutes')(app)

const PORT = process.env.PORT || 5001
app.listen(PORT)
