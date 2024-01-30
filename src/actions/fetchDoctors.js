export function fetchDoctors() {
  return async (dispatch) => {
    const apiUrl = process.env.REACT_APP_API_BASE_URL
    const response = await fetch(`${apiUrl}/doctors`)
    const allDoctors = await response.json()
    await dispatch({type: 'FETCH_DOCTORS',payload: allDoctors.data})
  }
}