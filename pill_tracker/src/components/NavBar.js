import React from 'react'
import {Link} from 'react-router-dom'

const NavBar = (props) => {

  return (
    <div>
      <Link to='/patients' style={{paddingRight: '10px'}}>Patients  </Link>
      <Link to='/patients/new'> Add Patient</Link>
    </div>

  )
}

export default NavBar
