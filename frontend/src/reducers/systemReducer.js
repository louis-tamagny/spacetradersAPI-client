import { createSlice } from '@reduxjs/toolkit';

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
      state = initialState;
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

export const { selectWaypoints, selectActiveWaypoint } =
  systemReducer.selectors;
export const { setWaypoints, setActiveWaypoint } = systemReducer.actions;
export default systemReducer.reducer;
