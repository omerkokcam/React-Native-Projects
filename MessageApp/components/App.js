// App.js
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Login from './components/login';
import Signup from './components/signup';
import Dashboard from './components/dashboard';

const Stack = createStackNavigator();

function MyStack() {
  return (
    <Stack.Navigator
      initialRouteName="Kayıt Ol"
      screenOptions={{
        headerTitleAlign: 'center',
        headerStyle: {
          backgroundColor: '#5cc3af',
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
          fontWeight: 'bold',
        },
      }}>
      <Stack.Screen 
        name="Kayıt Ol" 
        component={Signup} 
        options={{ title: 'Kayıt Ol' }}
      />       
      <Stack.Screen 
        name="Giriş Yap" 
        component={Login} 
        options={
          {title: 'Giriş Yap'},
          {headerLeft: null} 
        }
      />
      <Stack.Screen 
       name="Ana Sayfa" 
       component={Dashboard} 
       options={
         { title: 'Ana Sayfa' },
         {headerLeft: null} 
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