export function fetchPrescriptions() {
  return async (dispatch) => {
    const response = await fetch('http://localhost:3000/prescriptions')
    const allPrescriptions = await response.json()
    await dispatch({type: 'FETCH_PRESCRIPTIONS',payload: allPrescriptions.data})
  }
}
