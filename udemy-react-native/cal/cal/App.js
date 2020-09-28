/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, { Component } from "react";
import { View, Text, TextInput, StyleSheet, Button, Alert } from "react-native";

export class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      input1: "",
      input2: "",
      result: "",
    }
    
    this.add = this.add.bind(this);
  }
  
  add(){
    if(this.state.input1 == ""){
      this.state.input1 = "0";
    };
    let a1 = parseInt(this.state.input1);
    
    if(this.state.input2 == ""){
        this.state.input2 = "0";
    };
    let a2 = parseInt(this.state.input2);
    let result = a1 + a2 ;
    this.setState({
      result:result,
    });
   
  }
  min(){
    if(this.state.input1 == ""){
      this.state.input1 = "0";
    };
    let a1 = parseInt(this.state.input1);
    
    if(this.state.input2 == ""){
        this.state.input2 = "0";
    };
    let a2 = parseInt(this.state.input2);
    let result = a1 - a2 ;
    this.setState({
      result:result,
    });
  }
  multiply(){
    if(this.state.input1 == ""){
      this.state.input1 = "0";
    };
    let a1 = parseInt(this.state.input1);
    
    if(this.state.input2 == ""){
        this.state.input2 = "0";
    };
    let a2 = parseInt(this.state.input2);
    let result = a1 * a2 ;
    this.setState({
      result:result,
    });
  }
  div(){
    if(this.state.input1 == ""){
      this.state.input1 = "0";
    };
    let a1 = parseInt(this.state.input1);
    
    if(this.state.input2 == ""){
        this.state.input2 = "0";
    };
    let a2 = parseInt(this.state.input2);
    let result = a1 / a2 ;
    this.setState({
      result:result,
    });
  }


  render() {
    return (

      <View style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.headerText}>Calculator</Text>
        </View>
        <View style={styles.contentWrapper}>
          <Text style={styles.contentWrapper}>1. sayı</Text>
          <TextInput style={styles.input}
            placeholder="1. sayıyı giriniz."
            onChangeText={(text) => {
              this.setState({ input1: text })
            }}
            value={this.state.input1 + ""}
          />
        </View>


        <View style={styles.button}>
            <Button title="+" onPress = {() =>{
                                         this.add();
                                        }}
                              color ='black'
              />
           
            <Button title="-" onPress = {() =>{
                                          this.min();
                                        }}
                              color ='red'
              />
            
            <Button title="x" onPress = {() =>{
                                        this.multiply();  
                                      }}
                              color ='blue'
              />
          
            <Button title="/" onPress = {() =>{
                                          this.div();
                                        }}
                              color ='green'
              />
            
            
            
        </View>
        
        
        <View style={styles.contentWrapper}>
          <Text style={styles.contentWrapper}>2. sayı</Text>
          <TextInput style={styles.input}
            placeholder="2. sayıyı giriniz."
            onChangeText={(text) => {
              this.setState({ input2: text })
            }}
            value={this.state.input2 + ""}
          />
        </View>

        <View>
          <Text style={styles.sampleText}>Sonuç :{this.state.result} </Text>
        </View>
      </View>

    );
  };
}
const styles = StyleSheet.create({
  button:{
   
    flex:0.1,
    flexDirection:'row',
    margin:10,
    paddingTop:20 ,
    paddingHorizontal:0,
    height:30,
    alignItems:'center',
    justifyContent:'space-between',
    
  },
  sampleText: {
    margin:0,
    paddingTop:20,
    height: 90,
    fontSize: 20,

  },
  container: {
    flex: 1,
    flexDirection: 'column',
    paddingHorizontal:20,
    

    // https://www.youtube.com/watch?v=oZR8ewe_DuE&list=PLrk7FunSZ7-Y6oLs49PSePz-_mE3W1rkS&index=2

  },
  input: {
    margin: 0,
    paddingLeft: 10,
    fontSize:20,
    width: 180,
    borderColor: 'black',
    borderBottomWidth: 1

  },
  contentWrapper: {
    paddingTop:10,
    fontSize: 19,
  },
  header: {
    height: 10,
    paddingTop: 30,
    shadowColor: 'black',
    shadowOffset: { width: 0, height: 6 },
    shadowOpacity: 0.2,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  headerText: {
    fontSize: 20,
    textAlign: 'center',
  },


});
export default App;
