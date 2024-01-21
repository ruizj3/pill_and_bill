export const deleteMedication = (medication_id) => {
  return async (dispatch) => {
    const response = await fetch(`http://localhost:3000/medications/${medication_id}`, {
      method: 'DELETE'
    })
    const deletedMedication = await response.json()
    await dispatch({type: 'DELETE_MEDICATION', payload: deletedMedication})
    return response
  }
}
