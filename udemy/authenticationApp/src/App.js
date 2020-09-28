import React, { Component } from 'react';
import { Text, View, StyleSheet, TextInput, Button, Alert } from 'react-native';
import Banner from './component/banner';
import LoginForm from './component/login-form';
import firebase from 'firebase';

class AuthenticationApp extends Component {
    
    state = {
        loggedIn: null,
    }
    
    componentDidMount(){

        firebase.initializeApp({
            apiKey: "AIzaSyD-HxGB3xT3ZVGL2lxJfY0B_bvXUNGNyMs",
            authDomain: "authentication-430a0.firebaseapp.com",
            databaseURL: "https://authentication-430a0.firebaseio.com",
            projectId: "authentication-430a0",
            storageBucket: "authentication-430a0.appspot.com",
            messagingSenderId: "346996032612",
            appId: "1:346996032612:web:d8f38f05e568c07038cb71",
            measurementId: "G-NR0WXSL0PL"
        });
        
        firebase.auth().onAuthStateChanged((user) => {
            const loggedIn = user ? true : false ;
            this.setState({
                loggedIn 
            });
        });
    }

    render() {
        const { container } = styles;

        return (
            
            <View style={container} >
                <Banner></Banner>
                {this.renderContent()}
            </View>

        );
    }

    renderContent(){
        const {loggedIn} = this.state ;
        if(loggedIn){
            return(
                <Button title="Logout"
                        color="#737373"
                        onPress={() =>{
                            firebase.auth().signOut() }}/>
                        
            );
        }
        else{
            <LoginForm></LoginForm>
        }
    }

    
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',

    },

   

});
export default AuthenticationApp;
