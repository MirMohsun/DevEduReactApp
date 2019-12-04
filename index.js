import { AppRegistry } from 'react-native';
import App from './App';
import { name as appName } from './app.json';
import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import TurtleDB from './ToDoList/reducer/'
import React from 'react'
import { logger } from 'redux-logger'


const turtleStrore = createStore(TurtleDB)
const Turtle = () =>
    <Provider store={turtleStrore}><App /></Provider>;
AppRegistry.registerComponent(appName, () => Turtle);
