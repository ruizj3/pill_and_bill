import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addPrescription } from '../actions/addPrescription';
import { useNavigate } from 'react-router-dom';
import { fetchPatients } from '../actions/fetchPatients';
import { fetchPrescriptions } from '../actions/fetchPrescriptions';

function PrescriptionInput() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const patients = useSelector(state => state.patientsRed.patients);
  const medications = useSelector(state => state.medicationsRed.medications);

  const [formState, setFormState] = useState({
    dosagestotal: '',
    dosagesper: '',
    dosagesfrequency: '',
    patient_id: 1,
    medication_id: 1
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

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>Patient Name: </label>
        <select value={formState.patient_id} name="patient_id" onChange={handleChange}>
          {patients.map(patient => (
            <option key={patient.id} value={patient.id}>{patient.attributes.username}</option>
          ))}
        </select>
        <br />
        <label>Medication Name: </label>
        <select value={formState.medication_id} name="medication_id" onChange={handleChange}>
          {medications.map(medication => (
            <option key={medication.id} value={medication.id}>{medication.attributes.name}</option>
          ))}
        </select>
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
