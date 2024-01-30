export const addMedication = (data) => {

  return async (dispatch) => {
    const apiUrl = process.env.REACT_APP_API_BASE_URL
    const response = await fetch(`${apiUrl}/medications`, {
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
