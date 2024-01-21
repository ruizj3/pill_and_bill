import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addPrescription } from '../actions/addPrescription';
import { useNavigate } from 'react-router-dom';
import { fetchPrescriptions } from '../actions/fetchPrescriptions';
import CustomDropdown from './CustomDropdown';

function PrescriptionInput() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const patients = useSelector(state => state.patientsRed.patients);
  const medications = useSelector(state => state.medicationsRed.medications);

  const [formState, setFormState] = useState({
    dosagestotal: '',
    dosagesper: '',
    dosagesfrequency: '',
    patient_id: '',
    medication_id: ''
  });

  const handleChange = (event) => {
    setFormState({
      ...formState,
      [event.target.name]: event.target.value
    });
  }

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const newPrescription = await dispatch(addPrescription(formState));
      setFormState({
        dosagestotal: '',
        dosagesper: '',
        dosagesfrequency: '',
        patient_id: '',
        medication_id: ''
      });
      await dispatch(fetchPrescriptions());
      navigate(`/prescriptions/prescriptions/${newPrescription}`);
    } catch (error) {
      console.error('Error in form submission:', error);
    }

  }

  const handlePatientSelect = (patientId) => {
    setFormState({
      ...formState,
      patient_id: patientId
    });
  };

  const patientOptions = patients.map(patient => ({
    value: patient.id,
    label: patient.attributes.username
  }));

  const selectedPatientName = patients.find(patient => patient.id === formState.patient_id)?.attributes.username || '';

  const handleMedicationSelect = (medicationId) => {
    setFormState({
      ...formState,
      medication_id: medicationId
    });
  };

  const medicationOptions = medications.map(medication => ({
    value: medication.id,
    label: medication.attributes.name
  }));

  const selectedMedicationName = medications.find(medication => medication.id === formState.medication_id)?.attributes.name || '';

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>Patient Name: </label>
        <CustomDropdown 
          options={patientOptions}
          selectedValue={selectedPatientName}
          onSelect={handlePatientSelect}
        />
        <br />
        <label>Medication Name: </label>
        <CustomDropdown 
          options={medicationOptions}
          selectedValue={selectedMedicationName}
          onSelect={handleMedicationSelect}
        />
        <br />
        <label>Dosages Total: </label>
        <input type='text' placeholder='Dosages Total' value={formState.dosagestotal} name="dosagestotal" onChange={handleChange} /><br />
        <label>Dosages Per: </label>
        <input type='text' placeholder='Dosages Per' value={formState.dosagesper} name="dosagesper" onChange={handleChange} /><br />
        <label>Dosages Frequency: </label>
        <input type='text' placeholder='Dosages Frequency' value={formState.dosagesfrequency} name="dosagesfrequency" onChange={handleChange} /><br />
        <input type="submit" />
      </form>
    </div>
  );
}

export default PrescriptionInput;
