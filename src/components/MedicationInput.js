import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addMedication } from '../actions/addMedication';
import { useNavigate } from 'react-router-dom';
import { fetchMedications } from '../actions/fetchMedications';

function MedicationInput() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [medication, setMedication] = useState({
    name: '',
    priceperpill: ''
  });

  const handleChange = (event) => {
    setMedication({
      ...medication,
      [event.target.name]: event.target.value
    });
  }

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const newMedication = await dispatch(addMedication(medication));
      await dispatch(fetchMedications())
      console.log(newMedication)
      navigate(`/medications/medications/${newMedication}`);
    } catch (error){
      console.log("Error adding medication:", error)
    }
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>Medication Name: </label>
        <input type='text' placeholder='Name' value={medication.name} name="name" onChange={handleChange} /><br />
        <label>Price Per Pill: </label>
        <input type='text' placeholder='PricePerPill' value={medication.priceperpill} name="priceperpill" onChange={handleChange} /><br />
        <input type="submit" />
      </form>
    </div>
  );
}

export default MedicationInput;
