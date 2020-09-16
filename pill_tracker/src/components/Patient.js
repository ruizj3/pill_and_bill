import React from 'react'
import {Link} from 'react-router-dom'


const Patient = (props) => {

  const patient = props.patients.filter(patient => patient.id === props.match.params.id)[0]


  return (

    <div>
      <h2>
        Patient Name: {patient ? patient.attributes.username : null} DOB: {patient ? patient.attributes.dob : null}
      </h2>
      <p>Doctor Name: {patient ? patient.attributes.doctor.username : null}</p>
      Prescriptions List:
      {patient ? patient.attributes.prescription.map(prescription =>
        <li key={prescription.id}>
          <Link to={`/prescriptions/${prescription.id}`}>{prescription.id}</Link>
        </li> ) : null}<br/>
      <Link to={{pathname:`/prescriptions/new`, state: { patient_id: patient.id }}} > Add Prescription</Link>

    </div>
  )


}

export default Patient
