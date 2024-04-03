import { useEffect, useState } from 'react';
import { getAgentData, getAgentShips } from './services/agent';
import Ship from './components/Ship';
import Map from './components/Map';
import AgentInfo from './components/AgentInfo';
import ShipList from './components/ShipList';
import ContractsInfo from './components/ContractsInfo';
import Waypoint from './components/Waypoint';

const App = () => {
  const [agentData, setAgentData] = useState(null);
  const [ships, setShips] = useState([]);

  useEffect(() => {
    getAgentData().then((res) => setAgentData(res));
    getAgentShips().then((res) => setShips(res));
  }, []);

  if (!agentData) {
    return <div>loading...</div>;
  }

  return (
    <div className='container'>
      <div>
        <AgentInfo agentData={agentData} />
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
