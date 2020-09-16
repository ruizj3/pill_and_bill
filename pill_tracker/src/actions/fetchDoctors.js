export function fetchDoctors() {
  return (dispatch) => {
    fetch('http://localhost:3000/doctors')
    .then(resp => resp.json())
    .then(doctors => dispatch({
      type: 'FETCH_DOCTORS',
      payload: doctors.data
    }))
  }
}
