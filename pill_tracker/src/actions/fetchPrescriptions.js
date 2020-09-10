export function fetchPrescriptions() {
  return (dispatch) => {
    fetch('http://localhost:3000/prescriptions')
    .then(resp => resp.json())
    .then(prescriptions => dispatch({
      type: 'FETCH_PRESCRIPTIONS',
      payload: prescriptions.data
    }))
  }
}
