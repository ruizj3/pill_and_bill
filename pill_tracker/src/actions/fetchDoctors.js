export function fetchDoctors() {
  return async (dispatch) => {
    const response = await fetch('http://localhost:3000/doctors')
    const allDoctors = await response.json()
    await dispatch({type: 'FETCH_DOCTORS',payload: allDoctors.data})
  }
}