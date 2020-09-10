export const deleteMedication = (medication_id) => {
  return (dispatch) => {
    return fetch(`http://localhost:3000/medications/${medication_id}`, {
      method: 'DELETE'
    })
    .then(response => response.json())
    .then(medication_id => dispatch({type: 'DELETE_MEDICATION', payload: medication_id}))
  }
}
