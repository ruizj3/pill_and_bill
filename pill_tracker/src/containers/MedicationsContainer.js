import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Routes, Route } from 'react-router-dom';
import { fetchMedications } from '../actions/fetchMedications';
import Medications from '../components/Medications';
import Medication from '../components/Medication';
import MedicationInput from '../components/MedicationInput';

function MedicationsContainer() {
  const dispatch = useDispatch();
  const medications = useSelector(state => state.medicationsRed.medications);

  useEffect(() => {
    dispatch(fetchMedications());
  }, [dispatch]);

  return (
    <div>
      <Routes>
        <Route path='/medications/new' element={<MedicationInput />} />
        <Route path='/medications/:id' element={<Medication medications={medications} />}/>
        <Route path='/medicationsall' element={<Medications medications={medications} />}/>
      </Routes>
    </div>
  );
}

export default MedicationsContainer;
