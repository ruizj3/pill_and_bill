import React from 'react';
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
          <Switch>
            <Route path='/patients' component={PatientsContainer}/>
            <Route path='/prescriptions' component={PrescriptionsContainer}/>
            <Route path='/takedosages' component={TakedosagesContainer}/>
            <Route path='/medications' component={MedicationsContainer}/>
            <Route path='/doctors' component={Doctors}/>
          </Switch>

      </div>
    );
  }
}


export default App;
