import { View, Text, TouchableOpacity, Button } from 'react-native';
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
    headerStyle: { backgroundColor: 'red' },
    headerTitleStyle: { color: 'black' },
  };
  render() {
    return (
      <View style={stylesForNav.container}>
        <TouchableOpacity style={stylesForNav.btnStl} onPress={() => this.props.navigation.navigate('ToDolist')}>
          <Text style={[stylesForNav.btntxt]}>Go To ToDoList</Text>
          <Text style={[stylesForNav.btntxt]}>Technical work is in progress</Text>
        </TouchableOpacity>
        <TouchableOpacity style={stylesForNav.btnStl} onPress={() => this.props.navigation.navigate('Calculator')}>
          <Text style={[stylesForNav.btntxt]}>Go To Calculator</Text>
        </TouchableOpacity>
        <TouchableOpacity style={stylesForNav.btnStl} onPress={() => this.props.navigation.navigate('FilmList')}>
          <Text style={[stylesForNav.btntxt]}>FilmList</Text>
          <Text style={[stylesForNav.btntxt]}>Technical work is in progress</Text>
        </TouchableOpacity>
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