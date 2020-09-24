import React from 'react'
import {Link} from 'react-router-dom'


class Patients extends React.Component {

  state = {
    username: '',
  }

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  render() {console.log(this.state.username)
    const searchPatients = this.props.patients.filter(name => name.attributes.username.toLowerCase().includes(this.state.username.toLowerCase()))
  return (

    <div>
      <label>Search Patient Name: </label>
      <input name="username" onChange={this.handleChange}/>

      {searchPatients.map(patient =>
        <li key={patient.id}>
          <Link to={`/patients/${patient.id}`}>{patient.attributes.username}</Link>
        </li> )}
    </div>
  )
 }
}
export default Patients
