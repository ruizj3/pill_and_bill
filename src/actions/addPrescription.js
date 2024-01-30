export const addPrescription = (data) => {

  return async (dispatch) => {
    const apiUrl = process.env.REACT_APP_API_BASE_URL
    const response = await fetch(`${apiUrl}/prescriptions`, {
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      method: 'POST',
      body: JSON.stringify(data)
    })
    const newPrescription = await response.json()
    await dispatch({type: 'ADD_PRESCRIPTION', payload: newPrescription})
    return newPrescription.id
  }

}
