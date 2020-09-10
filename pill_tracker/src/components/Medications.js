import React from 'react'
import {Route, Link} from 'react-router-dom'
import Medication from './Medication'


const Medications = props => {


  return (
    <div>
      {props.medications.map(medication =>
        <li key={medication.id}>

          <Link to={`/medications/${medication.id}`}>{medication.attributes.name}</Link>
        </li>) }
    </div>

  )
}



export default Medications
