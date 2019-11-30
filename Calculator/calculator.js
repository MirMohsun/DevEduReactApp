import React, { Component } from 'react';
import { View, Text, TouchableOpacity, Easing, Animated, } from 'react-native';
import { styles } from './style';

export default class CalculatorClass extends Component {
    static navigationOptions = {
        title: 'Calculator',
        headerStyle: { backgroundColor: 'gray' },
        headerTitleStyle: { color: 'black' },
    };
    constructor() {
        super()
        this.state = {
            text: "",
            resText: ""
        }
        this.operation = ['C', '+', '-', '*', '/']
        this.animatedValue = new Animated.Value(0)
    }

    componentDidMount() {
        this.animate()
    }
    animate() {
        this.animatedValue.setValue(0)
        Animated.timing(
            this.animatedValue,
            {
                toValue: 1000,
                duration: 2000,
                easing: Easing.linear
            }
        ).start(() => this.animate())
    }
    calculateResult() {
        const text = this.state.text

        console.log(text, eval(text))
        this.setState({
            resText: eval(text)
        })

    }
    numClicked(text) {
        console.log("pressed btn is " + text)
        if (text == '=') {
            return this.calculateResult()
        }
        this.setState({ text: this.state.text + text })
    }
    opClicked(operation) {
        switch (operation) {
            case 'C':
                let text = this.state.text.split('')
                text.pop()
                this.setState({ text: text.join('') })
                break
            case '+':
            case '-':
            case '*':
            case '/':
                const last = this.state.text.split('').pop()
                if (this.operation.indexOf(last) > 0) return
                if (this.state.text == "") return
                this.setState({
                    text: this.state.text + operation
                })
        }

    }

    render() {
        const changeColor = this.animatedValue.interpolate({
            inputRange: [0, 500, 1000],
            outputRange: ['red', 'green', 'black']
        })
        let ops = []
        for (let i = 0; i < 5; i++) {
            ops.push(
                <TouchableOpacity style={styles.btnstl} onPress={() => this.opClicked(this.operation[i])}>
                    <Text style={styles.optxt}>{this.operation[i]}</Text>
                </TouchableOpacity>)
        }
        let rows = []
        let nums = [[7, 8, 9], [4, 5, 6], [1, 2, 3], ['.', 0, '=']]
        for (let i = 0; i < 4; i++) {
            let row = []
            for (let j = 0; j < 3; j++) {
                row.push(
                    <TouchableOpacity style={styles.btnstl} onPress={() => this.numClicked(nums[i][j])}>
                        <Text style={[styles.btntxt]}>{nums[i][j]}</Text>
                    </TouchableOpacity>)
            }
            rows.push(<View style={styles.row}>{row}</View>)
        }
        return (
            <View style={styles.container}>
                <View style={styles.number}>
                    <Text style={styles.numberText}>{this.state.text}</Text>
                </View>
                <View style={styles.result}>
                    <Animated.Text style={{ color: changeColor, fontSize: 40 }}>{this.state.resText}</Animated.Text>
                </View>
                <View style={styles.buttons}>
                    <View style={styles.numbers}>
                        {rows}
                    </View>
                    <View style={styles.operations}>
                        {ops}
                    </View>
                </View>
            </View>
        );
    }
}

/*resultText: {
                    color: changeColor,
                fontSize: 30,
  },*/