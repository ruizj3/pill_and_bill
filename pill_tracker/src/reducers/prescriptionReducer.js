export default function prescriptionReducer(state = {prescriptions: []}, action) {
  switch (action.type) {
    case 'FETCH_PRESCRIPTIONS':
      return {prescriptions: action.payload}
    case 'ADD_PRESCRIPTION':
      return {...state, prescriptions: [...state.prescriptions, action.payload]}
    default:
      return state
    }
}
