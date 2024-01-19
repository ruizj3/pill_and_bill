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
    <div>
      <Counter />
      <label>Search Patient Name: </label>
      <input name="username" value={username} onChange={handleChange} />

      {searchPatients.map(patient => (
        <li key={patient.id}>
          <Link to={`/patients/patients/${patient.id}`}>{patient.attributes.username}</Link>
        </li>
      ))}
    </div>
  );
};

export default Patients;
