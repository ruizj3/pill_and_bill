import React from 'react'
import {Route, Link} from 'react-router-dom'
import Prescription from './Prescription'

const Prescriptions = props => {
  const today = new Date()
  return (
    <div>
      {props.prescriptions.map(prescription =>
        <li key={prescription.id}>
          Prescription Number: {prescription.id} -
          Patient: <Link to={`/patients/${prescription.attributes.patient.id}`}>{prescription.attributes.patient.username}</Link> -
          Medication: {prescription.attributes.medication.name} -
          Dosages Per: {prescription.attributes.dosagesper} -
          Dosages Remaining: {prescription.attributes.dosagestotal} -
          <Link to={{pathname:`/takedosages/new`, state: { prescription_id: prescription.id, datetaken: today.toJSON().slice(0,10)} }} > Take Dosage</Link>
        </li> )}
    </div>


  )
}

export default Prescriptions
