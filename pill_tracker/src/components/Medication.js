import React from 'react';
import { useParams } from 'react-router-dom';
import MedicationEdit from './MedicationEdit';
import MedicationDelete from './MedicationDelete';

const Medication = ({ medications }) => {
  const { id } = useParams();
  const medication = medications.find(med => med.id === id);

  return (
    <div>
      <h2>
        Medication Name: {medication ? medication.attributes.name : 'Not Found'}
      </h2>
      {medication && medication.attributes.prescription.map(prescription => (
        <li key={prescription.id}>
          Connected Prescription: {prescription.id}
        </li>
      ))}
      <h3>Edit Medication</h3>
      <MedicationEdit medication={medication} />
      <h4>Delete Medication</h4>
      <MedicationDelete medication={medication} />
    </div>
  );
}

export default Medication;
