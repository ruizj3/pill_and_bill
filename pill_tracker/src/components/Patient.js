import React from 'react'
import {Redirect} from 'react-router-dom'


const Patient = (props) => {

  console.log(props)

  let patient = props.patients.filter(patient => patient.id == props.match.params.id)[0]

  console.log(patient)
  return (

    <div>
      <h2>
        {patient ? patient.name : null}
      </h2>

    </div>
  )


}

export default Patient
