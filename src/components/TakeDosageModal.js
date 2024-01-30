import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTakedosage } from '../actions/addTakedosage';
import { useNavigate} from 'react-router-dom';
import { fetchPrescriptions } from '../actions/fetchPrescriptions';

const TakeDosageModal = ({ onClose, prescription, datetaken }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  
  const [takedosage, setTakedosage] = useState({
    datetaken: datetaken || '',
    prescription_id: prescription.id || ''
  });
  console.log(prescription, datetaken)

  const handleChange = (event) => {
    setTakedosage({
      ...takedosage,
      [event.target.name]: event.target.value
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const newTakeDosage = await dispatch(addTakedosage(takedosage));
      if (newTakeDosage.status === 200) {
        await dispatch(fetchPrescriptions());
        navigate('/prescriptions/prescriptionsall');
        onClose();
      } else {
        console.log("Error submitting dosage: Non-200 response");
      }
    } catch (error) {
      console.log("Error submitting dosage:", error);
    }
  };

  return (
    <div className="modal">
      <div className="modal-content">
        <span className="close" onClick={onClose}>Exit</span>
        <h2>Take Dosage for Prescription #{prescription.id}</h2>
        <form onSubmit={handleSubmit}>
          <label>Prescription ID: </label>
          <input 
            type='text' 
            placeholder='Prescription ID' 
            value={takedosage.prescription_id} 
            name="prescription_id" 
            onChange={handleChange} 
          /><br />
          <label>Date Taken: </label>
          <input
            type='date' 
            value={takedosage.datetaken} 
            name="datetaken" 
            onChange={handleChange} 
          /><br />
          <input className='modalSubmit' type="submit" />
        </form>
      </div>
    </div>
  );
};

export default TakeDosageModal;
