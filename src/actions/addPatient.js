export const addPatient = (data) => {

  return async (dispatch) => {
    const apiUrl = process.env.REACT_APP_API_BASE_URL
    const response = await fetch(`${apiUrl}/patients`, {
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
