export function fetchPatients() {
  return (dispatch) => {
    fetch('http://localhost:3000/patients')
    .then(resp => resp.json())
    .then(patients => dispatch({
      type: 'FETCH_PATIENTS',
      payload: patients.data
    }))
  }
}
