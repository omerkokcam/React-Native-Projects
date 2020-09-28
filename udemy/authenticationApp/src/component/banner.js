import React, { Component } from 'react';
import { Text, View, StyleSheet } from 'react-native';

export default class Banner extends Component {
    render() {
        const {mainView,headerText} = styles ;
        return (

            <View style={mainView}>
                <Text style={headerText}>Authentication</Text>
            </View>

        );
    }
}
const styles = StyleSheet.create({
    headerText:{
        textAlign:'center',
        paddingTop:100,
        fontSize:30,
        color:'white',
      },
      mainView:{
        flex:0.5,
        flexDirection:'column',
        backgroundColor:'skyblue',
        
      },
});