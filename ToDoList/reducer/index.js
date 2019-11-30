import { combineReducers } from 'redux'
import TurtleTD from './reducers'
import TurtleVisibilityFilter from './Visibility'

const TurtleDB = combineReducers({
  TurtleTD,
  TurtleVisibilityFilter
})

export default TurtleDB