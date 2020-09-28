import React, { Component } from 'react';
import { View, Text, StyleSheet, TextInput, Button, Alert } from 'react-native';
import Header from './Header';
import firebase from 'firebase';
export default class RegisterScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            email: '',
            password: '',
            errorMessage: ''
        };
    }

    updateInputVal = (val, prop) => {
        const state = this.state;
        state[prop] = val;
        this.setState(state);
    }

    registerUser = () => {
        if (this.state.email === '' && this.state.password === '') {
            Alert.alert('Email ve şifre boş bırakılamaz!');
        } else if (this.state.name === '' || this.state.name.length < 5) {
            Alert.alert('Ad ve soyad 5 karakterden az olamaz.');
        } else {
            firebase.auth().createUserWithEmailAndPassword(this.state.email, this.state.password)
                .then((response) => {
                    response.user.updateProfile({
                        displayName: this.state.name,
                    })
                    console.log("Kullanıcı başarıyla oluşturuldu.");
                    this.setState({
                        name: '',
                        email: '',
                        password: ''
                    });
                    Alert.alert('Yeni kullanıcı başarıyla oluşturuldu.')
                    this.props.navigation.navigate('Giriş Yap');
                })
                .catch(error => this.setState({ errorMessage: error.message }))
        }
    }

    render() {
        const errMsg = this.state.errorMessage ? (<Text style={styles.errorMessage}>{this.state.errorMessage}</Text>) : null;
        return (
            <View style={styles.container}>
                <Header />
                <Text style={styles.loginText}> Üye Ol</Text>
                <TextInput
                    style={styles.inputStyle}
                    placeholder="Ad Soyad"
                    value={this.state.name}
                    onChangeText={(val) => this.updateInputVal(val, 'name')}
                    maxLength={45}

                />
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
                    title="Üye Ol"
                    onPress={() => this.registerUser()}
                />
                <Text style={styles.letsRegister}
                    onPress={() => this.props.navigation.navigate('Giriş Yap')}>Zaten F&C News üyesi misin? Hemen Giriş Yap!</Text>
            </View>
        );
    }
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
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