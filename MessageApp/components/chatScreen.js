import React, { Component } from 'react';
import { StyleSheet, Text, View, TextInput, Button, FlatList, TouchableHighlight, KeyboardAvoidingView, KeyboardAvoidingViewBase } from 'react-native';
import firebase from '../database/firebase';
import Header from './subComponents/header';
import ChatItem from './chatItem';
import User from '../User';

export default class Dashboard extends Component {
    
    constructor(props) {
        super(props);
        this.state = {
            person:{
                name: props.navigation.getParam('name'),
                phone: props.navigation.getParam('phone'),
            },
            text: '',
            disabled: true,
            
        }
    }

    onTyping = async(text) => {
        if (text && text.length >= 1) {
            this.setState({
                disabled: false,
                text,
            });
        }
        else {
            this.setState({
                disabled: true,
            })
        }
    }

    onSendBtnPressed = async()=>{
        if(this.state.text.length > 0){
            let msgId = firebase.database().ref('messages').child(User.phone).child;
        }
        this.textInput.clear();
    }
    
    keyExtractor = (item, index) => index

    renderChatItem({ item }) {
        return (
            <ChatItem message={item} />
        )
    }

    render() {
        const btnStyle = this.state.disabled ? styles.disabledButton : styles.enabledButton;
        return (
            <View behavior='padding' style={styles.container}>
                <Header headerText="ÖMER MİRAÇ KÖKÇAM" />
                <FlatList
                    inverted
                    data={this.state.messages} 
                    renderItem={this.renderChatItem}
                    keyExtractor={this.keyExtractor}
                />
                <View style={styles.inputBar}>
                    <TextInput placeholder="Bir mesaj yazın."
                        style={styles.textBox}
                        multiline
                        onChangeText={(text) => { this.onTyping(text) }}
                        ref={input => { this.textInput = input; }}
                    />
                    <TouchableHighlight>
                        <Text style={[styles.sendBtn, btnStyle]}
                            disabled={this.state.disabled}
                            onPress={this.onSendBtnPressed.bind(this)}>Gönder</Text>
                    </TouchableHighlight>
                </View>

            </View>
        );
    }
}



const styles = StyleSheet.create({
    container: {
        flex: 1,

    },
    inputBar: {

        flexDirection: 'row',
        justifyContent: 'center',
        paddingHorizontal: 5,
        paddingVertical: 10,
        // position:'absolute'

    },
    textBox: {
        borderRadius: 15,
        borderWidth: 0.7,
        borderColor: 'gray',
        fontSize: 14,
        paddingHorizontal: 10,
        flex: 1,
        paddingVertical: 7
    },
    sendBtn: {
        justifyContent: 'center',
        alignItems: 'center',
        paddingLeft: 10,
        paddingTop: 12,
        borderRadius: 5,


    },
    enabledButton: {
        color: '#43ddc5',
    },
    disabledButton: {
        color: '#000',
    }
});