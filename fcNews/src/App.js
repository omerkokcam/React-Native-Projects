import React, { Component } from 'react';
import firebase from 'firebase';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import Login from './components/LoginScreen';
import Register from './components/RegisterScreen';
import HomePage from './components/HomePage';
import Splash from './components/Splash';
import Profile from './components/Profile';
const Stack = createStackNavigator();

export default class App extends Component {

    constructor(props) {
        super(props);
        //this.control();
        var firebaseSettings = {
            apiKey: "AIzaSyBP-uAGDgqxL5SOBhN9gAowvjfCZCBr5iU",
            authDomain: "f-cnews.firebaseapp.com",
            databaseURL: "https://f-cnews.firebaseio.com",
            projectId: "f-cnews",
            storageBucket: "f-cnews.appspot.com",
            messagingSenderId: "584278766522",
            appId: "1:584278766522:web:260d4fba0acc7a6623e383"
        };
        // firebase 1 den fazla kez açılmaya çalısılırsa
        if (!firebase.apps.length) {
            firebase.initializeApp(firebaseSettings);
        }
    }
    render() {
        return (
            <NavigationContainer >
                <Stack.Navigator initialRouteName="Splash">
                    <Stack.Screen
                        name="Giriş Yap"
                        component={Login}
                        options={
                            { headerShown: false }
                        }
                    />
                    <Stack.Screen
                        name="Splash"
                        component={Splash}
                        options={
                            { headerShown: false }
                        }
                    />
                    <Stack.Screen
                        name="Ana Sayfa"
                        component={HomePage}
                        options={
                            { headerShown: false }
                        }
                    />
                    <Stack.Screen
                        name="Üye Ol"
                        component={Register}
                        options={
                            { headerShown: false }
                        }
                    />
                    <Stack.Screen
                        name="Profil"
                        component={Profile}
                        options={{headerTintColor:'#1db45c',headerTitleAlign:true}}
                    />
                </Stack.Navigator>
            </NavigationContainer >
        );
    }
}
