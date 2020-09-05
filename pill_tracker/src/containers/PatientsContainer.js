import React from 'react'
import {connect} from 'react-redux'
import {Route, Switch} from 'react-router-dom'
import {fetchPatients} from '../actions/fetchPatients'
import Patients from '../components/Patients'
import Patient from '../components/Patient'
import NavBar from '../components/NavBar'
import PatientInput from '../components/PatientInput'

class PatientsContainer extends React.Component {


  componentDidMount() {
    this.props.fetchPatients()
  }


  render() {
      return (
          <div>

            <NavBar/>

            <Switch>
              <Route path='/patients/new' component={PatientInput}/>
              <Route path='/patients/:id' render={(routerProps) => <Patient {...routerProps} patients={this.props.patients}/>}/>
              <Route path='/patients' render={(routerProps) => <Patients {...routerProps} patients={this.props.patients}/>}/>
            </Switch>

          </div>
      )
  }
}

const mapStateToProps = state => {
  return {
    patients: state.patients
  }
}

export default connect(mapStateToProps, {fetchPatients})(PatientsContainer)
