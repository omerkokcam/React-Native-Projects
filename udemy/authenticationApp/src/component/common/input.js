import React, { Component } from 'react';
import {TextInput, View, StyleSheet} from 'react-native';

const Input = ({ inputPlaceHolder, onChangeText, value, secureTextEntry }) => {
    const { inputWrapper, inputStyle } = styles;
    return (
        <View style={inputWrapper}>
            <TextInput style={inputStyle}
                secureTextEntry = {secureTextEntry} 
                placeholder={inputPlaceHolder}
                onChangeText={onChangeText}
                value={value}
                />
        </View>
    );
};

const styles = StyleSheet.create({
    inputWrapper: {
        justifyContent: 'center',
        alignItems: 'center',
    },
    inputStyle: {
        flexDirection: 'column',
        paddingTop: 10,
        justifyContent: 'center',
        borderBottomWidth: 1.3,
        borderBottomColor: 'green',
        width: 200,
    },


});


export { Input };



