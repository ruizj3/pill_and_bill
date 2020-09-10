import { combineReducers } from 'redux'
import patientReducer from './patientReducer'
import prescriptionReducer from './prescriptionReducer'
import takedosageReducer from './takedosageReducer'
import medicationReducer from './medicationReducer'

export default combineReducers({
  patientReducer,
  prescriptionReducer,
  takedosageReducer,
  medicationReducer
});
