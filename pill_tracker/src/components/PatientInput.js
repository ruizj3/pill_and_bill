import React from 'react'
import {connect} from 'react-redux'
import {addPatient} from '../actions/addPatient'

class PatientInput extends React.Component {

  state = {
    username: '',
    dob: '',
    password:'',
    doctor_id:''
  }

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  handleSubmit = (event) => {
    event.preventDefault()
    this.props.addPatient(this.state)
    this.setState({
      username: '',
      dob: '',
      password:'',
      doctor_id:''
    })
    window.location.reload(false)
    window.location.replace(`http://localhost:3001/patients`)
  }

  doctorChanged = (event) => {
    this.setState({ doctor_id: event.target.value});
  };

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <label>Patient Name: </label>
          <input type='text' placeholder='UserName' value={this.state.username} name="username" onChange={this.handleChange}/><br/>
          <label>DOB: </label>
          <input type='text' placeholder='DOB' value={this.state.dob} name="dob" onChange={this.handleChange}/><br/>
          <label>Password: </label>
          <input type='text' placeholder='Password' value={this.state.password} name="password" onChange={this.handleChange}/><br/>
          <label>Doctor Name: </label>
            <select value={this.state.doctor_id} name="doctor_id" onChange={this.doctorChanged} >
              {this.props.doctors.map(
                (doctor) => <option key={doctor.id} value={doctor.id}>{doctor.attributes.username}</option>)
              }
            </select>
          <br/>
          <input type="submit"/>
        </form>
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


export default connect(mapStateToProps, {addPatient})(PatientInput)
