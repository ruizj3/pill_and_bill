import React from 'react';
import { createRoot } from 'react-dom/client'; // Import createRoot
import { configureStore } from '@reduxjs/toolkit';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

import patientReducer from './reducers/patientReducer'
import prescriptionReducer from './reducers/prescriptionReducer'
import takedosageReducer from './reducers/takedosageReducer'
import medicationReducer from './reducers/medicationReducer'
import doctorReducer from './reducers/doctorReducer'

import App from './App';
import './index.css';
import NavBar from './components/NavBar'
//const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

// Automatically adds the thunk middleware and the Redux DevTools extension
const store = configureStore({
  // Automatically calls `combineReducers`
  reducer: {
    patientsRed: patientReducer,
    prescriptionsRed: prescriptionReducer,
    takedosagesRed: takedosageReducer,
    medicationsRed: medicationReducer,
    doctorsRed: doctorReducer
  }
})

const container = document.getElementById('root'); // Get the root container
const root = createRoot(container); // Create a root

// Use the root to render the App
root.render(
  <Provider store={store}>
    <Router basename="/pill_and_bill">
      <NavBar/>
      <App />
      (R)Pill and Bill
    </Router>
  </Provider>
);
