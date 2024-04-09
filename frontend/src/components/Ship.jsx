import { useEffect, useState } from 'react';
import {
  makeShipAutoExtract,
  makeShipDock,
  makeShipExtract,
  makeShipOrbit,
  makeShipRefuel,
  makeShipSell,
  moveShipTo,
  makeShipJettison,
  makeShipDeliverForContract,
} from '../services/ship';
import { useDispatch, useSelector } from 'react-redux';
import { selectActiveShip, updateActiveShip } from '../reducers/shipsReducer';
import {
  selectContracts,
  updateAgent,
  updateContract,
} from '../reducers/agentReducer';
import { selectActiveWaypoint } from '../reducers/systemReducer';

const Ship = () => {
  const ship = useSelector(selectActiveShip);
  const [destination, setDestination] = useState('');
  const [autoextractItem, setAutoextractItem] = useState('');
  const activeWaypoint = useSelector(selectActiveWaypoint);
  const contracts = useSelector(selectContracts);
  const dispatch = useDispatch();

  useEffect(() => {
    setDestination(activeWaypoint.symbol || '');
  }, [activeWaypoint]);

  useEffect(() => {
    setAutoextractItem(
      contracts[0] ? contracts[0].terms.deliver[0].tradeSymbol : ''
    );
  }, [contracts]);

  const handleExtract = (event) => {
    event.preventDefault();
    makeShipExtract(ship.symbol);
  };
  const handleAutoExtract = (event) => {
    event.preventDefault();
    makeShipAutoExtract(ship.symbol, autoextractItem);
  };
  const handleOrbit = async (event) => {
    event.preventDefault();
    const data = await makeShipOrbit(ship.symbol);
    dispatch(updateActiveShip({ ...ship, nav: data.nav }));
  };
  const handleDock = async (event) => {
    event.preventDefault();
    const data = await makeShipDock(ship.symbol);
    dispatch(updateActiveShip({ ...ship, nav: data.nav }));
  };
  const handleRefuel = async (event) => {
    event.preventDefault();
    const data = await makeShipRefuel(ship.symbol);
    dispatch(updateActiveShip({ ...ship, fuel: data.fuel }));
    dispatch(updateAgent(data.agent));
  };

  const handleMoveShipTo = (event) => {
    event.preventDefault();
    moveShipTo(ship.symbol, destination);
  };

  const handleSell = (event, itemSymbol, units) => {
    event.preventDefault();
    makeShipSell(ship.symbol, itemSymbol, units);
  };

  const handleJettison = (event, itemSymbol, units) => {
    event.preventDefault();
    makeShipJettison(ship.symbol, itemSymbol, units);
  };

  const handleDeliverForContract = async (
    event,
    itemSymbol,
    units,
    contractId
  ) => {
    event.preventDefault();
    const data = await makeShipDeliverForContract(
      ship.symbol,
      itemSymbol,
      units,
      contractId
    );
    dispatch(updateActiveShip({ ...ship, cargo: data.cargo }));
    dispatch(updateContract(data.contract));
  };

  return (
    <div>
      {ship.symbol && (
        <>
          <h3>
            Name: {ship.symbol} (
            <i>
              {ship.frame.symbol} - {ship.registration.role}
            </i>
            )
          </h3>
          <p>
            Waypoint: {ship.nav.waypointSymbol} - {ship.nav.status}
            <br />
            Fuel: {ship.fuel.current}/{ship.fuel.capacity}
            <br />
          </p>
          <div>
            <h4>CARGO</h4>
            <p>
              Capacity: {ship.cargo.units}/{ship.cargo.capacity}
            </p>
            <ul>
              {ship.cargo.inventory.map((item) => (
                <li key={item.symbol}>
                  {item.symbol} - {item.units}{' '}
                  <button
                    className='text-button'
                    onClick={(event) =>
                      handleSell(event, item.symbol, item.units)
                    }
                  >
                    Sell All
                  </button>
                  <button
                    className='text-button'
                    onClick={(event) =>
                      handleJettison(event, item.symbol, item.units)
                    }
                  >
                    Jettison
                  </button>
                  <button
                    className='text-button'
                    onClick={(event) =>
                      handleDeliverForContract(event, item.symbol, item.units)
                    }
                  >
                    Deliver
                  </button>
                </li>
              ))}
            </ul>
          </div>
          {
            //SHIP CONTROLS
          }
          <div className='button-grid'>
            <button onClick={(event) => handleOrbit(event)}>Orbit</button>
            <button onClick={(event) => handleDock(event)}>Dock</button>
            <button onClick={handleRefuel}>Refuel</button>
            <button onClick={(event) => handleExtract(event)}>Extract</button>
            <button onClick={(event) => handleAutoExtract(event)}>
              Autoextract item:
            </button>
            <input
              type='text'
              value={autoextractItem}
              onChange={(e) => setAutoextractItem(e.target.value)}
            ></input>
            <div></div>

            <button onClick={(event) => handleMoveShipTo(event)}>
              {' '}
              Navigate to:
            </button>
            <input
              type='text'
              value={destination}
              onChange={(e) => setDestination(e.target.value)}
            ></input>
          </div>
        </>
      )}
    </div>
  );
};

export default Ship;
