import React, { Component } from 'react';
import { StyleSheet, Text, View, TextInput,AsyncStorage, Button, Alert } from 'react-native';
import firebase from '../database/firebase';
import User from '../User';
import styles from '../constants/styles'

export default class Login extends Component {
  
  constructor(props) {
    super(props);
    this.state = { 
      phone: '', 
      displayName: '',
      
    }
  }


  updateInputVal = (val, prop) => {
    const state = this.state;
    state[prop] = val;
    this.setState(state);
  }

  userLogin = async() => {
    if(this.state.phone === '' && this.state.displayName === '') {
      Alert.alert('Hata','Ad Soyad veya Telefon Numarası kısmı boş bırakılamaz!')
    } else if(this.state.phone.length !== 12){
      Alert.alert('Hata','Yanlış Telefon Numarası lütfen 90 555 555 55 55 şeklinde yazınız.')
    } 
    else {
      //save user data
      // Alert.alert(this.state.phone +"\n"+this.state.displayName)
      await AsyncStorage.setItem('userPhone',this.state.phone);
      User.phone = this.state.phone;
      User.displayName = this.state.displayName;
      this.props.navigation.navigate('Konuşmalar');
      firebase.database().ref('users/' + User.phone).set({name:this.state.displayName})
    }
  }

  render() {
    
    return (
      <View style={styles.container}>  
        <TextInput
          style={styles.inputStyle}
          placeholder="Telefon Numarası"
          keyboardType="number-pad"
          value={this.state.phone}
          onChangeText={(val) => this.updateInputVal(val, 'phone')}
        />
        <TextInput
          style={styles.inputStyle}
          placeholder="Ad Soyad"
          value={this.state.displayName}
          onChangeText={(val) => this.updateInputVal(val, 'displayName')}
          maxLength={45}
          
        />   
        
        <Button
          color="#43ddc5"
          title="Giriş Yap"
          onPress={this.userLogin}
        />   
                         
      </View>
    );
  }
}
