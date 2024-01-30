export const editMedication = (data) => {
  return async (dispatch) => {
    const apiUrl = process.env.REACT_APP_API_BASE_URL
    const response = await fetch(`${apiUrl}/medications/${data.id}`, {
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      method: 'PATCH',
      body: JSON.stringify(data)
    })
    const medication = await response.json()
    await dispatch({type: 'EDIT_MEDICATION', payload: medication})
    return response
  }

}
