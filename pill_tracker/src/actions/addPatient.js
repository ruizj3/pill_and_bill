export const addPatient = (data) => {

  return async (dispatch) => {
    const response = await fetch('http://localhost:3000/patients', {
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      method: 'POST',
      body: JSON.stringify(data)
    })
    const newPatient = await response.json()
    await dispatch({type: 'ADD_PATIENT', payload: newPatient})
    return newPatient.id
  }

}
