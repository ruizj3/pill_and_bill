import React from 'react'
import {connect} from 'react-redux'
import {editMedication} from '../actions/editMedication'

class MedicationEdit extends React.Component {

  state = {
    name: '',
    priceperpill: ''
  }

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    })

  }

  handleSubmit = (event) => {
    event.preventDefault()
    const medication = {...this.state, id: this.props.medication.id}
    this.props.editMedication(medication)

    this.setState({
      name: '',
      priceperpill: ''
    })
    window.location.reload(false)

  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <label>Medication Name: </label>
          <input type='text' placeholder='Medication Name' value={this.state.name} name="name" onChange={this.handleChange}/><br/>
          <label>Price Per Pill: </label>
          <input type='text' placeholder='Price Per Pill' value={this.state.priceperpill} name="priceperpill" onChange={this.handleChange}/><br/>
          <input type="submit"/>
        </form>
      </div>
    )
  }
}

MedicationEdit.defaultProps = {
  medications: {}
}


export default connect(null, {editMedication})(MedicationEdit)
