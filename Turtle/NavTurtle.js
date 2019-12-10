import { View, Text, TouchableOpacity, Image } from 'react-native';
import React, { Component } from 'react'
import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';
import { stylesForNav } from './StyleTurtle'
import CalculatorClass from '../Calculator/calculator'
import TodoList from '../ToDoList/TodoList'
import List from '../FilList/List'

class HomeScreen extends Component {
  static navigationOptions = {
    title: 'DevEducation',
    headerStyle: { backgroundColor: '#1D2020' },
    headerTitleStyle: { color: 'white', fontFamily: 'a-dark-wedding1' },
  };
  constructor() {
    super()
    this.state = {
      inDevelopment: '                                        (In development)'
    }
  }


  render() {
    return (
      <View style={stylesForNav.container}>
        <View style={{ backgroundColor: '#568795', borderRadius: 75, marginBottom: 20 }}>
          <Image
            style={{ width: 250, height: 50, }}
            source={require('./src/0.png')} />
        </View>
        <View style={{ alignContent: 'flex-start', width: 350, justifyContent: 'space-around' }}>
          <TouchableOpacity style={stylesForNav.btnStl} onPress={() => this.props.navigation.navigate('Calculator')}>
            <Text style={[stylesForNav.btntxt]}>Calculator</Text>
          </TouchableOpacity>
          <TouchableOpacity style={stylesForNav.btnStl} onPress={() => this.props.navigation.navigate('FilmList')}>
            <Text style={[stylesForNav.btntxt]}>FilmList</Text>
          </TouchableOpacity>
          <TouchableOpacity style={stylesForNav.btnStl} onPress={() => this.props.navigation.navigate('ToDolist')}>
            <Text style={[stylesForNav.btntxt]}>ToDoList{this.state.inDevelopment}</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}
const Turtle = createStackNavigator(
  {
    Home: HomeScreen,
    ToDolist: TodoList,
    Calculator: CalculatorClass,
    FilmList: List
  },
  {
    initialRouteName: 'Home',
  },
);
export const SomeContainer = createAppContainer(Turtle);