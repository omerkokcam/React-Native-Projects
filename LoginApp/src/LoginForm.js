import React ,{Component} from 'react';
import {View, TextInput, StyleSheet} from 'react-native';
import Button from './ortak/Button';
import Card from './ortak/Card';
import CardSection from './ortak/CardSection';
import Firebase from 'firebase';
export default class LoginForm extends Component{

    state = {
        email:'',
        password:'',
    }

    clickLogin(){

        const {email, password} = this.state
        Firebase.auth().signInWithEmailAndPassword(email,password)
                .then(this.loginSuccess.bind(this))
                .catch(() =>{
                    fire
                });
    }


    render (){
        const {subContainerStyle, inputStyle} = styles ;
        return (
            <Card>
            
                <View style = {subContainerStyle}>
                    <TextInput placeholder="Email"
                               style = {inputStyle}
                               value = {this.state.email}
                               onChange = {(text) => this.setState({email:text})} />
                </View>

                <View style = {subContainerStyle}>
                <TextInput placeholder="Password"
                               style = {inputStyle}
                               value = {this.state.password}
                               onChange = {(text) => this.setState({password:text})}
                               secureTextEntry />
                </View>

                <View style = {subContainerStyle}>
                    <Button onPress = {() => {this.clickLogin.bind(this)}}children="Login"/>
                </View>

            </Card>

        );
    }
}


const styles = StyleSheet.create({
    containerStyle : {
        borderWidth:1,
        borderRadius:2,
        borderColor:'#ddd',
        borderBottomWidth:0,
        shadowColor:'#000',
        shadowOffset:{width:0,height:2},
        shadowOpacity:0.1,
        shadowRadius:2,
        elevation:1,
        marginLeft:5,
        marginRight:5,
        marginTop:10,
    },
    subContainerStyle:{
        borderBottomWidth:1,
        padding:5,
        backgroundColor:'#fff',
        justifyContent:'flex-start',
        flexDirection:'row',
        borderColor:'#ddd',
        position:'relative',
    },
    inputStyle:{
        color:'#000',
        paddingRight:5,
        paddingLeft:5,
        fontSize:18,
        lineHeight:23,
        flex:2,

    }
});