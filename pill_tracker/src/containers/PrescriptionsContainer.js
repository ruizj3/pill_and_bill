import React from 'react'
import {connect} from 'react-redux'
import {Route, Switch} from 'react-router-dom'
import {fetchPrescriptions} from '../actions/fetchPrescriptions'
import Prescriptions from '../components/Prescriptions'
import Prescription from '../components/Prescription'
import PrescriptionInput from '../components/PrescriptionInput'
import TakedosageInput from '../components/TakedosageInput'

class PrescriptionsContainer extends React.Component {


  componentDidMount() {
    Promise.all([
    this.props.fetchPrescriptions()])
  }


  render() {
      return (
          <div>

            <Switch>
              <Route path='/prescriptions/new' component={PrescriptionInput}/>
              <Route path='/takedosages/new' component={TakedosageInput}/>
              <Route path='/prescriptions/:id' render={(routerProps) => <Prescription {...routerProps} prescriptions={this.props.prescriptions}/>}/>
              <Route path='/prescriptions' render={(routerProps) => <Prescriptions {...routerProps} prescriptions={this.props.prescriptions}/>}/>
            </Switch>

          </div>
      )
  }
}

const mapStateToProps = state => {
  return {
    prescriptions: state.prescriptionReducer.prescriptions
  }
}

export default connect(mapStateToProps, {fetchPrescriptions})(PrescriptionsContainer)
