import { View, TouchableOpacity, TextInput, Image } from 'react-native';
import React, { Component } from 'react'

export default class InputClass extends Component {
    constructor(props){
        super (props)
        this.state ={
            todos: [],
            todo
        }
    }
    createToDo (answer) {
        this.setState ({todo: answer})
    }
    addToDo(todo){
        //тут я должен записать свой текст в следующую часть ¯\_(ツ)_/¯
    }

    render() {
        return (
            <View style={{ flexDirection: 'row' }}>
                <TextInput
                    style={{ flex: 5, backgroundColor: 'white', borderColor: 'black', borderWidth: 2, fontSize: 20, }}
                    placeholder='Write your To Do'
                    placeholderTextColor='#8A5992'
                    onChangeText={(answer) => { this.createToDo(answer) }}
                >
                </TextInput>
                <View style={{ flex: 0.8, backgroundColor: 'gray' }}>
                    <TouchableOpacity onPress={() => this.addToDo(this.state.todo)}>
                        <Image
                            style={{ width: 55, height: 55, borderColor: 'black', borderWidth: 2, }}
                            source={require('./src/plus.png')} />
                    </TouchableOpacity>
                </View>
            </View>);
    }
}