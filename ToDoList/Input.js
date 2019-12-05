import { View, TouchableOpacity, TextInput, Image } from 'react-native';
import React, { Component } from 'react'

export default class InputClass extends Component {
    
    render() {
        return (
            <View style={{ flexDirection: 'row' }}>
                <TextInput style={{ flex: 5, backgroundColor: 'white', borderColor: 'black', borderWidth: 2, fontSize: 20, }}>
                    onChangeText={(txt) => this.setState({ txt })}
                    value={this.state.txt}
                </TextInput>
                <View style={{ flex: 0.8, backgroundColor: 'gray' }}>
                    <TouchableOpacity >
                        <Image
                            style={{ width: 55, height: 55, borderColor: 'black', borderWidth: 2, }}
                            source={require('../src/plus.png')} />
                    </TouchableOpacity>
                </View>
            </View>);
    }
}