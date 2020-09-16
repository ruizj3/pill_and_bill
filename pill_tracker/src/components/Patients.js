import React from 'react'
import {Link} from 'react-router-dom'


const Patients = props => {

  return (
    <div>
      {props.patients.map(patient =>
        <li key={patient.id}>
          <Link to={`/patients/${patient.id}`}>{patient.attributes.username}</Link>
        </li> )}
    </div>

  )
}

export default Patients
