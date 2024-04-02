require('dotenv').config()

const headers = {
  Authorization: 'Bearer ' + process.env.TOKEN,
  'Content-Type': 'application/json',
}

const baseURL = 'https://api.spacetraders.io/v2/systems/'

const getSystemWaypoints = async (system, trait) => {
  const options = {
    headers,
  }

  const response = await fetch(
    `${baseURL}${system}/waypoints` + (trait ? `?traits=${trait}` : ''),
    options
  )
  const data = await response.json()
  return data
}

const getMarketPlaceData = async (system, waypoint) => {
  const options = {
    headers,
  }

  const response = await fetch(
    `${baseURL}${system}/waypoints/${waypoint}/market`,
    options
  )
  const data = await response.json()
  return data
}

module.exports = { getSystemWaypoints, getMarketPlaceData }
