import React, { Component } from 'react';
import { View, Text, StyleSheet, TextInput, Button, Alert } from 'react-native';
import firebase from 'firebase';
import AsyncStorage from '@react-native-community/async-storage';
export default class Profile extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            email: '',
            newPassword: '',
            currentPassword: '',
            newName: '',
            errorMessage: ''
        };
    }
    //display name ve email çekilecek
    async getInfos() {
        let name = firebase.auth().currentUser.displayName;
        let email = await AsyncStorage.getItem('email')
        this.setState({
            name: name,
            email: email,
        })
    }
    componentDidMount() {
        this.getInfos();
    }

    reAuthentication(currentPassword) {
        let user = firebase.auth().currentUser;
        let credentials = firebase.auth.EmailAuthProvider.credential(user.email, currentPassword);
        return user.reauthenticateWithCredential(credentials);
    }

    changePassword() {
        if (this.state.newPassword === '') {
            Alert.alert('Lütfen eski şifre ve yeni şifre alanını doldurunuz.')
        }
        else {
            this.reAuthentication(this.state.currentPassword)
                .then(() => {
                    firebase.auth().onAuthStateChanged(user => {
                        if (user) {
                            user.updatePassword(this.state.newPassword).then(() => {
                                Alert.alert('Şifreniz başarıyla değiştirilmiştir.')
                                this.setState({
                                    currentPassword: '',
                                    newPassword: ''
                                })
                            }).catch((error) => { this.setState({ errorMessage: error.message }) })
                        }
                    })
                })
                .catch((error) => { Alert.alert(error.message) })

        }
    }

    updateInputVal = (val, prop) => {
        const state = this.state;
        state[prop] = val;
        this.setState(state);
    }
    changeName() {
        if (this.state.newName === '' && this.state.newName.length < 5) {
            Alert.alert('Yeni Ad Soyad alanını doldurunuz.')
        }
        else {
            let user = firebase.auth().currentUser;
            user.updateProfile({ displayName: this.state.newName })
                .then(() => {
                    this.setState({ newName: '', })
                    Alert.alert('Ad Soyad başarıyla değiştirildi.')
                    // sayfa yenileme ??? 
                })
                .catch((error) => { Alert.alert(error.message) })

        }

    }

    render() {
        const errMsg = this.state.errorMessage ? (<Text style={styles.errorMessage}>{this.state.errorMessage}</Text>) : null;
        return (
            <View style={styles.container}>
                <View style={styles.profileInfos}>
                    <View style={styles.infoContainer}>
                        <Text style={styles.InfoStyle}>Ad Soyad : {this.state.name}</Text>
                    </View>
                    <Text style={styles.InfoStyle}>Email : {this.state.email} </Text>
                </View>
                <View style={styles.form}>
                <TextInput placeholder="Yeni Ad Soyad giriniz."
                        style={styles.inputStyle}
                        value={this.state.newName}
                        onChangeText={(val) => { this.updateInputVal(val, 'newName') }} />
                    <Button title="Ad Soyad Değiştir" color='#1db45c' onPress={() => { this.changeName() }} />
                    
                    <TextInput
                        style={styles.inputStyle}
                        placeholder="Eski şifrenizi giriniz."
                        value={this.state.currentPassword}
                        onChangeText={(val) => this.updateInputVal(val, 'currentPassword')}
                        secureTextEntry
                    />
                    <TextInput
                        style={styles.inputStyle}
                        placeholder="Yeni şifrenizi giriniz."
                        value={this.state.newPassword}
                        onChangeText={(val) => this.updateInputVal(val, 'newPassword')}
                        secureTextEntry
                    />
                    {errMsg}
                    <Button title="Şifre Değiştir" color='#1db45c' onPress={() => { this.changePassword() }} />
                    
                </View>
            </View>
        );
    }
}



const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    profileInfos: {
        flexDirection: 'column',
        alignItems: 'flex-start',
        paddingLeft: 5,
    },
    InfoStyle: {
        fontSize: 18,
        color: '#202023',
        paddingTop: 10,
        fontWeight: 'bold'
    },
    form: {
        flexDirection: 'column',
        alignItems: 'center'
    },
    inputStyle: {
        borderBottomWidth: 1,
        width: 300,
        borderColor: '#000',
        marginBottom: 10,
        borderBottomWidth: 1
    },
    errorMessage: {
        fontSize: 15,
        color: 'red',
        textAlign: 'center',
    },
    infoContainer: {
        flexDirection: 'row'
    },
    change: {
        paddingTop: 13,
        color: '#1db45c'
    }
})