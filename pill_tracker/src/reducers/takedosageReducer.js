export default function takedosageReducer(state = {takedosages: []}, action) {
  switch (action.type) {
    case 'FETCH_TAKEDOSAGES':
      return {takedosages: action.payload}
    case 'ADD_TAKEDOSAGE':
      return {...state, takedosages: [...state.takedosages, action.payload]}
    default:
      return state
  }
}
