export const editMedication = (data) => {
  return (dispatch) => {
    fetch(`http://localhost:3000/medications/${data.id}`, {
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      method: 'PATCH',
      body: JSON.stringify(data)
    })
    .then(response => response.json())
    .then(medication => dispatch({type: 'EDIT_MEDICATION', payload: medication}))
  }

}
