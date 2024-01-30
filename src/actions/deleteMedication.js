export const deleteMedication = (medication_id) => {
  return async (dispatch) => {
    const apiUrl = process.env.REACT_APP_API_BASE_URL
    const response = await fetch(`${apiUrl}/medications/${medication_id}`, {
      method: 'DELETE'
    })
    const deletedMedication = await response.json()
    await dispatch({type: 'DELETE_MEDICATION', payload: deletedMedication})
    return response
  }
}
