export function fetchTakedosages() {
  return (dispatch) => {
    fetch('http://localhost:3000/takedosages')
    .then(resp => resp.json())
    .then(takedosages => dispatch({
      type: 'FETCH_TAKEDOSAGES',
      payload: takedosages.data
    }))
  }
}
