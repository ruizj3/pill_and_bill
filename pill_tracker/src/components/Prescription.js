import React from 'react'


const Prescription = (props) => {



  let prescription = props.prescriptions.filter(prescription => prescription.id === props.match.params.id)[0]


  return (

    <div>
      <h2>
        Prescription Number: {prescription ? prescription.id : null}
      </h2>
      <li>
        Patient: {prescription ? prescription.attributes.patient.username : null}
      </li>
      <li>
        Medication: {prescription ? prescription.attributes.medication.name : null}
      </li>

    </div>
  )


}

export default Prescription
