import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import TurtleDB from './reducer/DB'
import React  from 'react'

const turtleStrore = createStore(TurtleDB)
const Turtle = () =>     
<Provider store={turtleStrore}><App/></Provider>;
AppRegistry.registerComponent(appName, () => Turtle);
