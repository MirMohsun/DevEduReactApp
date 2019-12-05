import React, { Component } from 'react';
import { View, ScrollView, StyleSheet, TextInput, TouchableOpacity, Text } from 'react-native';
import Header from './Header'
import ImageCard from './ImageCard'

let url = 'http://api.tvmaze.com/search/shows?q='

export default class List extends Component {
  constructor(props) {
    super(props)
    this.state = {
      title: "Hi, you can search here some films",
      data: [],
      ssilka: '',
      frist: [],
    }
  }
  componentDidMount() {
    this.reguestUrl(url)
  }

  reguestUrl = async (URL) => {

    try {
      const response = await fetch(URL)
      const data =await response.json()
      console.log(data);
      this.setState({data})
      const first = data[1]
      console.log(first.show.image)
    } catch (e) {
      console.log("URL is wrong")
    }
  }

  searchUpdated(term) {
    this.setState({ searchTerm: term })

  }

  createurl = (searchTerm) => {
    const ssilka = url + searchTerm;
    this.setState({
      ssilka
    }
    )
    this.reguestUrl(ssilka)
  }
  render() {
    const { title, data } = this.state

    return (
      <View>
        <TouchableOpacity

          onPress={() => this.createurl(this.state.searchTerm)}>
          <Text style={{ fontSize: 30, color: 'black' }}>Search</Text>
          <TextInput
            style={{ height: 40, borderColor: 'gray', borderWidth: 1 }}
            onChangeText={(term) => { this.searchUpdated(term) }}
          ></TextInput>
        </TouchableOpacity>
        <Header title={title} />
        <ScrollView>
          <View style={styles.container}>
            {data.map(item => (
              <ImageCard data={item} key={item.id} />
            ))}
          </View>
        </ScrollView>
      </View>
    )

  }
}


const styles = StyleSheet.create({
  container: {
    marginTop: 30
  }
})