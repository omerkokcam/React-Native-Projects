import React, { Component } from 'react';
import { View, Text, TouchableOpacity, Image, StyleSheet, Linking, Alert } from 'react-native';
import InAppBrowser from 'react-native-inappbrowser-reborn'
export default class Card extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }
    async openLink(newsUrl) {
      try {
        let url = newsUrl;
        if (await InAppBrowser.isAvailable()) {
          const result = await InAppBrowser.open(url, {
            showTitle: true,
            toolbarColor: '#6200EE',
            secondaryToolbarColor: 'black',
            enableUrlBarHiding: true,
            enableDefaultShare: true,
            forceCloseOnRedirection: false,
            animations: {
              startEnter: 'slide_in_right',
              startExit: 'slide_out_left',
              endEnter: 'slide_in_left',
              endExit: 'slide_out_right'
            },
            headers: {
              'my-custom-header': 'my custom header value'
            }
          })
        }
        else Linking.openURL(url)
      } catch (error) {
        Alert.alert(error.message)
      }
    }
    render() {
      
        return (
            <TouchableOpacity style={styles.card} activeOpacity={.8} onPress={()=>this.openLink(this.props.data.url)}>
            <Image style={styles.image} source={{ uri: this.props.data.urlToImage != null ? this.props.data.urlToImage : 'https://safter.com.tr/wp-content/uploads/2019/07/bos-resim.jpg' }} />
            <Text numberOfLines={2} style={styles.title}>{this.props.data.title}</Text>
            <View style={styles.authorText}>
              <Text style={styles.timeAndSourceText}>{this.props.data.source.name}</Text>
              <Text  style={styles.timeAndSourceText}>{this.props.data.publishedAt.slice(11, 16)}</Text>
            </View>
            <Text numberOfLines={3} style={styles.content}>{this.props.data.description}</Text>
          </TouchableOpacity>
             
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: "column",
        width: '100%',
        backgroundColor: '#fff'
      },
      allNewsText: {
        fontSize: 25,
        color: '#1db45c',
        paddingBottom: 10,
        textAlign:'center'
      },
      card: {
        marginBottom: 15,
        // borderWidth: 1,
        width: '95%',
        borderRadius: 8,
        // borderColor: '#1db45c',
        padding: 10,
        paddingHorizontal: 10,
        alignSelf: 'center',
    
        //shadow
        backgroundColor: '#FFF',
        shadowColor: "#000",
        shadowOffset: {
          width: 0,
          height: 6,
        },
        shadowOpacity: 0.39,
        shadowRadius: 8.30,
    
        elevation: 13,
        //to do gölge
      },
      title: {
    
        fontSize: 23,
        fontWeight: 'bold',
    
      },
      content: {
        fontSize: 17,
      },
      image: {
        height: 200,
        width: '100%',
        justifyContent: 'center',
        borderRadius: 5,
        //image ortalanmalı
    
      },
      authorText: {
        flex: 1,
        flexDirection: 'row',
        
        justifyContent:'space-between'
      },
    
      timeAndSourceText: {
        flexDirection: 'row', 
        fontSize: 15,
        color: '#aaa',
    
      },

});