require('dotenv').config();

const headers = {
  Authorization: 'Bearer ' + process.env.TOKEN,
  'Content-Type': 'application/json',
};

const baseURL = 'https://api.spacetraders.io/v2/systems/';

const getSystemWaypoints = async (system, trait, page = 1) => {
  const options = {
    headers,
  };

  const urlParams = new URLSearchParams();
  urlParams.append('page', page);
  if (trait) {
    urlParams.append('traits', trait);
  }

  const response = await fetch(
    `${baseURL}${system}/waypoints?${urlParams}`,
    options
  );
  const data = await response.json();
  return data;
};

const getSystemAllWaypoints = async (system, trait) => {
  let dataArray = [];
  let page = 1;
  const response = await getSystemWaypoints(system, trait, page);
  dataArray = dataArray.concat(response.data);
  while (response.meta.total > page * 10) {
    page += 1;
    const res = await getSystemWaypoints(system, trait, page);
    dataArray = dataArray.concat(res.data);
  }
  return dataArray;
};

const getMarketPlaceData = async (system, waypoint) => {
  const options = {
    headers,
  };

  const response = await fetch(
    `${baseURL}${system}/waypoints/${waypoint}/market`,
    options
  );
  const data = await response.json();
  return data;
};

module.exports = {
  getSystemWaypoints,
  getMarketPlaceData,
  getSystemAllWaypoints,
};
