export default function medicationReducer(state = {medications: []}, action) {
  switch (action.type) {
    case 'FETCH_MEDICATIONS':
      return {medications: action.payload}
    case 'ADD_MEDICATION':
      return {...state, medications: [...state.medications, action.payload]}
    case 'DELETE_MEDICATION':
      return {...state, medications: [...state.medications, action.payload]}
    default:
      return state
  }
}
