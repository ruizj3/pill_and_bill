export function fetchMedications() {
  return async (dispatch) => {
    const response = await fetch('http://localhost:3000/medications')
    const allMedications = await response.json()
    await dispatch({type: 'FETCH_MEDICATIONS',payload: allMedications.data})
  }
}
