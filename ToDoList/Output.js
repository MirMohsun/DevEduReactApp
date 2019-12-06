import { View, FlatList } from 'react-native';
import React, { Component } from 'react'
import { ScrollView } from 'react-native-gesture-handler';

export default class Output extends Component {

    render() {
        return (
            <View style={{ flex: 1,flexDirection: 'row', backgroundColor: 'gray'}}>
                <FlatList>
                    <ScrollView>

                    </ScrollView>
                </FlatList>
            </View>);
    }
}
