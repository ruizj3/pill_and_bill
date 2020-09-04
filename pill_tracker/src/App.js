import React from 'react';
import {connect} from 'react-redux'
import PatientsContainer from './containers/PatientsContainer'

class App extends React.Component {

  render() {
    return (
      <div className="App">
        <PatientsContainer/>
      </div>
    );
  }
}


export default App;
