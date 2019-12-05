import { combineReducers } from 'redux'
import todosReducer from './TodosReducer';
import navReducer from './NavReducer';


const TurtleDB = combineReducers({
  navReducer,
  todosReducer
})

export default TurtleDB