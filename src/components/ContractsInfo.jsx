import { selectContracts } from '../reducers/agentReducer';
import { useSelector } from 'react-redux';

const ContractsInfo = () => {
  const contracts = useSelector(selectContracts);

  if (!contracts || !typeof contracts !== 'array') {
    return <div></div>;
  }

  return (
    <div>
      <h3>Contracts</h3>
      {contracts.map((contract) => (
        <div key={contract.id}>
          Type: {contract.type}
          <br />
          Terms:
          <ul>
            {contract.terms.deliver.map((item) => (
              <li key={item.tradeSymbol}>
                Waypoint - {item.destinationSymbol}
                <br />
                Item - {item.tradeSymbol}
                <br />
                Required - {item.unitsRequired}
                <br />
                Delivered - {item.unitsFulfilled}
              </li>
            ))}
          </ul>
          Deadline - {contract.terms.deadline}
          <br />
          Down Payment - {contract.terms.payment.onAccepted}
          <br />
          Full Payment - {contract.terms.payment.onFulfilled}
        </div>
      ))}
    </div>
  );
};

export default ContractsInfo;
