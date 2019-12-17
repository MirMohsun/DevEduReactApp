import { combineReducers } from 'redux'
import todos from './todos'
import visibility from './visibility'


const RootReducer = combineReducers({
  todos,
  visibility
})

export default RootReducer