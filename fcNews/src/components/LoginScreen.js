import React, { Component } from 'react';
import { View, Text, StyleSheet, TextInput, Button } from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';
import Header from './Header';
import firebase from 'firebase';
export default class LoginScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: 'omermirac.kokcam@gmail.com',
            password: '12345678',
            errorMessage: '',
            uid:'', 
        };
    }
    updateInputVal = (val, prop) => {
        const state = this.state;
        state[prop] = val;
        this.setState(state);
    }
    async loginUser() {
        firebase.auth().signInWithEmailAndPassword(this.state.email, this.state.password)
            .then(async () => {
                console.log("Kullanıcı giriş yaptı.")
                const loginToken = firebase.auth().currentUser.refreshToken;
                const displayName = firebase.auth().currentUser.displayName;
                const email = firebase.auth().currentUser.email;
                const uid = firebase.auth().currentUser.uid;
                await AsyncStorage.setItem('uid',uid)
                await AsyncStorage.setItem('loginToken',loginToken)
                await AsyncStorage.setItem('email',email)
                let token = await AsyncStorage.getItem('loginToken');
                console.log("Loginde Token numarası : " +token)
                this.setState({
                    email: '',
                    password: ''
                })
                this.props.navigation.navigate('Ana Sayfa',{screen:'Tüm Haberler'});
            })
            .catch(error => this.setState({ errorMessage: error.message }));
    }
    render() {
        const errMsg = this.state.errorMessage ? (<Text style={styles.errorMessage}>{this.state.errorMessage}</Text>) : null;
        return (
            <View style={styles.container}>
                <Header />
                <Text style={styles.loginText}> Giriş Yap</Text>
                <TextInput
                    style={styles.inputStyle}
                    placeholder="Email"
                    keyboardType="email-address"
                    value={this.state.email}
                    onChangeText={(val) => this.updateInputVal(val, 'email')}
                />
                <TextInput
                    style={styles.inputStyle}
                    placeholder="Şifre"
                    value={this.state.password}
                    onChangeText={(val) => this.updateInputVal(val, 'password')}
                    secureTextEntry
                />
                {errMsg}
                <Button
                    color="#1db45c"
                    title="Giriş Yap"
                    onPress={() => this.loginUser()}
                />
                <Text style={styles.letsRegister}
                    onPress={() => this.props.navigation.navigate('Üye Ol')}>Henüz F&C News üyesi değil misin? Hemen Üye Ol!</Text>
            </View>
        );
    }
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        display: "flex",
        flexDirection: "column",
        justifyContent: "flex-start",
        padding: 25,
        backgroundColor: '#fff'

    },
    inputStyle: {
        width: '100%',
        marginBottom: 15,
        paddingBottom: 15,
        alignSelf: "center",
        borderColor: "#ccc",
        borderBottomWidth: 1
    },
    loginText: {
        color: '#1db45c',
        marginTop: 60,
        fontSize: 40,
        textAlign: 'center'
    },
    letsRegister: {
        paddingHorizontal: 10,
        marginTop: 10,
        color: '#1db45c',
        fontSize: 14,
        textAlign: 'center'
    },
    errorMessage: {
        fontSize: 15,
        color: 'red',
        textAlign: 'center',
    }


});