export function fetchPatients() {
  return async (dispatch) => {
    const response = await fetch('http://localhost:3000/patients')
    const allPatients = await response.json()
    await dispatch({type: 'FETCH_PATIENTS',payload: allPatients.data})
  }
}
