import React from 'react'
import {connect} from 'react-redux'
import {Route, Switch} from 'react-router-dom'
import {fetchDoctors} from '../actions/fetchDoctors'

class Doctors extends React.Component {


  componentDidMount() {
    Promise.all([
    this.props.fetchDoctors()])
  }


  render() {

      return (
        <div>
        </div>)
  }
}

const mapStateToProps = state => {
  return {
    doctors: state.doctorReducer.doctors,
  }
}

export default connect(mapStateToProps, {fetchDoctors})(Doctors)
