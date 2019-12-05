import { View, Text, TouchableOpacity, Button } from 'react-native';
import React, { Component } from 'react'
import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';
import { stylesForTodo, stylesForNav } from './StyleTurtle'
import CalculatorClass from '../Calculator/calculator'
import List from '../FilmList/List';
import { TodoApp } from '../ToDoList/todoApp';

class HomeScreen extends Component {
  static navigationOptions = {
    title: 'DevEducation',
    headerStyle: { backgroundColor: 'red' },
    headerTitleStyle: { color: 'black' },
  };
  render() {
    return (
      <View style={stylesForNav.container}>
        <TouchableOpacity style={stylesForNav.btnStl} onPress={() => this.props.navigation.navigate('ToDolist', {
          itemId: 86,
          otherParam: 'anything you want here',
        })}>
          <Text style={[stylesForNav.btntxt]}>Working on it</Text>
        </TouchableOpacity>
        <TouchableOpacity style={stylesForNav.btnStl} onPress={() => this.props.navigation.navigate('Calculator')}>
          <Text style={[stylesForNav.btntxt]}>Go To Calculator</Text>
        </TouchableOpacity>
        <TouchableOpacity style={stylesForNav.btnStl} onPress={() => this.props.navigation.navigate('FilmList')}>
          <Text style={[stylesForNav.btntxt]}>Working on it</Text>
        </TouchableOpacity>
      </View>
    );
  }
}
const Turtle = createStackNavigator(
  {
    Home: HomeScreen,
    ToDolist: TodoApp,
    Calculator: CalculatorClass,
    FilmList: List
  },
  {
    initialRouteName: 'Home',
  },
);
export const SomeContainer = createAppContainer(Turtle);