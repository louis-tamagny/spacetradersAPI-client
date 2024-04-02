const AgentInfo = ({ agentData }) => {
  return (
    <div>
      <h2>AGENT {agentData.symbol} </h2>
      <p>Faction: {agentData.startingFaction}</p>
      <p>Headquarters: {agentData.headquarters} </p>
      <p>Credits: {agentData.credits}</p>
    </div>
  )
}

export default AgentInfo
