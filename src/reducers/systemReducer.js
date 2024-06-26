import { createSlice } from '@reduxjs/toolkit';
import { getSystemAllWaypoints } from '../services/system';

const systemReducer = createSlice({
  name: 'system',
  initialState: {
    systemName: '',
    waypoints: [],
    activeWaypoint: {},
  },
  reducers: {
    setWaypoints(state, { payload }) {
      state.waypoints = payload;
    },
    setSystemName(state, { payload }) {
      state.systemName = payload;
    },
    setActiveWaypoint(state, { payload }) {
      state.activeWaypoint = payload;
    },
    clear(state) {
      // eslint-disable-next-line no-unused-vars
      state = systemReducer.initialState;
    },
  },
  selectors: {
    selectWaypoints(state) {
      return state.waypoints;
    },
    selectActiveWaypoint(state) {
      return state.activeWaypoint;
    },
  },
});

export const initialiseSystem = (systemSymbol) => async (dispatch) => {
  const systemData = await getSystemAllWaypoints(systemSymbol);
  dispatch(setSystemName(systemData[0].systemSymbol));
  dispatch(setWaypoints(systemData));
  dispatch(setActiveWaypoint(systemData[0]));
};

export const { selectWaypoints, selectActiveWaypoint } =
  systemReducer.selectors;
export const { setWaypoints, setActiveWaypoint, setSystemName } =
  systemReducer.actions;
export default systemReducer.reducer;
