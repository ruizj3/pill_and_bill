import React from 'react'
import {connect} from 'react-redux'
import {deleteMedication} from '../actions/deleteMedication'

class MedicationDelete extends React.Component {

  state = {
    id: '',
  }

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    })

  }

  handleSubmit = (event) => {
    event.preventDefault()
    const medication = {...this.state, id: this.props.medication.id}
    this.props.deleteMedication(medication.id)
    window.location.reload(false)

  }

  render() {

    return (
      <form onSubmit={this.handleSubmit}>
        <input type="submit"/>
      </form>
    )
  }
}

MedicationDelete.defaultProps = {
  medications: {}
}


export default connect(null, {deleteMedication})(MedicationDelete)
