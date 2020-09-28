import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';


class Header extends Component {
    state = {
        headerText: 'ÖMER',
    }
    render() {
        const { header, headerText } = styles;
        return (


            <View style={header}>
                <Text style={headerText}>ÖMER</Text>
            </View>


        );


    }



}


const styles = StyleSheet.create({

    header: {
        flex: 1,
        flexDirection: 'column',
        height: 300,
        width: '100%',
        backgroundColor: 'skyblue',


    },
    headerText: {
        fontSize: 20,
        alignSelf: 'center',
        color: 'white',
    }


});


export default Header;