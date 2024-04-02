const express = require('express')
const agentRouter = express.Router()
const { getAgentData, getContracts } = require('../services/agent')

agentRouter.get('/', async (req, res) => {
  try {
    const agentData = await getAgentData()
    res.status(200).send(agentData)
  } catch (error) {
    res.status(400).end('failure')
  }
})

agentRouter.get('/contracts', async (req, res) => {
  try {
    const contractData = await getContracts()
    res.status(200).send(contractData)
  } catch (error) {
    res.status(400).end('failure')
  }
})

module.exports = agentRouter
