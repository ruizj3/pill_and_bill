import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { editMedication } from '../actions/editMedication';
import { useNavigate } from 'react-router-dom';
import { fetchMedications } from '../actions/fetchMedications';

function MedicationEdit({ medication }) {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: '',
    priceperpill: ''
  });

  const handleChange = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value
    });
  }

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const updatedMedication = { ...formData, id: medication.id };
      const response = await dispatch(editMedication(updatedMedication));
      await dispatch(fetchMedications())
      if (response.status === 200) {
        navigate('/medications/medications');
      } else {
        console.log("Error editing medication: Non-200 response");
      }
      
    } catch (error){
      console.log("Error editing medication:", error)
    }
    
    
    // Reset form state after submission
    setFormData({
      name: '',
      priceperpill: ''
    });

  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>Medication Name: </label>
        <input type='text' placeholder='Medication Name' value={formData.name} name="name" onChange={handleChange} /><br />
        <label>Price Per Pill: </label>
        <input type='text' placeholder='Price Per Pill' value={formData.priceperpill} name="priceperpill" onChange={handleChange} /><br />
        <input type="submit" />
      </form>
    </div>
  );
}

export default MedicationEdit;
