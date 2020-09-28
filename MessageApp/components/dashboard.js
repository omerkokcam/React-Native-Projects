import React, { Component } from 'react';
import { StyleSheet, View, Text, TouchableOpacity, Button } from 'react-native';
import firebase from 'firebase';
import AsyncStorage from '@react-native-community/async-storage';
import User from '../User';
import { FlatList } from 'react-native-gesture-handler';
export default class Dashboard extends Component {
  

  state = {
    users:[],
  }
  componentDidMount(){
    let dbRef = firebase.database().ref('users');
    dbRef.on('child_added',(value)=>{
      let person = value.val();
      person.phone = value.key;
      this.setState((prevState)=>{
        return {
          users : [...prevState.users, person]
        }
      })
    });
  }

  _logOut = async () => {
    await AsyncStorage.clear();
    this.props.navigation.navigate('Giriş Yap')
  }

  renderRow = ({item}) => {
    return (
      <TouchableOpacity onPress={()=>this.props.navigation.navigate('Konuşma')} style={styles.renderRowStyle}>
        <Text style={styles.textStyle}>{item.name}</Text>
      </TouchableOpacity>
    )
  }
  render() {

    return (
      <View style={styles.container}>
        <FlatList
          data={this.state.users}
          renderItem={this.renderRow}
          keyExtractor={(item)=>item.phone}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    display: "flex",
    flexDirection:'row',
   
    
    backgroundColor: '#fff'
  },
  textStyle: {
    fontSize: 18,
    fontWeight:'bold'
  },
  renderRowStyle:{
    borderBottomWidth:1,
    borderColor:'#000',
    padding:10,
  }
});