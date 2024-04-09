import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import { configureStore } from '@reduxjs/toolkit';
import systemReducer from './reducers/systemReducer.js';
import { Provider } from 'react-redux';
import shipsReducer from './reducers/shipsReducer.js';
import agentReducer from './reducers/agentReducer.js';

const store = configureStore({
  reducer: { system: systemReducer, ships: shipsReducer, agent: agentReducer },
});

ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <App />
  </Provider>
);
