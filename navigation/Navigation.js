import { View, Text } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createDrawerNavigator } from '@react-navigation/drawer';

import Chat from '../src/screens/Chat';
import SignIn from '../src/screens/SignIn';
import SignUp from '../src/screens/SignUp';
import MyPosts from '../src/screens/MyPosts';
import UpdateProfile from '../src/screens/UpdateProfile';
import SelectLocation from '../src/screens/SelectLocation';

import BottomTabNavigation from './BottomTabNavigation';
import ShowLocation from '../src/screens/ShowLocation';
import { themeColors } from '../core/enum/themeColorsEnum';
import SplashScreen from '../src/screens/SplashScreen';

const Stack = createNativeStackNavigator();
const Navigation = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator
                screenOptions={{ headerTitleAlign: 'center' }}>
                <Stack.Screen
                    name="Splash"
                    options={{
                        title: 'Hoşgeldiniz',
                        headerStyle: {
                            backgroundColor: themeColors.secondary,
                        },
                        headerTitleStyle: {
                            color: 'white'
                        },
                    }}
                    component={SplashScreen}
                />
                <Stack.Screen
                    name="SignUp"
                    options={{
                        title: 'Kayıt Ol',
                        headerStyle: {
                            backgroundColor: themeColors.secondary,
                        },
                        headerTitleStyle: {
                            color: 'white'
                        },
                    }}
                    component={SignUp}
                />
                <Stack.Screen name="SignIn"
                    options={{
                        title: 'Giriş Yap',
                        headerStyle: {
                            backgroundColor: themeColors.secondary,
                        },
                        headerTitleStyle: {
                            color: 'white'
                        },
                    }}
                    component={SignIn} />
                <Stack.Screen
                    options={{
                        headerStyle: {
                            backgroundColor: themeColors.secondary,
                        },
                        headerTitleStyle: {
                            color: 'white'
                        },
                    }}
                    name="Ev Devir" component={BottomTabNavigation} />
                <Stack.Screen
                    name="Show Location"
                    options={{
                        title: 'Konum Göster',
                        headerStyle: {
                            backgroundColor: themeColors.secondary,
                        },
                        headerTitleStyle: {
                            color: 'white'
                        },
                    }}
                    component={ShowLocation} />
                <Stack.Screen name="Update Profile" component={UpdateProfile} />
                <Stack.Screen
                    name="Select Location"
                    options={{
                        title: 'Konum Seç',
                        headerStyle: {
                            backgroundColor: themeColors.secondary,
                        },
                        headerTitleStyle: {
                            color: 'white'
                        },
                    }}
                    component={SelectLocation} />
                <Stack.Screen name="MyPosts" component={MyPosts} />
                <Stack.Screen
                    name="Chat"
                    options={{
                        title: 'Mesaj',
                        headerStyle: {
                            backgroundColor: themeColors.secondary,
                        },
                        headerTitleStyle: {
                            color: 'white'
                        },
                    }}
                    component={Chat} />
            </Stack.Navigator>

        </NavigationContainer>
    )
}

export default Navigation