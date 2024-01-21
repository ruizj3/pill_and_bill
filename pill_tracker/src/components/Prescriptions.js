import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import TakeDosageModal from './TakeDosageModal';

const Prescriptions = ({ prescriptions }) => {
  const [showModal, setShowModal] = useState(false);
  const [selectedPrescription, setSelectedPrescription] = useState(null);
  const today = new Date();

  const handleOpenModal = (prescription) => {
    console.log("Attempting to open modal:", prescription)
    setSelectedPrescription(prescription);
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
    setSelectedPrescription(null);
  };

  return (
    <div>
      <ul>
        {prescriptions.map(prescription => (
          <li key={prescription.id}>
            Prescription Number: {prescription.id} -
            Patient: <Link to={`/patients/patients/${prescription.attributes.patient.id}`}>
              {prescription.attributes.patient.username}
            </Link> -
            Medication: {prescription.attributes.medication.name} -
            Dosages Per: {prescription.attributes.dosagesper} -
            Dosages Remaining: {prescription.attributes.dosagestotal} -
            <button onClick={() => handleOpenModal(prescription)}>Take Dosage</button>
          </li>
        ))}
      </ul>
      {showModal && selectedPrescription && (
        <TakeDosageModal
          onClose={handleCloseModal}
          prescription={selectedPrescription}
          datetaken={today.toJSON().slice(0, 10)}
        />
      )}
    </div>
  );
};

export default Prescriptions;
