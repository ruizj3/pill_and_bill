import React from 'react'
import {connect} from 'react-redux'
import {deleteMedication} from '../actions/deleteMedication'

class MedicationDelete extends React.Component {

  state = {
    id: '',
  }

  handleSubmit = (event) => {
    event.preventDefault()
    const medication = {...this.state, id: this.props.medication.id}
    this.props.deleteMedication(medication.id)
    window.location.reload(false)
    window.location.replace(`http://localhost:3001/medications`)

  }

  render() {

    return (
      <form onSubmit={this.handleSubmit}>
        <button type="submit">Delete</button>
      </form>
    )
  }
}

MedicationDelete.defaultProps = {
  medications: {}
}


export default connect(null, {deleteMedication})(MedicationDelete)
