import React from 'react';
import { useDispatch } from 'react-redux';
import { deleteMedication } from '../actions/deleteMedication';
import { fetchMedications } from '../actions/fetchMedications';
import { useNavigate } from 'react-router-dom';

function MedicationDelete({ medication }) {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      if (medication && medication.id) {
        console.log(medication)
        const response = await dispatch(deleteMedication(medication.id));
        if (response.status === 200){
          await dispatch(fetchMedications())
          navigate('/medications/medications');
      } else {
        console.log("Error deleting medication: Non-200 status.")
      } 
    }
  } catch (error){
    console.log("Error deleting medication:", error)
  }
}

  return (
    <form onSubmit={handleSubmit}>
      <button type="submit">Delete</button>
    </form>
  );
}

export default MedicationDelete;
