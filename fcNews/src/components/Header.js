import React, { Component } from 'react';
import { View, Image, StyleSheet } from 'react-native';




export default class Header extends Component {

    render() {
        const { header } = styles;

        return (
            <View style={header}>
                <Image
                    style={header}
                    source={require('../image/logo.png')}
                />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    header: {
        paddingTop: 0,
        height: 178,
        width: '100%',
        marginTop: 0,
        borderRadius: 20,

    },
});



