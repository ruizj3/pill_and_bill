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
  }

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
          <label>Doctor_ID: </label>
          <input type='text' placeholder='Doctor_ID' value={this.state.doctor_id} name="doctor_id" onChange={this.handleChange}/><br/>
          <input type="submit"/>
        </form>
      </div>
    )
  }
}


export default connect(null, {addPatient})(PatientInput)
