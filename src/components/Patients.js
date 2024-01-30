import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Counter from './Counter';

const Patients = ({ patients }) => {
  const [username, setUsername] = useState('');

  const handleChange = (event) => {
    setUsername(event.target.value);
  };

  const searchPatients = patients.filter(name => 
    name.attributes.username.toLowerCase().includes(username.toLowerCase())
  );

  return (
    <div className="patients-list">
      <Counter />
      <input name="username" value={username} onChange={handleChange} />
      {searchPatients.map(patient => (
        <Link to={`/patients/patients/${patient.id}`} key={patient.id} className="patient-box">
          {console.log(patient)}
          <div>
            <li>{patient.attributes.username}</li>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default Patients;
