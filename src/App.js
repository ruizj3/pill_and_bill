import React, { useEffect } from 'react';
import './App.css';

import PatientsContainer from './containers/PatientsContainer';
import PrescriptionsContainer from './containers/PrescriptionsContainer';
import TakedosagesContainer from './containers/TakedosagesContainer';
import MedicationsContainer from './containers/MedicationsContainer';
import DoctorsContainer from './containers/DoctorsContainer';

import { Route, Routes } from 'react-router-dom';
import Home from './components/Home';

const App = () => {
  useEffect(() => {
    console.log('App component mounted');
  }, []);

  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/home' element={<Home />} />
        <Route path='/patients/*' element={<PatientsContainer />} />
        <Route path='/prescriptions/*' element={<PrescriptionsContainer />} />
        <Route path='/takedosages/*' element={<TakedosagesContainer />} />
        <Route path='/medications/*' element={<MedicationsContainer />} />
        <Route path='/doctors/*' element={<DoctorsContainer />} />
      </Routes>
    </div>
  );
};

export default App;
