import { useEffect, useState } from 'react';
import Ship from './components/Ship';
import Map from './components/Map';
import AgentInfo from './components/AgentInfo';
import ShipList from './components/ShipList';
import ContractsInfo from './components/ContractsInfo';
import Waypoint from './components/Waypoint';
import { useDispatch } from 'react-redux';
import { initialiseAll } from './reducers/thunks';

const App = () => {
  const [loaded, setLoaded] = useState(false);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(initialiseAll('X1-AK75')).then((res) => setLoaded(res));
  }, []);

  return (
    <div className='container'>
      <div>
        <AgentInfo />
        <ContractsInfo />
      </div>
      <div>
        <Map />
        <Waypoint />
      </div>
      <div>
        <ShipList />
        <Ship />
      </div>
    </div>
  );
};

export default App;
