export const editMedication = (data) => {
  return async (dispatch) => {
    const response = await fetch(`http://localhost:3000/medications/${data.id}`, {
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
