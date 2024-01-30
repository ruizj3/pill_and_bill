import React from 'react';
import { Link } from 'react-router-dom';

const NavBar = (props) => {
  return (
    <div className='navbar'> 
      <div className='navbar-brand'> 
        {/* Brand or Logo */}
      </div>
      <ul className='navbar-menu'>
        <li><Link to='/home'>Home</Link></li>
        <li><Link to='/patients/patientsall'>Patients</Link></li>
        <li><Link to='/patients/patients/new'>Add Patient</Link></li>
        <li><Link to='/prescriptions/prescriptionsall'>Prescriptions</Link></li>
        <li><Link to='/prescriptions/prescriptions/new'>Add Prescription</Link></li>
        <li><Link to='/takedosages/takedosages'>Takedosages List</Link></li>
        <li><Link to='/medications/medicationsall'>Medications</Link></li>
        <li><Link to='/medications/medications/new'>Add Medication</Link></li>
        <li><Link to='/doctors/doctorsall'>Doctors</Link></li>
      </ul>
    </div>
  );
};

export default NavBar;
