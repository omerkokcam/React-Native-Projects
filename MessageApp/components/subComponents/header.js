import React from 'react';
import { Text, View } from 'react-native';

const Header = ({ headerText }) => {
  const { textStyle, viewStyle } = styles;

  return (
    <View style={viewStyle}>
      <Text style={textStyle}> {headerText} </Text>
    </View>
  );
};

const styles = {
  textStyle: {
    fontSize: 18,
    fontWeight:'bold',
    color:'#f6f6f6'

  },
  viewStyle: {
    backgroundColor:'#43ddc5',
    height: 60,
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: 15,
    
  }

};

export default Header;