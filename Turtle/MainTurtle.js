import React, { Component } from "react";
import {
  View,
  TextInput,
  TouchableOpacity,
  Image,
} from "react-native";
import {styles} from './StyleTurtle'

export class Turtle extends Component {

  state = {text:''}
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.cont3}>
          <TextInput 
          onChangeText={(text)=> this.setState({text})}
          value = {this.state.text}
          placeholder="Some Text Here" 
          style={styles.TextHolder}/>
          <TouchableOpacity onPress={() => alert('Added ToDo to list')}>
            <Image style={styles.imgStyle} source={require('../src/plus.png')} />
          </TouchableOpacity>
        </View>
        <View>

        </View>
      </View>
    );
  }
}
export default Turtle;

