import React from 'react'
import {connect} from 'react-redux'
import {Route, Switch} from 'react-router-dom'
import {fetchMedications} from '../actions/fetchMedications'
import Medications from '../components/Medications'
import Medication from '../components/Medication'
import MedicationInput from '../components/MedicationInput'

class MedicationsContainer extends React.Component {


  componentDidMount() {
    Promise.all([
    this.props.fetchMedications()])
  }


  render() {
    
      return (
          <div>

            <Switch>
              <Route path='/medications/new' component={MedicationInput}/>
              <Route path='/medications/:id' render={(routerProps) => <Medication {...routerProps} medications={this.props.medications}/>}/>
              <Route path='/medications' render={(routerProps) => <Medications {...routerProps} medications={this.props.medications}/>}/>
            </Switch>

          </div>
      )
  }
}

const mapStateToProps = state => {
  return {
    medications: state.medicationReducer.medications
  }
}

export default connect(mapStateToProps, {fetchMedications})(MedicationsContainer)
