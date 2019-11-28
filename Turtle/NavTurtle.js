import React from 'react';
import { View, Text, Button } from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createBottomTabNavigator } from 'react-navigation-tabs';
import {Turtle} from './MainTurtle' 


class HomeScreen extends React.Component {
  static navigationOptions = {
    title: 'Hello my home',
    }; 
  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Home Screen</Text>
        <Button
          title="Go to Details"
          onPress={() => this.props.navigation.navigate('Details', {
            itemId: 86,
            otherParam: 'anything you want here',
          })
          }
        />

      </View>
    );
  }
}

class DetailsScreen extends React.Component {
  static navigationOptions = { 
    headerRight: () => <Text>Bye</Text>, 
    headerTitle: () => ( <Button onPress={() => alert('This is a button!')} 
    title="Info" color="black" /> ),
     };
  render() {
    return (
        <Turtle/>
    );
  }
}

const TurtleRoute = createStackNavigator(
  {
    Home: HomeScreen,
    Details: DetailsScreen,
    
  },
  {
    initialRouteName: 'Home',
  },

);

const AppContainer = createAppContainer(TurtleRoute);


export default class NavTurtle extends React.Component {
  render() {
    return (
    <AppContainer />
      )
  }
}
const TurtleRouteTab = createBottomTabNavigator(
    {
      Tab1: HomeScreen,
      Tab2: DetailsScreen,
    }
    
  );
  
  class Tab1Screen extends React.Component {
    static navigationOptions = {
      title: 'Hello my home',
      }; 
     
    render() {
      return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
          <Text>Some Text</Text>
        </View>
      );
    }
  }
  
  