export const addMedication = (data) => {

  return async (dispatch) => {
    const response = await fetch('http://localhost:3000/medications', {
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      method: 'POST',
      body: JSON.stringify(data)
    })
    const newMedication = await response.json()
    await dispatch({type: 'ADD_MEDICATION', payload: newMedication})
    return newMedication.id
  }

}
