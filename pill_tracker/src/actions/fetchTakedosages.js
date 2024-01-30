export function fetchTakedosages() {
  return async (dispatch) => {
    const apiUrl = process.env.REACT_APP_API_BASE_URL
    const response = await fetch(`${apiUrl}/takedosages`)
    const allTakedosages = await response.json()
    await dispatch({type: 'FETCH_TAKEDOSAGES',payload: allTakedosages.data})
  }
}
