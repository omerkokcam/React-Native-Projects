import React, { Component } from 'react';
import { View, Button, Text } from 'react-native';
import { Input,Spinner } from './common';
import firebase from 'firebase';

class LoginForm extends Component {

    state = {
        email: '',
        password: '',
        error:'',
        loading: false,
    }

    onLoginSuccess(){
        this.setState({
            email: '',
            password: '',
            error : '',
            loading : false,
        })
    
    }
    onFailed(){
        this.setState({
            error:'Authentication failed',
            loading: false
        });
    }
    onCreateUserSuccess(){
        this.setState({
            email: '',
            password: '',
            error : '',
            loading : false,
        })
    }

    buttonClicked(){

        const {email, password} = this.state;
        this.setState({
            error:'',
            loading: true,
        })
        firebase.auth().signInWithEmailAndPassword(email,password)
                .then(this.onLoginSuccess.bind(this))
                .catch(()=>{
                    firebase.auth().createUserWithEmailAndPassword(email,password)
                    .then(this.onCreateUserSuccess.bind(this))
                    .catch(this.onFailed.bind(this))
                });
    }
    

    render() {
        const {error, loading} = this.state;
        const errorMsg = error ? (
            <Text style = {{color:'red',alignSelf:'center',fontSize:15,paddingTop:20}}>{error}</Text>
        ): null;
        
        const loginButton = loading ? (<Spinner/>) 
        : (<Button title="Login" color="#737373" onPress={this.buttonClicked.bind(this)} />) ; 

        return (
            <View>
                <View style={{ alignItems: 'center' }}>
                    <Input inputPlaceHolder="example@example.example"
                        onChangeText={(text) => {
                            this.setState({
                                email: text,
                            })
                        }}
                        value={this.state.email} />
                    <Input inputPlaceHolder="******"
                        onChangeText={(text) => {
                            this.setState({
                                password: text,
                            })
                        }}
                        value={this.state.password}
                        secureTextEntry />
                </View>
                {errorMsg}
                <View style={{ alignItems: 'center', paddingTop: 20 }}>
                    {loginButton}
                </View>
            </View>
        );
    }
}


export default LoginForm;