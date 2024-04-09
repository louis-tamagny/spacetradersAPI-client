import { useDispatch, useSelector } from 'react-redux';
import { initalizeAgentData, selectAgent } from '../reducers/agentReducer';
import { useEffect } from 'react';

const AgentInfo = () => {
  const agent = useSelector(selectAgent);

  return (
    <div>
      {agent && agent.symbol && (
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
