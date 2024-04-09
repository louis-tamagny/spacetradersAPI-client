import { initalizeAgentData, initialiseContracts } from './agentReducer';
import { initialiseShips } from './shipsReducer';
import { initialiseSystem } from './systemReducer';

export const initialiseAll = (systemSymbol) => async (dispatch) => {
  dispatch(initialiseSystem(systemSymbol));
  dispatch(initalizeAgentData());
  dispatch(initialiseContracts());
  dispatch(initialiseShips());
  return true;
};
