import React from 'react'
import {Redirect} from 'react-router-dom'


const Patient = (props) => {

  console.log(props)

  let patient = props.patients.filter(patient => patient.id == props.match.params.id)[0]

  console.log(patient)
  return (

    <div>
      <h2>
        Patient Name: {patient ? patient.attributes.username : null} - {patient ? patient.attributes.dob : null}
      </h2>
      <p>Doctor Name: {patient ? patient.attributes.doctor.username : null}</p>

    </div>
  )


}

export default Patient
