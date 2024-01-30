import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Route, Routes } from 'react-router-dom';
import { fetchPatients } from '../actions/fetchPatients';
import { fetchDoctors } from '../actions/fetchDoctors';
import Patients from '../components/Patients';
import Patient from '../components/Patient';
import PatientInput from '../components/PatientInput';

const PatientsContainer = () => {
  const dispatch = useDispatch();
  const patients = useSelector(state => state.patientsRed.patients || []);
  const doctors = useSelector(state => state.doctorsRed.doctors);

  useEffect(() => {
    dispatch(fetchPatients());
    dispatch(fetchDoctors());
  }, [dispatch]);

  useEffect(() => {
    console.log("Fetched patients data:", patients);
  }, [patients]);  // Log patients data whenever it changes

  return (
    <div>
      <Routes>
        <Route path='/patients/new' element={<PatientInput doctors={doctors}/>} />
        <Route path='/patients/:id' element={<Patient patients={patients} />} />
        <Route path='/patientsall' element={<Patients patients={patients} />} />
      </Routes>
    </div>
  );
}

export default PatientsContainer;
