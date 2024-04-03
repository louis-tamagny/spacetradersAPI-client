import { useState, useEffect } from 'react';
import { getSystemWaypoint } from '../services/system';
import Waypoint from './Waypoint';
import { useDispatch, useSelector } from 'react-redux';
import {
  selectActiveWaypoint,
  selectWaypoints,
  setWaypoints,
  setActiveWaypoint,
} from '../reducers/systemReducer';
import { selectActiveShip, selectShips } from '../reducers/shipsReducer';

const Map = () => {
  const waypoints = useSelector(selectWaypoints);
  const activeWaypoint = useSelector(selectActiveWaypoint);
  const ships = useSelector(selectShips);
  const [waypointFilter, setWaypointFilter] = useState('');
  const dispatch = useDispatch();

  useEffect(() => {
    getSystemWaypoint().then((res) => {
      dispatch(setWaypoints(res));
    });
  }, []);

  if (waypoints.length === 0) {
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
                {ships.some(
                  (ship) => ship.nav.waypointSymbol === waypoint.symbol
                ) && <div className='circle'></div>}
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
