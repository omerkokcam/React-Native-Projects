import React from 'react';
import AsyncStorage from '@react-native-community/async-storage';
import User from '../User';
import firebase from 'firebase';
import { ActivityIndicator, View, StatusBar } from 'react-native';


export default class AuthLoading extends React.Component {
    constructor(props) {
        super(props);
        this.bootstrapAsync();
    }
    componentWillMount() {
        const firebaseConfig = {
            apiKey: "AIzaSyB-Vs3DyjU-bZY9ASzzgu7J4UHqBb2Jxqw",
            authDomain: "messageapp-af438.firebaseapp.com",
            databaseURL: "https://messageapp-af438.firebaseio.com",
            projectId: "messageapp-af438",
            storageBucket: "messageapp-af438.appspot.com",
            messagingSenderId: "842182645263",
            appId: "1:842182645263:web:5c866281e09a367b99357a"
        };
        // Initialize Firebase
        firebase.initializeApp(firebaseConfig);
    }

    bootstrapAsync = async () => {
        User.phone = await AsyncStorage.getItem('userPhone');
        this.props.navigation.navigate(User.phone ? 'App' : 'Giriş Yap')
    };

    render() {
        return (
            <View>
                <ActivityIndicator />
                <StatusBar barStyle="default" />
            </View>
        );
    }


}