import React from 'react'
import {connect} from 'react-redux'
import {addPrescription} from '../actions/addPrescription'


class PrescriptionInput extends React.Component {

  state = {
    dosagestotal: '',
    dosagesper: '',
    dosagesfrequency:'',
    patient_id:this.props.history.location.state ? this.props.history.location.state.patient_id : '',
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
    window.location.replace(`http://localhost:3001/prescriptions`)
  }

  optionChanged = (event) => {
    this.setState({ patient_id: event.target.value});
  };

  medicationChanged = (event) => {
    this.setState({ medication_id: event.target.value});
  };

  render() {

    return (
      <div>

        <form onSubmit={this.handleSubmit}>
          <label>Patient Name: </label>
            <select value={this.state.patient_id} name="patient_id" onChange={this.optionChanged} >
              {this.props.patients.map(
                (patient) => <option key={patient.id} value={patient.id}>{patient.attributes.username}</option>)
              }
            </select>
          <br/>
          <label>Medication Name: </label>
            <select value={this.state.medication_id} name="medication_id" onChange={this.medicationChanged} >
              {this.props.medications.map(
                (medication) => <option key={medication.id} value={medication.id}>{medication.attributes.name}</option>)
              }
            </select>
          <br/>
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

const mapStateToProps = state => {
  return {
    prescriptions: state.prescriptionReducer.prescriptions,
    patients: state.patientReducer.patients,
    medications: state.medicationReducer.medications
  }
}


export default connect(mapStateToProps, {addPrescription})(PrescriptionInput)
