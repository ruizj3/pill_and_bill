import React from 'react';
import { Link, useParams } from 'react-router-dom';

const Patient = (props) => {
  const { id } = useParams(); // Get the 'id' parameter from the URL
  console.log(props);
  
  const patient = props.patients.filter(patient => patient.id === id)[0];

  return (
    <div>
      <h2>
        Patient Name: {patient ? patient.attributes.username : null} DOB: {patient ? patient.attributes.dob : null}
      </h2>
      <p>Doctor Name: {patient ? patient.attributes.doctor.username : null}</p>
      Prescriptions List:
      {patient ? patient.attributes.prescription.map(prescription =>
        <li key={prescription.id}>
          <Link to={`/prescriptions/prescriptions/${prescription.id}`}>{prescription.id}</Link>
        </li> ) : null}<br/>
      <li className='navbar-menu'>
      <Link to={{pathname:`/prescriptions/prescriptions/new`, state: { patient_id: patient ? patient.id : null }}} > Add Prescription</Link>
      </li>
    </div>
  );
};

export default Patient;
