export default function patientReducer(state = {patients: []}, action) {
  switch (action.type) {
    case 'FETCH_PATIENTS':
      return {patients: action.payload}
    case 'ADD_PATIENT':
      return {...state, patients: [...state.patients, action.payload]}
    case 'ADD_PRESCRIPTION':
      let patients = state.patients.map(patient => {
        if (patient.id === action.payload.id) {
          return action.payload
        } else {
          return patient
        }
      })
      return {...state, patients: patients}
    case 'DELETE_PRESCRIPTION':
      let patientsTwo = state.patients.map(patient => {
        if (patient.id === action.payload.id) {
          return action.payload
        } else {
          return patient
        }
      })
      return {...state, patients: patientsTwo}
    case 'EDIT_PRESCRIPTION':
      let patientsThree = state.patients.map(patient => {
        if (patient.id === action.payload.id) {
          return action.payload
        } else {
          return patient
        }
      })
      return {...state, patients: patientsThree}
    default:
      return state
  }
}
