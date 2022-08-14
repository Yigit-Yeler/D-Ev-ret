import { View, Text } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Home from '../src/screens/Home';
import Chat from '../src/screens/Chat';
import SignIn from '../src/screens/SignIn';
import SignUp from '../src/screens/SignUp';
import Profile from '../src/screens/Profile';
import MyPosts from '../src/screens/MyPosts';
import MyDm from '../src/screens/MyDm';
import CreatePost from '../src/screens/CreatePost';

const Stack = createNativeStackNavigator();

const Navigation = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name="Home" component={Home} />
                <Stack.Screen name="Profile" component={Profile} />
                <Stack.Screen name="CreatePost" component={CreatePost} />
                <Stack.Screen name="SignUp" component={SignUp} />
                <Stack.Screen name="SignIn" component={SignIn} />
                <Stack.Screen name="MyPosts" component={MyPosts} />
                <Stack.Screen name="DM" component={MyDm} />
                <Stack.Screen name="Chat" component={Chat} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default Navigation