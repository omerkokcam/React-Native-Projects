import React, { Component } from 'react';
import { View, Text, StyleSheet, TextInput, Button } from 'react-native';
import firebase from 'firebase';
class Giris extends Component {

    componentDidMount(){
        firebase.initializeApp({
            apiKey: "AIzaSyBw-Bgi8-vxqKBIaghgPvXDr44r127UOuA",
            authDomain: "kayit-ol.firebaseapp.com",
            databaseURL: "https://kayit-ol.firebaseio.com",
            projectId: "kayit-ol",
            storageBucket: "kayit-ol.appspot.com",
            messagingSenderId: "67938695481",
            appId: "1:67938695481:web:58d7aa43b359a5c5eb90e8"
        });
    } 

    

    state = {
        email : '',
        password : '',
        name:''
    }


    butonaTıklandıgında(){
        const {email,password} = this.state
        firebase.auth().createUserWithEmailAndPassword(email,password);
    }
    


    render() {
       
        const { header, headerText, mainView, inputView, buttonStyle } = styles;
        
        return (
            
                <View style={mainView}>
                    <View style={header}>
                    <Text style={headerText}>Kayıt Ol</Text>
                    </View>
                    <View style={inputView}>
                        <TextInput
                        style = {{width:200,borderBottomWidth:0.3}}
                        placeholder="Email"
                        onChangeText = {(text) => {
                            this.setState({
                                email:text
                            });
                        }}
                        value = {this.state.email} />
                        <TextInput
                        style = {{width:200,borderBottomWidth:0.3}}
                        placeholder="Password"
                        onChangeText = {(text) => {
                            this.setState({
                                password:text
                            });
                        }}
                        value = {this.state.password}
                        secureTextEntry />
                    </View>
                    <View style={buttonStyle}>
                        <Button
                        title="Kayıt Ol"
                        color='#009122'
                        onPress={this.butonaTıklandıgında.bind(this)}
                        />
                    </View>
                </View>
            
        );
    }
}


const styles = StyleSheet.create({

    mainView: {
        flex: 1,
        flexDirection: 'column',
       


    },
    header:{
        height:200,
        width:'100%',
        backgroundColor:'skyblue',


    },
    headerText: {
        fontSize: 30,
        alignSelf: 'center',
        color: 'white',
        paddingTop:80,
    },
    inputView:{
        alignSelf:'center',
        paddingTop:50,
    }, 
    buttonStyle:{
        alignSelf:'center',
        paddingTop:15,
        width:'50%'
    }


});


export default Giris;
