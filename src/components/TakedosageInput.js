import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTakedosage } from '../actions/addTakedosage';
import { useNavigate, useLocation } from 'react-router-dom';

function TakedosageInput() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();
  console.log("Location:", location)
  const locationState = location.state || {};
  console.log("Location State:", locationState)
  const [takedosage, setTakedosage] = useState({
    datetaken: locationState.datetaken || '',
    prescription_id: locationState.prescription_id || ''
  });

  const handleChange = (event) => {
    setTakedosage({
      ...takedosage,
      [event.target.name]: event.target.value
    });
  }

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const newTakeDosage = await dispatch(addTakedosage(takedosage));
      if (newTakeDosage.status === 200) {
        navigate('/prescriptions/prescriptionsall');
      } else {
        console.log("Error submitting dosage: Non-200 response");
      }
      
    } catch (error){
      console.log("Error submitting dosage:", error)
    }
  }

  return (
    <div>
      Confirm Submission Below:
      <form onSubmit={handleSubmit}>
        <label>Prescription ID: </label>
        <input type='text' placeholder='Prescription_ID' value={takedosage.prescription_id} name="prescription_id" onChange={handleChange} /><br />
        <label>Date Taken: </label>
        <input type='text' placeholder='Date Taken' value={takedosage.datetaken} name="datetaken" onChange={handleChange} /><br />
        <input type="submit" />
      </form>
    </div>
  );
}

export default TakedosageInput;
