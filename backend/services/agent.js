require('dotenv').config()

const headers = {
  Authorization: 'Bearer ' + process.env.TOKEN,
  'Content-Type': 'application/json',
}

const baseURL = 'https://api.spacetraders.io/v2/my/'

// GET DATA
// no parameters
// return agent data object

const getAgentData = async () => {
  const options = {
    headers,
  }
  const response = await fetch(baseURL + 'agent', options)
  const agentData = await response.json()
  return agentData
}

// GET SHIPS
// no parameters
// return list of ships
const getShips = async () => {
  const options = {
    headers,
  }
  const response = await fetch(baseURL + 'ships', options)
  const ships = await response.json()
  return ships
}

//GET CONTRACTS
const getContracts = async () => {
  const options = {
    headers,
  }
  const response = await fetch(baseURL + 'contracts', options)
  const data = await response.json()
  return data
}

//VIEW LOCATION
// parameters: system and waypoint
const getLocation = (waypoint) => {
  const options = {
    headers,
  }

  const system = waypoint.slice(0, 7)

  fetch(
    `https://api.spacetraders.io/v2/systems/${system}/waypoints/${waypoint}`,
    options
  )
    .then((response) => response.json())
    .then((response) => console.log(response))
    .catch((err) => console.error(err))
}

//ACCEPT CONTRACT
const acceptContract = (contractId) => {
  const options = {
    method: 'POST',
    headers,
  }

  fetch(
    `https://api.spacetraders.io/v2/my/contracts/${contractId}/accept`,
    options
  )
    .then((response) => response.json())
    .then((response) => console.log(response))
    .catch((err) => console.error(err))
}

//VIEW SPECIFIC WAYPOINTS IN SYSTEM
const viewSpecificWaypoints = (system, trait) => {
  const options = {
    headers,
  }

  fetch(
    `https://api.spacetraders.io/v2/systems/${system}/waypoints?traits=${trait}`,
    options
  )
    .then((response) => response.json())
    .then((response) => console.log(response))
    .catch((err) => console.error(err))
}

module.exports = { getAgentData, getShips, getContracts }
