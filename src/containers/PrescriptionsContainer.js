import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Routes, Route } from 'react-router-dom';
import { fetchPrescriptions } from '../actions/fetchPrescriptions';
import { fetchPatients } from '../actions/fetchPatients';
import { fetchMedications } from '../actions/fetchMedications';
import Prescriptions from '../components/Prescriptions';
import Prescription from '../components/Prescription';
import PrescriptionInput from '../components/PrescriptionInput';
import TakedosageInput from '../components/TakedosageInput';

function PrescriptionsContainer() {
  const dispatch = useDispatch();
  const prescriptions = useSelector(state => state.prescriptionsRed.prescriptions);
  const patients = useSelector(state => state.patientsRed.patients);
  const medications = useSelector(state => state.medicationsRed.medications);

  useEffect(() => {
    dispatch(fetchPrescriptions());
    dispatch(fetchPatients());
    dispatch(fetchMedications());
    console.log("Fetched prescripions data:", prescriptions);
  }, [dispatch]);

  return (
    <div>
      <Routes>
        <Route path='/prescriptions/new' element={<PrescriptionInput />} />
        <Route path='/takedosages/new' element={<TakedosageInput />} />
        <Route path='/prescriptions/:id' element={<Prescription prescriptions={prescriptions} />}/>
        <Route path='/prescriptionsall' element={<Prescriptions prescriptions={prescriptions} />}/>
      </Routes>
    </div>
  );
}

export default PrescriptionsContainer;
