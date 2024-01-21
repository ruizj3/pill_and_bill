export const addPrescription = (data) => {

  return async (dispatch) => {
    const response = await fetch('http://localhost:3000/prescriptions', {
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
