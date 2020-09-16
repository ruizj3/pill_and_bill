import React from 'react';
import {connect} from 'react-redux'
import PatientsContainer from './containers/PatientsContainer'
import PrescriptionsContainer from './containers/PrescriptionsContainer'
import TakedosagesContainer from './containers/TakedosagesContainer'
import MedicationsContainer from './containers/MedicationsContainer'

import {Route, Switch} from 'react-router-dom'
import Home from './components/Home'
import Doctors from './components/Doctors'
import NavBar from './components/NavBar'

class App extends React.Component {

  render() {

    return (

      <div className="App">
        <NavBar/>
        <Home/>
        <PatientsContainer.ListPatients/>
        <PrescriptionsContainer.ListPrecriptions/>
        <TakedosagesContainer/>
        <MedicationsContainer/>
        <Doctors.ListDoctors/>
      </div>
    );
  }
}


export default App;
