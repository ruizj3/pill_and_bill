import React from 'react'
import {connect} from 'react-redux'
import {addPrescription} from '../actions/addPrescription'

class PrescriptionInput extends React.Component {

  state = {
    dosagestotal: '',
    dosagesper: '',
    dosagesfrequency:'',
    patient_id:'',
    medication_id:''
  }

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  handleSubmit = (event) => {
    event.preventDefault()
    this.props.addPrescription(this.state)
    this.setState({
      dosagestotal: '',
      dosagesper: '',
      dosagesfrequency:'',
      patient_id:'',
      medication_id:''
    })
    window.location.reload(false)
    window.location.replace(`http://localhost:3001/patients`)
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <label>Patient ID: </label>
          <input type='text' placeholder='Patient_ID' value={this.state.patient_id} name="patient_id" onChange={this.handleChange}/><br/>
          <label>Medication ID: </label>
          <input type='text' placeholder='Medication_ID' value={this.state.medication_id} name="medication_id" onChange={this.handleChange}/><br/>
          <label>Dosages Total: </label>
          <input type='text' placeholder='Dosages Total' value={this.state.dosagestotal} name="dosagestotal" onChange={this.handleChange}/><br/>
          <label>Dosages Per: </label>
          <input type='text' placeholder='Dosages Per' value={this.state.dosagesper} name="dosagesper" onChange={this.handleChange}/><br/>
          <label>Dosages Frequency: </label>
          <input type='text' placeholder='Dosages Frequency' value={this.state.dosagesfrequency} name="dosagesfrequency" onChange={this.handleChange}/><br/>
          <input type="submit"/>
        </form>
      </div>
    )
  }
}


export default connect(null, {addPrescription})(PrescriptionInput)
