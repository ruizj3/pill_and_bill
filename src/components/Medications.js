import React from 'react';
import { Link } from 'react-router-dom';

const Medications = ({ medications }) => {
  return (
    <div>
      <ul>
        {medications.map(medication => (
          <li key={medication.id}>
            <Link to={`/medications/medications/${medication.id}`}>{medication.attributes.name}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Medications;
