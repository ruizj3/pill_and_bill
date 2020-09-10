export function fetchMedications() {
  return (dispatch) => {
    fetch('http://localhost:3000/medications')
    .then(resp => resp.json())
    .then(medications => dispatch({
      type: 'FETCH_MEDICATIONS',
      payload: medications.data
    }))
  }
}
