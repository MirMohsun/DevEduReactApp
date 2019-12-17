import { View, Text, TouchableOpacity, Image } from 'react-native';
import React, { Component } from 'react'
import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import { stylesForNav } from './StyleTurtle'
import CalculatorClass from '../Calculator/calculator'
import TodoList from '../ToDoList/TodoList'
import List from '../FilList/List'


class HomeScreen extends Component {
  static navigationOptions = {
    title: 'DevEducation',
    headerStyle: { backgroundColor: '#1D2020' },
    headerTitleStyle: { color: 'white', fontFamily: 'a-dark-wedding1' },
  };
  constructor() {
    super()
    this.state = {
      inDevelopment: '                                        (In development)'
    }
  }
  render() {
    return (
      <View style={stylesForNav.container}>
        <View style={{ backgroundColor: '#568795', borderRadius: 75, marginBottom: 20 }}>
          <Image
            style={{ width: 250, height: 50, }}
            source={require('./src/0.png')} />
        </View>
        <View style={{ alignContent: 'flex-start', width: 350, justifyContent: 'space-around' }}>
          <TouchableOpacity style={stylesForNav.btnStl} onPress={() => this.props.navigation.navigate('Calculator')}>
            <Text style={[stylesForNav.btntxt]}>Calculator</Text>
          </TouchableOpacity>
          <TouchableOpacity style={stylesForNav.btnStl} onPress={() => this.props.navigation.navigate('FilmList')}>
            <Text style={[stylesForNav.btntxt]}>FilmList</Text>
          </TouchableOpacity>
          <TouchableOpacity style={stylesForNav.btnStl} onPress={() => this.props.navigation.navigate('ToDolist')}>
            <Text style={[stylesForNav.btntxt]}>ToDoList{this.state.inDevelopment}</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}
const IHome = createStackNavigator(
  {
    Home: HomeScreen,
    ToDolist: TodoList,
    Calculator: CalculatorClass,
    FilmList: List
  },
  {
    headerMode: 'none',
    navigationOptions: {
      headerVisible: true,
    }
  },
  {
    bottomTabs: {
      drawBehind: true,
    },
    initialRouteName: 'Home',
  },
)
const IFilmList = createStackNavigator(
  {
    Home: HomeScreen,
    ToDolist: TodoList,
    Calculator: CalculatorClass,
    FilmList: List
  },
  {
    initialRouteName: 'FilmList',
    headerMode: 'none',
    navigationOptions: {
      headerVisible: true,
    }
  },
);
const ICalculator = createStackNavigator(
  {
    Home: HomeScreen,
    ToDolist: TodoList,
    Calculator: CalculatorClass,
    FilmList: List,
  },
  {
    initialRouteName: 'Calculator',
    headerMode: 'none',
    navigationOptions: {
      headerVisible: true,
    }
  },
);

const bottomTab = createBottomTabNavigator(
  {
    Home:IHome,
    Calculator: ICalculator,
    FilmList: IFilmList,
  },
  {
    headerMode: 'none',
    navigationOptions: {
      headerVisible: false,
    },
    tabStyle: {
      borderRadius: 100,
    },
    tabBarOptions: {
      inactiveTintColor: 'white',
      activeTintColor: '#78568D',
      labelStyle: {
        fontSize: 30,
        fontFamily: 'parnas-deco'
      },
      tabStyle: {
        width: 150,
      },
      style: {
        backgroundColor: '#1D2020',
      },
    }
  }
)

const someNav = createStackNavigator(
  {
    Home: HomeScreen,
    bottomTab: bottomTab
  },
  {
    headerMode: 'none',
    navigationOptions: {
      headerVisible: false,
    },
  }
)

export const SomeContainer = createAppContainer(someNav)
