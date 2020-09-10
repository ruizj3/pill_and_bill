import React from 'react';
import {connect} from 'react-redux'
import PatientsContainer from './containers/PatientsContainer'
import PrescriptionsContainer from './containers/PrescriptionsContainer'
import TakedosagesContainer from './containers/TakedosagesContainer'
import MedicationsContainer from './containers/MedicationsContainer'
import Home from './components/Home'

class App extends React.Component {

  render() {

    return (

      <div className="App">
        <Home/>
        <PatientsContainer/>
        <PrescriptionsContainer/>
        <TakedosagesContainer/>
        <MedicationsContainer/>
      </div>
    );
  }
}


export default App;
