import React, { Component } from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Settings from './Settings';
import UserChoices from './UserChoice';
import AllNews from './AllNews';

const Tab = createBottomTabNavigator();

export default class HomePage extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }

    render() {
        return (

            <Tab.Navigator initialRouteName="Tüm Haberler"
                tabBarOptions={{
                    activeTintColor: '#1db45c',
                    inactiveTintColor: '#364a47',
                    tabStyle: {
                        padding: 20, 
                   },
                  labelStyle:{
                         marginTop: -2,
                         fontSize:12
                  }
                }}
            >
                <Tab.Screen name={'Senin Seçtiklerin'} component={UserChoices} />
                <Tab.Screen name="Tüm Haberler" component={AllNews} />
                <Tab.Screen name="Ayarlar" component={Settings} />
            </Tab.Navigator>

        );
    }
}


