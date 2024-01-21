export function fetchTakedosages() {
  return async (dispatch) => {
    const response = await fetch('http://localhost:3000/takedosages')
    const allTakedosages = await response.json()
    await dispatch({type: 'FETCH_TAKEDOSAGES',payload: allTakedosages.data})
  }
}
