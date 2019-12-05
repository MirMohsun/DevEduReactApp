import React from 'react'
import { View, Text, StyleSheet } from 'react-native'


const styles = StyleSheet.create({
  viewStyle: {
    backgroundColor: 'black',
    justifyContent:'center',
    shadowColor: 'gray',
    shadowOffset: { width: 1, height: 3 },
    shadowOpacity: 1,
  },
  textStyle: {
    justifyContent:'center',
    color: 'red',
    fontSize: 28,
    fontFamily: 'AvenirNext-DemiBold',
   paddingTop: 50
  }
})

const Header = props => {
  const { viewStyle, textStyle } = styles
  return (
    <View style={viewStyle}>
      <Text style={textStyle}>{props.title}</Text>
    </View>
  )
}


export default Header