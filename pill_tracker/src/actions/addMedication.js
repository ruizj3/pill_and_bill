export const addMedication = (data) => {

  return (dispatch) => {
    fetch('http://localhost:3000/medications', {
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      method: 'POST',
      body: JSON.stringify(data)
    })
    .then(response => response.json())
    .then(medication => dispatch({type: 'ADD_MEDICATION', payload: medication}))
  }

}
