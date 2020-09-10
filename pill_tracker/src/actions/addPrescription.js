export const addPrescription = (data) => {

  return (dispatch) => {
    fetch('http://localhost:3000/prescriptions', {
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      method: 'POST',
      body: JSON.stringify(data)
    })
    .then(response => response.json())
    .then(prescription => dispatch({type: 'ADD_PRESCRIPTION', payload: prescription}))
  }

}
