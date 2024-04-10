import { createSlice } from '@reduxjs/toolkit';
import { getAgentData, getContracts } from '../services/agent';

const agentReducer = createSlice({
  name: 'agent',
  initialState: {
    agent: {},
    contracts: [],
  },
  reducers: {
    updateAgent(state, { payload }) {
      state.agent = payload;
    },
    setContracts(state, { payload }) {
      state.contracts = payload;
    },
    updateContract(state, { payload }) {
      initialState.contracts[
        initialState.contracts.findIndex(
          (contract) => contract.id === payload.id
        )
      ] = payload;
    },
  },
  selectors: {
    selectAgent(state) {
      return state.agent;
    },
    selectContracts(state) {
      return state.contracts;
    },
  },
});

// Fetch Agent Data from the backend and dispatch it to the store
export const initalizeAgentData = () => async (dispatch) => {
  const agentData = await getAgentData();
  dispatch(updateAgent(agentData));
};

// Thunk function to fetch contracts data and dispatch it to the store
export const initialiseContracts = () => async (dispatch) => {
  const contractsData = await getContracts();
  dispatch(setContracts(contractsData));
};

export const { updateAgent, updateContract, setContracts } =
  agentReducer.actions;
export const { selectAgent, selectContracts } = agentReducer.selectors;

export default agentReducer.reducer;
