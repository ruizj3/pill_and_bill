export function fetchPrescriptions() {
  return async (dispatch) => {
    const apiUrl = process.env.REACT_APP_API_BASE_URL
    const response = await fetch(`${apiUrl}/prescriptions`)
    const allPrescriptions = await response.json()
    await dispatch({type: 'FETCH_PRESCRIPTIONS',payload: allPrescriptions.data})
  }
}
