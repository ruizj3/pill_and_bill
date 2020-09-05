export const addPatient = (data) => {

  return (dispatch) => {
    fetch('http://localhost:3000/patients', {
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      method: 'POST',
      body: JSON.stringify(data)
    })
    .then(response => response.json())
    .then(patient => dispatch({type: 'ADD_PATIENT', payload: patient}))
  }

}
