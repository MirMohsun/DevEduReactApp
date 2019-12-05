import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import RootReducer from './ToDoList/reducer/'
import React  from 'react'

const turtleStrore = createStore(RootReducer)
const Turtle = () =>     
<Provider store={turtleStrore}><App/></Provider>;
AppRegistry.registerComponent(appName, () => Turtle);
