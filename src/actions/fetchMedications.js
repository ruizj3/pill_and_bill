export function fetchMedications() {
  return async (dispatch) => {
    const apiUrl = process.env.REACT_APP_API_BASE_URL
    const response = await fetch(`${apiUrl}/medications`)
    const allMedications = await response.json()
    await dispatch({type: 'FETCH_MEDICATIONS',payload: allMedications.data})
  }
}
