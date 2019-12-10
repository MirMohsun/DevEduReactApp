import { StyleSheet } from 'react-native'
import {changeColor} from './calculator'


export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white'
  },
  row: {
    flexDirection: 'row',
    flex: 1,
    justifyContent: 'space-around',
    alignItems: 'stretch'
  },
  number: {
    flex: 2,
    justifyContent: 'center',
    backgroundColor: '#76C4B0',
    justifyContent: 'center',
    alignItems: 'flex-end',
  },
  result: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#76C4B0',
    alignItems: 'flex-end',
  },
  btnstl: {
    flex: 1,
    alignItems: 'center',
    alignSelf: 'stretch',
    justifyContent: 'center'

  },
  btntxt: {
    fontSize: 40,
    color: '#C86CC3',
  },
  buttons: {
    flex: 7,
    flexDirection: 'row'
  },
  operations: {
    flex: 1,
    justifyContent: 'space-around',
    alignItems: 'stretch',
    backgroundColor: '#26242A'
  },
  numbers: {
    flex: 3,
    color: 'pink',
    backgroundColor: '#26242A',
  },
  numberText: {
    fontSize: 40,
    color: 'black',
  },
  optxt:{
    color: '#798B3C',
    fontSize: 35
  }
})