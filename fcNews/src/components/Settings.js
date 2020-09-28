import React, { Component } from 'react';
import { View, Text, StyleSheet, Dimensions, TouchableOpacity, Button, Alert, LogBox } from 'react-native';
import SelectMultiple from 'react-native-select-multiple'
import firebase from 'firebase';
import AsyncStorage from '@react-native-community/async-storage';
import MaterialIcons from 'react-native-vector-icons/dist/MaterialIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';
LogBox.ignoreAllLogs();
const categories = ['Science', 'Business', 'Health', 'Technology', 'Sports', 'Entertainment']

export default class Settings extends Component {
  constructor(props) {
    super(props);
    this.state = {
      displayName: '',
      userId:'',
      selectedCategories: [],
    }
    
  }

  //firebaseden veriyi cek
  getData(userId) {
    firebase.database().ref('Kategori/' + userId)
      .once('value')
      .then((snapshot) => {
        var data = snapshot.val().selectedCategories;
        var arrLength = data.length;
        let fetchCategories = [];
        for (var i = 0; i < arrLength; i++) {
          fetchCategories[i] = data[i].value
        }
        this.setState({selectedCategories:fetchCategories})
      })
      .catch((error) => { console.log('Hata: ' + error.message) })
    
  }

  setData(userId, selectedCategories) {
    this.setState({ selectedCategories })
    firebase.database().ref('Kategori/' + userId).set({
      selectedCategories
    }).then(() => { console.log('Inserted') })
      .catch((error) => { console.log(error.message) })
  }

   async componentDidMount() {
    
    var userId = await AsyncStorage.getItem('uid');
    this.setState({ userId: userId })
    this.getData(userId)
    
     
  }
  //listede değişiklik olursa 
  onSelectionsChange = (selectedCategories) => {
    this.setState({ selectedCategories })
  }

  async signOut() {
    console.log("Çıkışta Token : " + await AsyncStorage.getItem('loginToken'));
    await AsyncStorage.setItem('loginToken', 'null');
    firebase.auth().signOut();
    this.props.navigation.navigate('Giriş Yap');
    console.log("Kullanıcı çıkış yaptı.")
    console.log("2. Çıkışta Token : " + await AsyncStorage.getItem('loginToken'));
  }


  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.settingText}>Ayarlar</Text>
        <View style={styles.icons}>
          <TouchableOpacity onPress={() => { this.props.navigation.navigate('Profil') }}>
            <Ionicons name="md-person-circle-outline" size={45} color="#1db45c" />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => this.signOut()}>
            <MaterialIcons name="exit-to-app" size={45} color="#1db45c" />
          </TouchableOpacity>
        </View>
        < Text style={styles.kategoriText}>Kategoriler</Text>
        <SelectMultiple
          items={categories}
          selectedItems={this.state.selectedCategories}
          onSelectionsChange={this.onSelectionsChange}
        />
        <View style={styles.buttonStyle}>
          <Button title='Kaydet' color='#1db45c' onPress={() => { this.setData(this.state.userId, this.state.selectedCategories) }} />
        </View>
      </View>
    );
  }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: '#fff',
    paddingTop: 10,
  },
  settingText: {
    textAlign: 'center',
    fontSize: 25,
    color: '#1db45c'
  },
  kategoriText: {
    fontSize: 20,
    paddingLeft: 12,
    fontWeight: 'bold'
  },
  displayNameText: {
    fontSize: 20,
    color: '#1db45c',
    flexDirection: 'row',
    paddingLeft: 180,
    paddingTop: 20,
  },
  buttonStyle: {
    paddingTop: 10,
    flexDirection: 'column',
    justifyContent: 'center',
    paddingBottom: 200,
    alignItems: 'center'
  },
  icons: {
    flexDirection: 'row',
    justifyContent: 'flex-end'
  }

})