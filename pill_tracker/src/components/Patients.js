import React from 'react'
import {Link} from 'react-router-dom'
import Counter from './Counter'


class Patients extends React.Component {

  state = {
    username: '',
  }

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  render() {
    const searchPatients = this.props.patients.filter(name => name.attributes.username.toLowerCase().includes(this.state.username.toLowerCase()))
  return (

    <div>
      <Counter />
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
