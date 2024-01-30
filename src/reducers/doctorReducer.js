export default function doctorReducer(state = {doctors: []}, action) {
  switch (action.type) {
    case 'FETCH_DOCTORS':
      return {doctors: action.payload}
    default:
      return state
  }
}
