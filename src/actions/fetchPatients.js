export function fetchPatients() {
  return async (dispatch) => {
    const apiUrl = process.env.REACT_APP_API_BASE_URL
    const response = await fetch(`${apiUrl}/patients`)
    const allPatients = await response.json()
    await dispatch({type: 'FETCH_PATIENTS',payload: allPatients.data})
  }
}
