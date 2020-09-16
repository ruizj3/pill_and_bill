import React from 'react'
import {Redirect} from 'react-router-dom'
import MedicationEdit from './MedicationEdit'
import MedicationDelete from './MedicationDelete'

const Medication = (props) => {

  const medication = props.medications.filter(medication => medication.id == props.match.params.id)[0]

  return (
    <div>
      <h2>
        Medication Name: {medication ? medication.attributes.name : null}

      </h2>
      {medication ? medication.attributes.prescription.map(prescription =>
        <li key={prescription.id}>
          Connected Prescription: {prescription.id}
        </li>) : null }
      <h3>Edit Medication</h3>
      <MedicationEdit medication={medication}/>
      <h4>Delete Medication</h4>
      <MedicationDelete medication={medication}/>

    </div>
  )
}

export default Medication
