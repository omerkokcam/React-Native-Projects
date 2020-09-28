import React, { Component } from 'react';
import { Text, View, StyleSheet } from 'react-native';
import Firebase from 'firebase';
import Header from './ortak/Header';
import LoginForm from './LoginForm';

class App extends Component {

//   componentDidMount(){
//     var firebaseConfig = {
//       apiKey: "AIzaSyDOlEqBy_5t3iJuC-1a9HO7oyMIupYZb8M",
//       authDomain: "loginapp-20ba3.firebaseapp.com",
//       databaseURL: "https://loginapp-20ba3.firebaseio.com",
//       projectId: "loginapp-20ba3",
//       storageBucket: "loginapp-20ba3.appspot.com",
//       messagingSenderId: "26596060904",
//       appId: "1:26596060904:web:d0948cb0551be950d4235d",
//       measurementId: "G-1B7W5JV2P0"
//     };
//     // Initialize Firebase
//     Firebase.initializeApp(firebaseConfig);
//   }

    

  render() {
    return (
      <View>
        <Header headerText={"Login"}/>
        <LoginForm/>
      </View>
    );
  }
}
const styles = StyleSheet.create({
 
});
export default App;
