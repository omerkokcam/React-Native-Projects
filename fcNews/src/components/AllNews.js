import React, { Component } from 'react';
import { View, Text, StyleSheet, Dimensions, FlatList } from 'react-native';
import Card from './Card';
import axios from 'axios';



const WIDTH = Dimensions.get("screen").width;

export default class AllNews extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      refreshing: false,
    };
  }

  getNewsData = () => {
    this.setState({ refreshing: true });
    axios.get('http://newsapi.org/v2/top-headlines?country=tr&apiKey=54c0bd408c2940cd9ee43384265e58a3')
      .then(response => {
        this.setState({
          data: response.data.articles,
          refreshing: false
        });
      });
  }
  componentDidMount() {
    this.getNewsData();
  }
  

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.allNewsText}>Tüm Haberler</Text>
        <FlatList
          style={styles.container}
          showsVerticalScrollIndicator={false}
          data={this.state.data}
          keyExtractor={(item, key) => key.toString()}
          renderItem={({ item }) => <Card data={item} />}
          refreshing={this.state.refreshing}
          onRefresh={this.getNewsData}
        />

      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    width: '100%',
    backgroundColor: '#fff'
  },
  allNewsText: {
    fontSize: 25,
    color: '#1db45c',
    paddingBottom: 10,
    textAlign: 'center',
    paddingTop:10,
  },
  card: {
    marginBottom: 15,
    width: '95%',
    borderRadius: 8,
    padding: 10,
    paddingHorizontal: 10,
    alignSelf: 'center',

    //shadow
    backgroundColor: '#FFF',
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 6,
    },
    shadowOpacity: 0.39,
    shadowRadius: 8.30,

    elevation: 13,
  },
  title: {

    fontSize: 23,
    fontWeight: 'bold',

  },
  content: {
    fontSize: 17,
  },
  image: {
    height: 200,
    width: '100%',
    justifyContent: 'center',
    borderRadius: 5,

  },
  authorText: {
    flex: 1,
    flexDirection: 'row',

    justifyContent: 'space-between'
  },

  timeAndSourceText: {
    flexDirection: 'row',
    fontSize: 15,
    color: '#aaa',

  },

})