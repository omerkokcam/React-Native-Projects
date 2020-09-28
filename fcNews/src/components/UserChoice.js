import React, { Component } from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';
import Card from './Card';
import axios from 'axios';
import firebase from 'firebase';
import AsyncStorage from '@react-native-community/async-storage';

export default class UserChoice extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userId: '',
      data: []
    };
  }

  getSelectedCategories(userId) {
    firebase.database().ref('Kategori/' + userId)
      .once('value')
      .then((snapshot) => {
        var data = snapshot.val().selectedCategories;
        var arrLength = data.length;
        let fetchCategories = [];
        for (var i = 0; i < arrLength; i++) {
          fetchCategories[i] = data[i].value
        }
        fetchCategories.forEach(element => {
          this.getCategoryNewsDatas(element)
        });
      })
      .catch((error) => { console.log('Hata: ' + error.message) })
  }
  getCategoryNewsDatas(category) {
    axios.get('http://newsapi.org/v2/top-headlines?country=tr&category='+category+'&apiKey=54c0bd408c2940cd9ee43384265e58a3')
         .then(response => {
            this.setState({
              data: [...this.state.data, ...response.data.articles]
            })
         })
  }


  async componentDidMount() {
    var userId = await AsyncStorage.getItem('uid');
    this.setState({ userId: userId })
    this.getSelectedCategories(userId)
    
  }
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.userChoiceText}>Senin İçin Seçilenler</Text>
        <FlatList
          style={styles.container}
          showsVerticalScrollIndicator={false}
          data={this.state.data}
          keyExtractor={(item, key) => key.toString()}
          renderItem={({ item }) => <Card data={item}/>}
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
  userChoiceText: {

    fontSize: 25,
    color: '#1db45c',
    paddingTop: 10,
    textAlign: 'center'

  },
})