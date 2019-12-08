import { View, TouchableOpacity, TextInput, FlatList, Image } from 'react-native';
import React, { Component } from 'react'
import InputClass from './Input'
import Output from './Output'

export default class TodoList extends Component {
  static navigationOptions = {
    title: 'Your ToDo List',
    headerStyle: { backgroundColor: '#11473F' },
    headerTitleStyle: { color: 'white' },
  };

  render() {

    return (
      <View style={{ flex: 1, }}>
        <InputClass/>
        <Output/>
      </View>
    );
  }
}