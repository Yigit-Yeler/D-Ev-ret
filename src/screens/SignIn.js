import { View, TextInput } from 'react-native'
import React, { useState } from 'react'
import { signInStyles } from '../styles/signInStyles'
import ApproveButton from '../components/ApproveButton'
import { firebaseSignIn } from '../../core/firebase/firebaseAuth'
import BottomText from '../components/BottomText'
import { modalHandle } from '../../core/myModal/ModalHandle'
import { NavigationPathEnum } from '../../core/enum/navigationPathEnum'
import { useDispatch } from 'react-redux'
import { signIn } from '../store/slices/authSlice'


const SignIn = ({ navigation }) => {
    const [userInfo, setUserInfo] = useState({
        'email': '',
        'password': ''
    })

    const dispatch = useDispatch()
    const [isSuccess, setIsSuccess] = useState(0)
    const [resText, setResText] = useState('')
    const [visible, setVisible] = useState(true)

    const handleTextInputs = (value, name) => {
        let updatedValue = { [name]: value };
        setUserInfo(userInfo => ({
            ...userInfo,
            ...updatedValue
        }));
    }

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

    // "firebase": "^9.9.3",
    const signInHandle = () => {
        firebaseSignIn(userInfo)
            .then((res) => {
                setResText("Giriş Yapıldı!")
                setIsSuccess(1)
                setVisible(true)
                dispatch(signIn(res))

            })
            .catch((e) => {
                setResText("Email veya Şifreniz Yanlış")
                setIsSuccess(2)
                setVisible(true)
            })
    }

    const navigateToSignUp = () => {
        navigation.replace(NavigationPathEnum.signUp)
    }

    return (
        <View style={signInStyles.main}>
            <View style={signInStyles.logo}>
            </View>
            {
                modalHandle(resText, visible, isSuccess, modalEvents)

            }
            <View style={signInStyles.textInputView}>
                <TextInput
                    placeholder='E-mail'
                    style={signInStyles.textInput}
                    onChangeText={(text) => handleTextInputs(text, 'email')}
                />
                <TextInput
                    placeholder='Şifre'
                    style={signInStyles.textInput}
                    onChangeText={(text) => handleTextInputs(text, 'password')}
                />
            </View>
            <View style={signInStyles.signUpView}>
                <ApproveButton text={'Giriş Yap'} onPress={signInHandle} />
            </View>
            <BottomText
                text={"Bir hesabınız yok mu?"}
                clickText={'Kayıt Olun'}
                onPress={navigateToSignUp}
            />

        </View>
    )
}

export default SignIn