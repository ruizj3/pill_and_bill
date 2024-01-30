import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Routes, Route } from 'react-router-dom';
import { fetchDoctors } from '../actions/fetchDoctors';
import Doctors from '../components/Doctors';

function DoctorsContainer() {
  const dispatch = useDispatch();
  const doctors = useSelector(state => state.doctorsRed.doctors);

  useEffect(() => {
    dispatch(fetchDoctors());
  }, [dispatch]);

  return (
    <div>
      <Routes>
        <Route path='/doctorsall' element={<Doctors doctors={doctors} />}/>
      </Routes>
    </div>
  );
}

export default DoctorsContainer;
