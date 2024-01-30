export default function patientReducer(state = {patients: []}, action) {
  switch (action.type) {
    case 'FETCH_PATIENTS':
      return {patients: action.payload}
    case 'ADD_PATIENT':
      return {...state, patients: [...state.patients, action.payload]}
    default:
      return state
  }
}
