import { View, Text, TextInput, TouchableOpacity, KeyboardAvoidingView, Platform, TouchableWithoutFeedback, Keyboard, ActivityIndicator } from 'react-native'
import React, { useEffect, useState } from 'react'
import { signUpStyles } from '../styles/signUpStyles'
import ApproveButton from '../components/ApproveButton'
import { firebaseSignUp } from '../../core/firebase/firebaseAuth'
import { insertDataFirestore } from '../../core/firebase/firebaseFirestore'
import { NavigationPathEnum } from '../../core/enum/navigationPathEnum'
import { useDispatch, useSelector } from 'react-redux'
import { signUp } from '../store/slices/authSlice'
import BottomText from '../components/BottomText'
import { modalHandle } from '../../core/myModal/ModalHandle'
import { themeColors } from '../../core/enum/themeColorsEnum'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
const SignUp = ({ navigation }) => {
    const { primary, secondary } = themeColors
    const dispatch = useDispatch()
    const user = useSelector(state => state.auth.user)

    const [isSuccess, setIsSuccess] = useState(0) // 0: loading, 1: success, 2: error
    const [resText, setResText] = useState('')
    const [visible, setVisible] = useState(true)
    const [ready, setReady] = useState(false)

    const [rePassword, setRePassword] = useState('')
    const [userInfo, setUserInfo] = useState({
        'name': '',
        'surname': '',
        'email': '',
        'password': ''
    })

    const modalEvents = () => {
        setIsSuccess(0)
        setVisible(false)
        if (isSuccess == 1) {
            navigation.replace(
                NavigationPathEnum.bottomTab,
                { screen: NavigationPathEnum.home }
            )
        }
    }

    const signUpHandle = async () => {
        setReady(true)
        if (userInfo.password == rePassword) {
            await firebaseSignUp(userInfo)
                .then((res) => {
                    setIsSuccess(1)
                    setResText('Kayıt Başarılı')
                    dispatch(signUp(res))
                    setVisible(true)
                    insertDataFirestore('users', userInfo, res.uid,)
                })
                .catch((e) => {
                    setReady(false)
                    if (e.toString().includes('Password should be at least 6 characters')) {
                        setResText("Şifreniz en az 6 karakter olmalıdır!")
                    }
                    else if (e.toString().includes('auth/invalid-email')) {
                        setResText("Email formatı düzgün değil!")
                    }
                    else if (e.toString().includes('auth/email-already-in-use')) {
                        setResText("Bu email zaten sistemde kayıtlı!")
                    }
                    else {
                        setResText(e.toString())

                    }
                    setIsSuccess(2)
                    setVisible(true)
                })
        }
        else {
            setResText("Şifreler uyuşmuyor!")
            setIsSuccess(2)
            setVisible(true)
        }
    }

    const handleTextInputs = (value, name) => {
        let updatedValue = { [name]: value };
        setUserInfo(userInfo => ({
            ...userInfo,
            ...updatedValue
        }));
    }

    const navigateToSignIn = () => {
        navigation.replace(NavigationPathEnum.signIn)
    }

    return (
        <KeyboardAwareScrollView >
            <View style={signUpStyles.main}>
                {
                    modalHandle(resText, visible, isSuccess, modalEvents)
                }

                <TextInput
                    placeholder='İsim'
                    style={signUpStyles.textInput}
                    onChangeText={(text) => handleTextInputs(text, 'name')}
                />
                <TextInput
                    placeholder='Soy İsim'
                    style={signUpStyles.textInput}
                    onChangeText={(text) => handleTextInputs(text, 'surname')}
                />
                <TextInput
                    placeholder='E-mail'
                    style={signUpStyles.textInput}
                    onChangeText={(text) => handleTextInputs(text, 'email')}
                />
                <TextInput
                    secureTextEntry={true}
                    placeholder='Şifre'
                    style={signUpStyles.textInput}
                    onChangeText={(text) => handleTextInputs(text, 'password')}
                />
                <TextInput
                    secureTextEntry={true}
                    placeholder='Şifre Tekrar'
                    style={signUpStyles.textInput}
                    onChangeText={(text) => { setRePassword(text) }}
                />

                <View style={signUpStyles.signUpView}>
                    {
                        ready ? (
                            <ActivityIndicator size="large" color={themeColors.secondary} />
                        ) : (
                            <ApproveButton text={'Kayıt Ol'} onPress={signUpHandle} />
                        )
                    }

                </View>

                <BottomText text={'Zaten bir hesabınız var mı?'} clickText={'Giriş Yapın'}
                    onPress={navigateToSignIn} />
            </View>
        </KeyboardAwareScrollView>
    )
}

export default SignUp