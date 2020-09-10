import React from 'react'
import {Link} from 'react-router-dom'

const NavBar = (props) => {

  return (
    <div>
      <Link to='/home' style={{paddingRight: '10px'}}>Home  </Link>
      <Link to='/patients' style={{paddingRight: '10px'}}>Patients  </Link>
      <Link to='/patients/new' style={{paddingRight: '10px'}}> Add Patient</Link>
      <Link to='/prescriptions' style={{paddingRight: '10px'}}>Prescriptions  </Link>
      <Link to='/prescriptions/new' style={{paddingRight: '10px'}}>Add Prescription  </Link>
      <Link to='/takedosages' style={{paddingRight: '10px'}}>Takedosages List  </Link>
      <Link to='/medications' style={{paddingRight: '10px'}}>Medications  </Link>
      <Link to='/medications/new' style={{paddingRight: '10px'}}> Add Medication</Link>

    </div>

  )
}

export default NavBar
