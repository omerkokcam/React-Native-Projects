import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';

class chatItem extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }

    render() {
        const message = this.props.message;
        return (
            <View style={styles.messageContainer}>
                <View style={styles.textContainer}>
                    <Text style={styles.sender}>{message.author.name}</Text>
                    <Text style={styles.message}>{message.text}</Text>
                </View>
            </View>
        );
    }
}


const styles = StyleSheet.create({
    messageContainer:{
        flexDirection:'row',
        padding: 20,
    },
    textContainer:{
        flexDirection:'column',
        marginLeft:10,
        flex:1,
        borderRadius:5,
        paddingVertical:5,
        paddingHorizontal:10,
        
        
    },
    textContainerRight:{},
    textContainerLeft:{},
    message:{
        fontSize:16,

    },
    sender:{
        fontWeight:'bold',
        paddingRight:10,
    }
});
export default chatItem ;