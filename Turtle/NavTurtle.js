import { View, Text, TouchableOpacity, Button } from 'react-native';
import React, { Component } from 'react'
import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';
import { stylesForTodo, stylesForNav } from './StyleTurtle'
import CalculatorClass from '../Calculator/calculator'

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

export default class TodoList extends Component {
  static navigationOptions = {
    headerRight: () => <Text>Bye</Text>,
    headerTitle: () => (<Button onPress={() => alert('This is a button!')}
      title="Info" color="black" />),
  };
  render() {

    return (
      <View style={stylesForTodo.container2}>
        <Text>TodoList Screen</Text>
        <Text>
          itemId: {JSON.stringify(this.props.navigation.getParam('itemId', 'NO-ID'))}
        </Text>
        <Text>
          otherParam:{JSON.stringify(this.props.navigation.getParam('otherParam', 'value'))}
        </Text>
        <Button
          title="Go to TodoList... again"
          onPress={() =>
            this.props.navigation.push('ToDolist', {
              itemId: Math.floor(Math.random() * 100),
            })
          }
        />
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