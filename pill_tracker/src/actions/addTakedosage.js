export const addTakedosage = (data) => {

  return async (dispatch) => {
    const response = await fetch('http://localhost:3000/takedosages', {
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
