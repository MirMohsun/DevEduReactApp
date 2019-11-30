import { View, Text, Button } from 'react-native';
import React, { Component } from 'react'

export default class TodoList extends Component {
  static navigationOptions = {

    headerRight: () => <Text>Bye</Text>,
    headerTitle: () => (<Button onPress={() => alert('This is a button!')}
      title="Info" color="black" />),
  };

  render() {

    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Details Screen</Text>
        <Text>
          itemId: {JSON.stringify(this.props.navigation.getParam('itemId', 'NO-ID'))}
        </Text>
        <Text>
          otherParam:
          {JSON.stringify(this.props.navigation.getParam('otherParam', 'value'))}
        </Text>
        <Button
          title="Go to Details... again"
          onPress={() =>
            this.props.navigation.push('Details', {
              itemId: Math.floor(Math.random() * 100),
            })
          }
        />
      </View>
    );
  }
}

