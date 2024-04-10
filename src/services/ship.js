import { headers } from './constants';

const baseURL = 'https://api.spacetraders.io/v2/my/ships/';

const makeShipExtract = async (shipSymbol) => {
  const options = {
    method: 'POST',
    headers,
  };
  const response = await fetch(baseURL + shipSymbol + '/extract', options);
  const agentData = await response.json();
  return agentData.data;
};

const makeShipAutoExtract = async (shipSymbol, itemSymbols) => {
  try {
    const response = await makeShipExtract(shipSymbol);
    console.log(
      shipSymbol + ' - autoextract:',
      response.data.extraction.yield,
      response.data.events
    );
    if (response.error) {
      throw new Error(response.error.message);
    }
    if (
      itemSymbols.length > 0 &&
      !itemSymbols.includes(response.data.extraction.yield.symbol)
    ) {
      console.log('dropping unnecessary products');
      await makeShipJettison(
        shipSymbol,
        response.data.extraction.yield.symbol,
        response.data.extraction.yield.units
      );
    }

    if (0.9 * response.data.cargo.capacity > response.data.cargo.units) {
      setTimeout(
        async () => makeShipAutoExtract(shipSymbol),
        response.data.cooldown.totalSeconds * 1000
      );
    }
  } catch (error) {
    console.log(error);
  }
};

const makeShipDock = async (shipSymbol) => {
  const options = {
    method: 'POST',
    headers,
  };
  const response = await fetch(baseURL + shipSymbol + '/dock', options);
  const agentData = await response.json();
  return agentData.data;
};

const makeShipOrbit = async (shipSymbol) => {
  const options = {
    method: 'POST',
    headers,
  };
  const response = await fetch(baseURL + shipSymbol + '/orbit', options);
  const agentData = await response.json();
  return agentData.data;
};

const moveShipTo = async (shipSymbol, waypointSymbol) => {
  const options = {
    method: 'POST',
    headers,
    body: JSON.stringify({ waypointSymbol: waypointSymbol }),
  };
  const response = await fetch(baseURL + shipSymbol + '/navigate', options);
  const shipData = await response.json();
  return shipData.data;
};

const makeShipRefuel = async (shipSymbol) => {
  const options = {
    method: 'POST',
    headers,
  };
  const response = await fetch(baseURL + shipSymbol + '/refuel', options);
  const agentData = await response.json();
  return agentData.data;
};

const makeShipSell = async (shipSymbol, itemSymbol, units) => {
  const options = {
    method: 'POST',
    headers,
    body: JSON.stringify({ symbol: itemSymbol, units: units }),
  };
  const response = await fetch(baseURL + shipSymbol + '/sell', options);
  const shipData = await response.json();
  return shipData.data;
};

const makeShipJettison = async (shipSymbol, itemSymbol, units) => {
  const options = {
    method: 'POST',
    headers,
    body: JSON.stringify({ symbol: itemSymbol, units: units }),
  };
  const response = await fetch(baseURL + shipSymbol + '/jettison', options);
  const shipData = await response.json();
  return shipData.data;
};

const makeShipDeliverForContract = async (
  shipSymbol,
  itemSymbol,
  units,
  contractId
) => {
  const options = {
    method: 'POST',
    headers,
    body: JSON.stringify({
      shipSymbol: shipSymbol,
      tradeSymbol: itemSymbol,
      units: units,
    }),
  };
  const response = await fetch(
    `https://api.spacetraders.io/v2/my/contracts/${contractId}/deliver`,
    options
  );
  const shipData = await response.json();
  return shipData.data;
};
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
};
