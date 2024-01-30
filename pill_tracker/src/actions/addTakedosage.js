export const addTakedosage = (data) => {

  return async (dispatch) => {
    const apiUrl = process.env.REACT_APP_API_BASE_URL
    const response = await fetch(`${apiUrl}/takedosages`, {
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      method: 'POST',
      body: JSON.stringify(data)
    })
    const newTakeDosage = await response.json()
    await dispatch({type: 'ADD_TAKEDOSAGE', payload: newTakeDosage})
    return response
  }

}
