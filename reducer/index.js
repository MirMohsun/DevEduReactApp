import {combineReducers} from 'redux'
import TurtleTD from './reducers'
import visibilty from './visibility'

const TurtleDB = combineReducers(TurtleTD ,visibilty )

export default TurtleDB