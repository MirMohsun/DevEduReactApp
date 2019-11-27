import React, { Component } from 'react';
import {styles} from  './StyleTurtle'
import { FlatList, Text, View, Alert, TouchableOpacity, TextInput } from 'react-native';

export default class Turtle extends Component {
  constructor(props) {
    super(props);
    this.array = [],
      this.state = {
        arrayHolder: [],
        textInput_Holder: ''
      }
  }
  
  joinData = () => {
    this.array.push({ title: this.state.textInput_Holder });
    this.setState({ arrayHolder: [...this.array] })
  }

  FlatListItemSeparator = () => {
    return (
      <View
        style={{
          height: 1,
          width: "100%",
          backgroundColor: "#607D8B",
        }}
      />
    );
  }

  GetItem(item) {

    Alert.alert(item);

  }


  render() {
    return (
      <View style={styles.MainContainer}>
        <TextInput
          placeholder="Enter Value Here"
          onChangeText={data => this.setState({ textInput_Holder: data })}
          style={styles.textInputStyle}
          underlineColorAndroid='transparent'
        />
        <TouchableOpacity onPress={this.joinData} activeOpacity={0.7} style={styles.button} >
          <Text style={styles.buttonText}> Add Values To FlatList </Text>
        </TouchableOpacity>
        <FlatList
          data={this.state.arrayHolder}
          width='100%'
          extraData={this.state.arrayHolder}
          keyExtractor={(index) => index.toString()}
          ItemSeparatorComponent={this.FlatListItemSeparator}
          renderItem={({ item }) => <Text style={styles.item} onPress={this.GetItem.bind(this, item.title)} > {item.title} </Text>}
        />
      </View>
    );
  }
}
