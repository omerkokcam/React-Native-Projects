import React, { Component, useEffect, useState } from 'react';
import { View, ActivityIndicator } from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';
export default function Splash({ navigation }) {

    const [isLogin] = useState(false)

    useEffect(() => {
        checkLogin();
        return (() => { })
    }, [isLogin])


    async function checkLogin() {
        ///
        // setIsLogin(true)
        let token = await AsyncStorage.getItem("loginToken");
        console.log("Splash Token : " +token)
        if (token !== 'null') {
            navigation.navigate("Ana Sayfa")
        }
        else {
            navigation.navigate("Giriş Yap")
        }
    }

    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <ActivityIndicator size={"large"} color={"#1db45c"} />
        </View>
    )

}