import React from 'react'
import { Dimensions, Image, View, Text, StyleSheet, } from 'react-native'
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
    fontFamily: 'AvenirNext-DemiBold',
    fontSize: 18,
    alignSelf: 'flex-start',
    color: 'gray'
  },
  cover: {
    padding:10,
    width: w / 2.4,
    height: h * 0.63,
    borderRadius: 50,
  }
})

const ImageCard = ({ data }) => {
  const { container, sub, h1, cover } = styles
  const image = data.show.image.original
  const name = data.show.name
  const date = data.show.premiered
  const status = data.show.status
  const idmb = data.show.externals.imdb
  console.log(data.show);

  return (
    <View style={container}>
        <Image style={cover} source={{ uri: image }} />
      <View style={{ flex: 3, flexDirection: 'column', paddingLeft: 5,  }}>
        <Text style={h1}>{name}</Text>
        <Text style={h1}>Дата релиза: {date}</Text>
        <Text style={h1}>Статус: {status}</Text>
      </View>
    </View>
  )
}

export default ImageCard