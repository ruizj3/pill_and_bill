export const addTakedosage = (data) => {

  return (dispatch) => {
    fetch('http://localhost:3000/takedosages', {
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      method: 'POST',
      body: JSON.stringify(data)
    })
    .then(response => response.json())
    .then(takedosage => dispatch({type: 'ADD_TAKEDOSAGE', payload: takedosage}))
  }

}
