import { createSlice } from '@reduxjs/toolkit';

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

export const { updateAgent, updateContract } = agentReducer.actions;
export const { selectAgent } = agentReducer.selectors;

export default agentReducer.reducer;
