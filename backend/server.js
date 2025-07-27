const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser')

const app = express()
const dryDockRoutes = require('./routes/drydocks')

app.use(cors())
app.use(bodyParser.json())

app.use('/api/drydocks', dryDockRoutes)

const PORT = 3001
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`)
})