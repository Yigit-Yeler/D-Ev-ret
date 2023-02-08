import { View, Text, Image, ActivityIndicator } from 'react-native'
import React from 'react'
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from 'react-native-responsive-screen'
import { splashStyles } from '../styles/splashStyles'
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { NavigationPathEnum } from '../../core/enum/navigationPathEnum';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { signIn } from '../store/slices/authSlice';
import ApproveButton from '../components/ApproveButton';
import { useState } from 'react';
import { themeColors } from '../../core/enum/themeColorsEnum';

const SplashScreen = ({ navigation }) => {
    const [ready, setReady] = useState(false)
    dispatch = useDispatch()
    useEffect(() => {
        onAuthStateChanged(getAuth(), (user) => {
            if (user) {
                dispatch(signIn(user))
                navigation.replace(
                    NavigationPathEnum.bottomTab,
                    { screen: NavigationPathEnum.home }
                )
            } else {
                setReady(true)
            }
        })


    }, [])


    return (
        <View style={splashStyles.main}>

            <Image
                style={splashStyles.image}
                source={require('../../assets/icon.png')}
            />
            <Text style={splashStyles.title}>D-Ev-ret'e Hoşgeldiniz!</Text>

            <Text style={splashStyles.text}>Devretmek istediğiniz ev hakkında kolaylıkla bir gönderi paylaşabilirsiniz.
                Bu şekilde ev tutmak isteyenlere hızlı bir şekilde ulaşabilirsiniz!!</Text>
            {
                ready ? (
                    <ApproveButton text={'Hemen Başla!'} onPress={() => navigation.replace(NavigationPathEnum.signUp)} />
                )
                    :
                    (
                        <ActivityIndicator size="large" color={themeColors.secondary} />
                    )
            }

        </View>
    )
}

export default SplashScreen