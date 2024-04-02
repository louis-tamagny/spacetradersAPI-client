import axios from 'axios'

const baseUrl = 'http://localhost:3001/agent/'

const getAgentData = async () => {
  const response = await axios.get(baseUrl)
  return response.data.data
}

const getAgentShips = async () => {
  const response = await axios.get(baseUrl + 'ships')
  return response.data.data
}

const getContracts = async () => {
  const response = await axios.get(baseUrl + 'contracts')
  return response.data.data
}

export { getAgentData, getAgentShips, getContracts }
