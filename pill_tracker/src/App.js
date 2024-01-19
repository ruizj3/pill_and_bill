import React from 'react';
import PatientsContainer from './containers/PatientsContainer'
import PrescriptionsContainer from './containers/PrescriptionsContainer'
import TakedosagesContainer from './containers/TakedosagesContainer'
import MedicationsContainer from './containers/MedicationsContainer'

import {Route, Routes} from 'react-router-dom'
import Home from './components/Home'
import Doctors from './components/Doctors'
import NavBar from './components/NavBar'


class App extends React.Component {
  componentDidMount() {
    console.log('Current props:', this.props);
    console.log('Current state:', this.state);
  }
  render() {

    return (
      
      <div className="App">
        <NavBar/>

          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/home' element={<Home />} />
            <Route path='/patients/*' element={<PatientsContainer />}/>
            <Route path='/prescriptions' element={<PrescriptionsContainer />}/>
            <Route path='/takedosages' element={<TakedosagesContainer />}/>
            <Route path='/medications' element={<MedicationsContainer />}/>
            <Route path='/doctors' element={<Doctors />}/>
          </Routes>

      </div>
    );
  }
}


export default App;
