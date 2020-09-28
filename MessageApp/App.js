// App.js

import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Login from './components/login';
import Dashboard from './components/dashboard';
import AuthLoading from './components/AuthLoading';
import ChatScreen from './components/chatScreen';
const Stack = createStackNavigator();

function MyStack() {
  return (
    <Stack.Navigator
      initialRouteName="Giriş Yap"
      screenOptions={{
        headerTitleAlign: 'center',
        headerStyle: {
          backgroundColor: '#43ddc5',
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
          fontWeight: 'bold',
        },
      }}>    
      <Stack.Screen 
        name="Giriş Yap" 
        component={Login} 
     
      />
      <Stack.Screen
        name="AuthLoading"
        component={AuthLoading}
        options={{headerShown: false}}
      />
      <Stack.Screen 
       name="Konuşmalar" 
       component={Dashboard}
       options={
         {headerLeft:null}
         
       }
      />
      <Stack.Screen 
        name='Konuşma'
       component={ChatScreen}
       options={
         {headerLeft:null},
         {headerShown: false}
       }
      />

    </Stack.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <MyStack />
    </NavigationContainer>
  );
}