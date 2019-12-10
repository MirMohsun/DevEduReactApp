import React from 'react'
import { Dimensions, Image, View, Text, StyleSheet, } from 'react-native'
import defaultImg from './src/defaultImg.png'

const size = Dimensions.get('window')
const w = size.width
const h = size.height

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignContent: 'stretch'
  },
  h1: {
    paddingTop: 10,
    fontFamily: 'theater-afisha',
    fontSize: 18,
    alignSelf: 'flex-start',
    color: 'gray'
  },
  cover: {
    padding: 10,
    width: w / 2.4,
    height: h * 0.63,
    borderRadius: 50,
  }
})


const ImageCard = ({ data }) => {
  const { container, h1, cover } = styles
  try {
    image = data.show.image.original
  }
  catch (e) {
    {
      return <Image style={{
        padding: 100,
        width: w,
        height: h * 0.63,
        borderRadius: 50,
      }}
        source={require('./src/defaultImg.png')} />
    }
  }

  const name = data.show.name
  const date = data.show.premiered
  const status = data.show.status
  console.log(data.show.image.original)
  return (
    <View style={container}>
      <Image style={cover} source={{ uri: image }} />
      <View style={{ flex: 3, flexDirection: 'column', paddingLeft: 5, }}>
        <Text style={h1}>{name}</Text>
        <Text style={h1}>Дата релиза: {date}</Text>
        <Text style={h1}>Статус: {status}</Text>
      </View>
    </View>
  )
}

export default ImageCard