import { View, Text, TouchableOpacity, Image } from 'react-native';
import React, { Component } from 'react'
import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';
import { stylesForNav } from './StyleTurtle'
import CalculatorClass from '../Calculator/calculator'
import TodoList from '../ToDoList/TodoList'

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
          <Text style={[stylesForNav.btntxt]}>Go To Todo List</Text>
        </TouchableOpacity>
        <TouchableOpacity style={stylesForNav.btnStl} onPress={() => this.props.navigation.navigate('ToDolist', {
          itemId: 86,
          otherParam: 'anything you want here',
        })}>
          <Text style={[stylesForNav.btntxt]}>Go To some screen</Text>
        </TouchableOpacity>
        <TouchableOpacity style={stylesForNav.btnStl} onPress={() => this.props.navigation.navigate('Calculator')}>
          <Text style={[stylesForNav.btntxt]}>Go To Calculator</Text>
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
  },
  {
    initialRouteName: 'Home',
  },
);
export const SomeContainer = createAppContainer(Turtle);