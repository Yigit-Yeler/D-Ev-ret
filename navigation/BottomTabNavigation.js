import { View, Text } from 'react-native'
import React from 'react'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
// const myIcon = <Icon name="rocket" size={30} color="#900" />;
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';

import MyDm from '../src/screens/MyDm';
import CreatePost from '../src/screens/CreatePost';
import Home from '../src/screens/Home';
import Profile from '../src/screens/Profile';
import { themeColors } from '../core/enum/themeColorsEnum';

const Tab = createMaterialBottomTabNavigator();

const BottomTabNavigation = () => {
    return (
        <Tab.Navigator
            initialRouteName="Home"
            activeColor={themeColors.secondary}
            barStyle={{ backgroundColor: 'white' }}
        >
            <Tab.Screen
                name="Home"
                component={Home}
                options={{
                    tabBarLabel: 'Ana Sayfa',
                    tabBarIcon: ({ color }) => (
                        <MaterialCommunityIcons name="home" color={color} size={26} />
                    ),
                }}
            />
            <Tab.Screen
                name="CreatePost"
                component={CreatePost}
                options={{
                    tabBarLabel: 'Paylaş',
                    tabBarIcon: ({ color }) => (
                        <MaterialCommunityIcons name="plus-box" color={color} size={26} />
                    ),
                }}
            />
            <Tab.Screen
                name="MyDm"
                component={MyDm}
                options={{
                    tabBarLabel: 'Mesajlar',
                    tabBarIcon: ({ color }) => (
                        <MaterialCommunityIcons name="message-text" color={color} size={26} />
                    ),
                }}
            />
            <Tab.Screen
                name="Profile"
                component={Profile}
                options={{
                    tabBarLabel: 'Profil',
                    tabBarIcon: ({ color }) => (
                        <MaterialCommunityIcons name="account" color={color} size={26} />
                    ),
                }}
            />
        </Tab.Navigator>
    )
}

export default BottomTabNavigation


