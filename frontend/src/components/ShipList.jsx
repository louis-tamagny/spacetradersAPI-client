import { useDispatch, useSelector } from 'react-redux';
import { selectShips, setActiveShip } from '../reducers/shipsReducer';

const ShipList = () => {
  const ships = useSelector(selectShips);
  const dispatch = useDispatch();

  const iconTable = {
    ['COMMAND']: '../../ressources/icons/rocket.png',
    ['SATELLITE']: '../../ressources/icons/sputnik.svg',
    ['EXCAVATOR']: '../../ressources/icons/satellite.png',
  };

  if (!ships) {
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
