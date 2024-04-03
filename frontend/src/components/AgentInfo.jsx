import { useSelector } from 'react-redux';
import { selectAgent } from '../reducers/agentReducer';

const AgentInfo = () => {
  const agent = useSelector(selectAgent);

  return (
    <div>
      {agent.symbol && (
        <>
          <h2>AGENT {agent.symbol} </h2>
          <p>Faction: {agent.startingFaction}</p>
          <p>Headquarters: {agent.headquarters} </p>
          <p>Credits: {agent.credits}</p>
        </>
      )}
    </div>
  );
};

export default AgentInfo;
