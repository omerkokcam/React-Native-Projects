import React, { Component } from "react";
import { View, Text, StyleSheet, TextInput } from "react-native";
import axios from 'axios';
class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      tl:'',
      usd:'',
      jpy:'',
      eur:'',
      cad:'',
      input:'',
      rates: [],
    };
  }
  componentDidMount(){
    axios.get('http://data.fixer.io/api/latest?access_key=39bc2587ea6fcee669eafcbe2c1f6552&symbols=EUR,TRY,USD,CAD,JPY')
         .then(response => {
          rates = response.data.rates;
          this.setState({
            rates:rates,
          });
        });
  }
  render() {

   const {tl,usd,eur,cad,jpy,input,rates} = this.state ;
    return (
     <View style = {styles.container}>
       <View>
        <Text style = {styles.sampleText} >Currency Converter</Text>
        </View>
        <TextInput style = {styles.input}
                   placeholder="Enter EUR Value"
                   keyboardType='numeric'
                   onChangeText={(text) =>{
                    let newTextValue = parseFloat(text) || 0;
                    this.setState({input : newTextValue,
                      tl: (newTextValue*rates['TRY']).toFixed(6),



                         }); }}
                   value={this.props.input}
                  />
        <Text style={styles.otherTexts}>TRY:{tl} ₺</Text>
        <Text style={styles.otherTexts}>USD:{usd} $</Text>
        <Text style={styles.otherTexts}>CAD:{cad} C$</Text>
        <Text style={styles.otherTexts}>JPY:{jpy} ¥</Text>
        <Text style={styles.otherTexts}>EUR:{eur} €</Text>

     </View>
    );
  }
}
const styles = StyleSheet.create({
  container:{
    flex:1,
    flexDirection:'column',
    paddingHorizontal:60,
    paddingTop:20,
  },
  input:{
    paddingTop:30,
    paddingHorizontal:70,
    borderColor:'green',
    borderBottomWidth:1,
    fontSize:20,

  },
  sampleText:{
    backgroundColor:'#788B91',
    padding:10,
    textAlign:'center',
    fontSize:25,
    color:'white',

  },
  otherTexts:{
    fontSize:20,
    paddingTop:20,
    paddingLeft:50,
  },

})

export default App;
