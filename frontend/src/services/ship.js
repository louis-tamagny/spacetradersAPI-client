import axios from 'axios'

const baseUrl = 'http://localhost:3001/agent/ships/'

const makeShipExtract = async (shipSymbol) => {
  const response = await axios.post(baseUrl + shipSymbol + '/extract')
  return response.data.data
}

const makeShipAutoExtract = async (shipSymbol) => {
  const response = await axios.post(baseUrl + shipSymbol + '/autoextract')
  return response.data.data
}

const makeShipDock = async (shipSymbol) => {
  const response = await axios.post(baseUrl + shipSymbol + '/dock')
  return response.data.data
}

const makeShipOrbit = async (shipSymbol) => {
  const response = await axios.post(baseUrl + shipSymbol + '/orbit')
  return response.data.data
}

const moveShipTo = async (shipSymbol, waypointSymbol) => {
  const response = await axios.post(
    baseUrl + shipSymbol + '/navigate/' + waypointSymbol
  )
  return response.data.data
}

const makeShipRefuel = async (shipSymbol) => {
  const response = await axios.post(baseUrl + shipSymbol + '/refuel')
  return response.data.data
}

const makeShipSell = async (shipSymbol, itemSymbol, units) => {
  const response = await axios.post(baseUrl + shipSymbol + '/sell', {
    itemSymbol,
    units,
  })
  return response.data.data
}

const makeShipJettison = async (shipSymbol, itemSymbol, units) => {
  const response = await axios.post(baseUrl + shipSymbol + '/jettison', {
    itemSymbol,
    units,
  })
  return response.data.data
}

const makeShipDeliverForContract = async (
  shipSymbol,
  itemSymbol,
  units,
  contractId = 'clufildikzcers60c1my1a0bo'
) => {
  const response = await axios.post(baseUrl + shipSymbol + '/deliver', {
    itemSymbol,
    units,
    contractId,
  })
  return response.data.data
}

export {
  makeShipExtract,
  makeShipAutoExtract,
  makeShipDock,
  makeShipOrbit,
  makeShipRefuel,
  moveShipTo,
  makeShipSell,
  makeShipJettison,
  makeShipDeliverForContract,
}
