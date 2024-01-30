import React from 'react';
import { useParams } from 'react-router-dom';

const Prescription = ({ prescriptions }) => {
  const { id } = useParams();
  const prescription = prescriptions.find(p => p.id === id);

  return (
    <div>
      <h2>
        Prescription Number: {prescription ? prescription.id : 'Not Found'}
      </h2>
      {prescription && (
        <>
          <li>
            Patient: {prescription.attributes.patient.username}
          </li>
          <li>
            Medication: {prescription.attributes.medication.name}
          </li>
        </>
      )}
    </div>
  );
}

export default Prescription;
