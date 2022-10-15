import { View, Text } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Chat from '../src/screens/Chat';
import SignIn from '../src/screens/SignIn';
import SignUp from '../src/screens/SignUp';
import MyPosts from '../src/screens/MyPosts';
import UpdateProfile from '../src/screens/UpdateProfile';
import SelectLocation from '../src/screens/SelectLocation';

import BottomTabNavigation from './BottomTabNavigation';
import ShowLocation from '../src/screens/ShowLocation';

const Stack = createNativeStackNavigator();

const Navigation = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name="SignUp" component={SignUp} />
                <Stack.Screen name="SignIn" component={SignIn} />
                <Stack.Screen name="BottomTab" component={BottomTabNavigation} />
                <Stack.Screen name="ShowLocation" component={ShowLocation} />
                <Stack.Screen name="Update Profile" component={UpdateProfile} />
                <Stack.Screen name="Select Location" component={SelectLocation} />
                <Stack.Screen name="MyPosts" component={MyPosts} />
                <Stack.Screen name="Chat" component={Chat} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default Navigation