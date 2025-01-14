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
import { LinearGradient } from 'expo-linear-gradient';
import Header from '../src/components/Header';

const Stack = createNativeStackNavigator();
const Navigation = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator
                screenOptions={{ headerTitleAlign: 'center' }}>
                <Stack.Screen
                    name="Splash"
                    options={{
                        header: () => (
                            <Header title={'Hoş Geldiniz'} />
                        )
                    }}
                    component={SplashScreen}
                />
                <Stack.Screen
                    name="SignUp"
                    options={{
                        header: () => (
                            <Header title={'Kayıt Ol'} />
                        )
                    }}
                    component={SignUp}
                />
                <Stack.Screen name="SignIn"
                    options={{
                        header: () => (
                            <Header title={'Giriş Yap'} />
                        )
                    }}
                    component={SignIn} />
                <Stack.Screen
                    options={{
                        header: () => (
                            <Header title={'D-Ev-ret'} />
                        )
                    }}
                    name="D-Ev-ret" component={BottomTabNavigation} />
                <Stack.Screen
                    name="Show Location"
                    options={{
                        header: () => (
                            <Header title={'Konum Göster'} />
                        )
                    }}
                    component={ShowLocation} />
                <Stack.Screen name="Update Profile" component={UpdateProfile} />
                <Stack.Screen
                    name="Select Location"
                    options={{
                        header: () => (
                            <Header title={'Konum Seç'} />
                        )
                    }}
                    component={SelectLocation} />
                <Stack.Screen name="MyPosts" component={MyPosts} />
                <Stack.Screen
                    name="Chat"
                    options={{
                        header: () => (
                            <Header title={'Mesaj'} />
                        )
                    }}
                    component={Chat} />
            </Stack.Navigator>

        </NavigationContainer>
    )
}

export default Navigation