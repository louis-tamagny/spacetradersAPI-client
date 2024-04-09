import axios from 'axios';

const getSystemWaypoint = async (system, trait = '') => {
  const response = await axios.get(
    `http://localhost:3001/systems/${system}/waypoints/${trait}`
  );
  return response.data;
};
const getMarketplaceData = async (waypointSymbol) => {
  const system = waypointSymbol.slice(0, 7);
  const response = await axios.get(
    `http://localhost:3001/systems/${system}/waypoints/${waypointSymbol}/market`
  );
  return response.data.data;
};

export { getSystemWaypoint, getMarketplaceData };
