import React, { Component } from "react";
import { increaseaction, decreaseaction, resetaction } from './actions/actions'
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { connect } from 'react-redux'
import {createLogger} from 'redux-logger';

export class TodoList extends Component {
    render() {
        
        return (
            <View style={styles.container}>
                <View style={{ flexDirection: 'column', width: 350, justifyContent: 'flex-start' }}>
                    <TouchableOpacity onPress={() => this.props.increaseCounter(this.props.counter)}>
                        <Text style={{ fontSize: 35, color: 'red', borderColor: 'black' }}>Increase</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => this.props.decreaseCounter(this.props.counter)}>
                        <Text style={{ fontSize: 35, color: 'red' }}>Decrease</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => this.props.resetCounter()}>
                        <Text style={{ fontSize: 35, color: 'red' }}>Reset</Text>
                    </TouchableOpacity>
                    <Text style={{ fontSize: 30, color: 'red' }}>Result is {this.props.counter}</Text>
                </View>
            </View>
        );
    }

}

function mapStateToProps(state) {
    return {
        counter: state.TurtleTD.counter
    }
}

function mapDispatchToProps(dispatch) {

    return {

        increaseCounter: (counter) => dispatch(increaseaction(counter)),
        decreaseCounter: (counter) => dispatch(decreaseaction(counter)),
        resetCounter: () => dispatch(resetaction()),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(TodoList)


const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'yellow'
    }
});