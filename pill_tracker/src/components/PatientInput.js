import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addPatient } from '../actions/addPatient';
import { useNavigate} from 'react-router-dom';
import { fetchPatients } from '../actions/fetchPatients';

const PatientInput = ({ doctors })  => {
  const [state, setState] = useState({
    username: '',
    dob: '',
    password: '',
    doctor_id: 1
  });

  const dispatch = useDispatch();

  const handleChange = (event) => {
    setState({
      ...state,
      [event.target.name]: event.target.value
    });
  };

  const navigate = useNavigate();

const handleSubmit = async (event) => {
  event.preventDefault();

  try {
    // Await the completion of addPatient
    const newPatient = await dispatch(addPatient(state));

    // Reset the form state
    setState({
      username: '',
      dob: '',
      password: '',
      doctor_id: ''
    });

    // Refresh the patients list
    await dispatch(fetchPatients());
    console.log(newPatient)
    // Navigate to the new patient's page
    navigate(`/patients/patients/${newPatient}`);
  } catch (error) {
    // Handle any errors
    console.error('Error in form submission:', error);
  }
};

  const doctorChanged = (event) => {
    setState({ doctor_id: event.target.value});
  };  

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>Patient Name: </label>
        <input type='text' placeholder='UserName' value={state.username} name="username" onChange={handleChange}/><br/>
        <label>DOB: </label>
        <input type='text' placeholder='DOB' value={state.dob} name="dob" onChange={handleChange}/><br/>
        <label>Password: </label>
        <input type='text' placeholder='Password' value={state.password} name="password" onChange={handleChange}/><br/>
        <label>Doctor Name: </label>
        <select value={state.doctor_id} name="doctor_id" onChange={handleChange}>
          {doctors.map((doctor) => (
            <option key={doctor.id} value={doctor.id}>{doctor.attributes.username}</option>
          ))}
        </select>
        <br/>
        <input type="submit"/>
      </form>
    </div>
  );
};

export default PatientInput;

