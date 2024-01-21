import React from 'react';

const Doctors = ({ doctors }) => {
  console.log(doctors)
  return (
    <div>
      <ul>
        {doctors.map(doctor => (
          <li key={doctor.id}>
            Doctor Name: - {doctor.attributes.username}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Doctors;
