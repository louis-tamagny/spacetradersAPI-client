const express = require('express')
const {
  getSystemWaypoints,
  getMarketPlaceData,
} = require('../services/systems')
const systemRouter = express.Router()

// GET WAYPOINTS OF DESIRED SYSTEM
systemRouter.get('/:system/waypoints/:type?', async (req, res) => {
  try {
    const data = await getSystemWaypoints(req.params.system, req.params.type)
    res.status(200).send(data)
  } catch (error) {
    res.status(400).send(error)
  }
})

// GET MARKETPLACE INFORMATIONS
systemRouter.get('/:system/waypoints/:waypoint/market', async (req, res) => {
  try {
    const data = await getMarketPlaceData(
      req.params.system,
      req.params.waypoint
    )
    res.status(200).send(data)
  } catch (error) {
    res.status(400).send(error)
  }
})

module.exports = systemRouter
