const express = require('express')
const shipRouter = express.Router()
const {
  makeShipExtract,
  makeShipAutoExtract,
  makeShipOrbit,
  makeShipDock,
  moveShipTo,
  makeShipRefuel,
  makeShipSell,
  makeShipJettison,
  makeShipDeliverForContract,
} = require('../services/ships')
const { getShips } = require('../services/agent')

shipRouter.get('', async (req, res) => {
  try {
    const shipsData = await getShips()
    res.status(200).send(shipsData)
  } catch (error) {
    res.status(400).send(error)
  }
})

shipRouter.post('/:shipSymbol/extract', async (req, res) => {
  try {
    const shipData = await makeShipExtract(req.params.shipSymbol)
    res.status(200).send(shipData)
  } catch (error) {
    console.log(error)
    res.status(400).send(error)
  }
})

shipRouter.post('/:shipSymbol/autoextract', async (req, res) => {
  try {
    const shipData = await makeShipAutoExtract(req.params.shipSymbol)
    res.status(200).end()
  } catch (error) {
    console.log(error)
    res.status(400).send(error)
  }
})

shipRouter.post('/:shipSymbol/orbit', async (req, res) => {
  try {
    const shipData = await makeShipOrbit(req.params.shipSymbol)
    res.status(200).send(shipData)
  } catch (error) {
    console.log(error)
    res.status(400).send(error)
  }
})

shipRouter.post('/:shipSymbol/dock', async (req, res) => {
  try {
    const shipData = await makeShipDock(req.params.shipSymbol)
    res.status(200).send(shipData)
  } catch (error) {
    console.log(error)
    res.status(400).send(error)
  }
})

shipRouter.post('/:shipSymbol/navigate/:waypointSymbol', async (req, res) => {
  try {
    const shipData = await moveShipTo(
      req.params.shipSymbol,
      req.params.waypointSymbol
    )
    res.status(200).send(shipData)
  } catch (error) {
    console.log(error)
    res.status(400).send(error)
  }
})

shipRouter.post('/:shipSymbol/refuel', async (req, res) => {
  try {
    const data = await makeShipRefuel(
      req.params.shipSymbol,
      req.params.waypointSymbol
    )
    res.status(200).send(data)
  } catch (error) {
    console.log(error)
    res.status(400).send(error)
  }
})

shipRouter.post('/:shipSymbol/sell', async (req, res) => {
  try {
    const data = await makeShipSell(
      req.params.shipSymbol,
      req.body.itemSymbol,
      req.body.units
    )
    res.status(200).send(data)
  } catch (error) {
    console.log(error)
    res.status(400).send(error)
  }
})

shipRouter.post('/:shipSymbol/jettison', async (req, res) => {
  try {
    const data = await makeShipJettison(
      req.params.shipSymbol,
      req.body.itemSymbol,
      req.body.units
    )
    res.status(200).send(data)
  } catch (error) {
    console.log(error)
    res.status(400).send(error)
  }
})

shipRouter.post('/:shipSymbol/deliver', async (req, res) => {
  try {
    const data = await makeShipDeliverForContract(
      req.params.shipSymbol,
      req.body.itemSymbol,
      req.body.units,
      req.body.contractId
    )
    res.status(200).send(data)
  } catch (error) {
    console.log(error)
    res.status(400).send(error)
  }
})

module.exports = shipRouter
