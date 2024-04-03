import { useState } from 'react';
import Ship from './Ship';
import { getAgentShips } from '../services/agent';
import { useDispatch, useSelector } from 'react-redux';
import { selectShips, setActiveShip, setShips } from '../reducers/shipsReducer';

const ShipList = () => {
  const ships = useSelector(selectShips);
  const dispatch = useDispatch();

  useState(() => {
    getAgentShips().then((res) => {
      dispatch(setShips(res));
    });
  }, []);

  const iconTable = {
    ['COMMAND']: '../../ressources/icons/rocket.png',
    ['SATELLITE']: '../../ressources/icons/sputnik.svg',
    ['EXCAVATOR']: '../../ressources/icons/satellite.png',
  };

  if (ships.length === 0) {
    return <div>loading...</div>;
  }

  return (
    <div>
      <div id='ship-list'>
        {ships.length > 0 &&
          ships.map((ship) => (
            <img
              src={iconTable[ship.registration.role]}
              className='ship-icon'
              key={ship.symbol}
              onClick={(event) => {
                event.preventDefault();
                dispatch(setActiveShip(ship));
              }}
            />
          ))}
      </div>
    </div>
  );
};

export default ShipList;
