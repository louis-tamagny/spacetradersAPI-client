import { useSelector } from 'react-redux';
import { selectAgent } from '../reducers/agentReducer';

const AgentInfo = () => {
  const agent = useSelector(selectAgent);

  if (!agent || !agent.symbol) {
    return <div>loading...</div>;
  }

  return (
    <div>
      <h2>AGENT {agent.symbol} </h2>
      <p>Faction: {agent.startingFaction}</p>
      <p>Headquarters: {agent.headquarters} </p>
      <p>Credits: {agent.credits}</p>
    </div>
  );
};

export default AgentInfo;
