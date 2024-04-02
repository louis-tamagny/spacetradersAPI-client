const express = require('express')
const cors = require('cors')
const dotenv = require('dotenv')
const agentRouter = require('./routes/agent')
const shipRouter = require('./routes/shipRouter')
const systemRouter = require('./routes/systemRouter')
dotenv.config()

const PORT = process.env.PORT

const app = express()

app.use(express.json())
app.use(cors())

app.use('/agent', agentRouter)
app.use('/agent/ships', shipRouter)
app.use('/systems', systemRouter)

app.listen(PORT, () => {
  console.log('server running on port' + PORT)
})
