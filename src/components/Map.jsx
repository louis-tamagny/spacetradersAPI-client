import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  selectActiveWaypoint,
  selectWaypoints,
  setActiveWaypoint,
} from '../reducers/systemReducer';
import { selectActiveShip, selectShips } from '../reducers/shipsReducer';

const Map = () => {
  const waypoints = useSelector(selectWaypoints);
  const activeWaypoint = useSelector(selectActiveWaypoint);
  const ships = useSelector(selectShips);
  const activeShip = useSelector(selectActiveShip);
  const [waypointFilter, setWaypointFilter] = useState('');
  const dispatch = useDispatch();

  if (!waypoints || !Array.isArray(waypoints)) {
    return <div>loading...</div>;
  }

  return (
    <div>
      <div id='map'>
        <div id='map-center'>
          {waypoints
            .filter(
              (w) =>
                waypointFilter == '' ||
                w.traits.some((trait) => trait.symbol === waypointFilter)
            )
            .map((waypoint) => (
              <div
                className='waypoint'
                key={waypoint.symbol}
                style={{
                  left: waypoint.x / 2,
                  top: waypoint.y / 2,
                  borderColor:
                    activeWaypoint.symbol &&
                    waypoint.symbol === activeWaypoint.symbol
                      ? 'red'
                      : 'white',
                }}
                onClick={(event) => {
                  event.preventDefault();
                  dispatch(setActiveWaypoint(waypoint));
                }}
              >
                {ships &&
                  Array.isArray(ships) &&
                  ships.some(
                    (ship) => ship.nav.waypointSymbol === waypoint.symbol
                  ) && (
                    <div
                      className='circle'
                      style={{
                        backgroundColor:
                          activeShip.symbol &&
                          waypoint.symbol === activeShip.nav.waypointSymbol
                            ? 'red'
                            : 'white',
                      }}
                    ></div>
                  )}
              </div>
            ))}
        </div>
      </div>
      <input
        type='text'
        onChange={(e) => setWaypointFilter(e.target.value)}
      ></input>
    </div>
  );
};

export default Map;
