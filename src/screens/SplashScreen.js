import { View, Text, Image } from 'react-native'
import React from 'react'
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from 'react-native-responsive-screen'
import { splashStyles } from '../styles/splashStyles'
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { NavigationPathEnum } from '../../core/enum/navigationPathEnum';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { signIn } from '../store/slices/authSlice';
import ApproveButton from '../components/ApproveButton';

const SplashScreen = ({ navigation }) => {
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

            }
        });


    }, [])


    return (
        <View style={splashStyles.main}>

            <Image
                style={splashStyles.image}
                source={require('../../assets/icon.png')}
            />
            <Text style={splashStyles.title}>Ev Devir'e Hoşgeldiniz!</Text>

            <Text style={splashStyles.text}>Devretmek istediğiniz ev hakkında kolaylıkla bir gönderi paylaşabilirsiniz.
                Bu şekilde ev tutmak isteyenlere hızlı bir şekilde ulaşabilirsiniz!!</Text>
            <ApproveButton text={'Hemen Başla!'} onPress={() => navigation.replace(NavigationPathEnum.signUp)} />

        </View>
    )
}

export default SplashScreen