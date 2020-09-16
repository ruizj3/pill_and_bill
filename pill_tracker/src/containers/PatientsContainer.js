import React from 'react'
import {connect} from 'react-redux'
import {Route, Switch} from 'react-router-dom'
import {fetchPatients} from '../actions/fetchPatients'
import Patients from '../components/Patients'
import Patient from '../components/Patient'
import PatientInput from '../components/PatientInput'

import {fetchDoctors} from '../actions/fetchDoctors'


class PatientsContainer extends React.Component {


  componentDidMount() {
    Promise.all([
    this.props.patients])
  }


  render() {
      return (
          <div>

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
    patients: state.patientReducer.patients,
    doctors: state.doctorReducer.doctors
  }
}

function mapDispatchToProps(dispatch) {
  return {
    actions: {
      fetchPatients: dispatch(fetchPatients()),
      fetchDoctors: dispatch(fetchDoctors())
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(PatientsContainer)
