import { createSlice } from '@reduxjs/toolkit';

const shipsReducer = createSlice({
  name: 'ships',
  initialState: {
    ships: [],
    activeShip: {},
  },
  reducers: {
    setShips(state, { payload }) {
      state.ships = payload;
    },
    setActiveShip(state, { payload }) {
      state.activeShip = payload;
    },
    updateActiveShip(state, { payload }) {
      state.ships[
        state.ships.findIndex((ship) => ship.symbol === payload.symbol)
      ] = payload;
      state.activeShip = payload;
    },
    clear(state) {
      state = initialState;
    },
  },
  selectors: {
    selectShips(state) {
      return state.ships;
    },
    selectActiveShip(state) {
      return state.activeShip;
    },
  },
});

export const { selectActiveShip, selectShips } = shipsReducer.selectors;
export const { setShips, setActiveShip, updateActiveShip } =
  shipsReducer.actions;
export default shipsReducer.reducer;
