import { headers, baseURL } from './constants';

// GET DATA
// no parameters
// return agent data object

const getAgentData = async () => {
  const options = {
    headers,
  };
  const response = await fetch(baseURL + 'agent', options);
  const agent = await response.json();
  return agent.data;
};

// GET SHIPS
// no parameters
// return list of ships
const getAgentShips = async () => {
  const options = {
    headers,
  };
  const response = await fetch(baseURL + 'ships', options);
  const ships = await response.json();
  return ships.data;
};

//GET CONTRACTS
const getContracts = async () => {
  const options = {
    headers,
  };
  const response = await fetch(baseURL + 'contracts', options);
  const contracts = await response.json();
  return contracts.data;
};

//ACCEPT CONTRACT
const acceptContract = (contractId) => {
  const options = {
    method: 'POST',
    headers,
  };

  fetch(
    `https://api.spacetraders.io/v2/my/contracts/${contractId}/accept`,
    options
  )
    .then((response) => response.json())
    .then((response) => console.log(response))
    .catch((err) => console.error(err));
};

export { getAgentData, getAgentShips, getContracts, acceptContract };
