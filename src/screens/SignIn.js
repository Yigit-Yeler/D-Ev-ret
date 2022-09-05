import { View, TextInput } from 'react-native'
import React, { useState } from 'react'
import { signInStyles } from '../styles/signInStyles'
import ApproveButton from '../components/ApproveButton'
import { firebaseSignIn } from '../../core/firebase'
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
            navigation.navigate(
                NavigationPathEnum.bottomTab,
                { screen: NavigationPathEnum.home }
            )
        }
    }

    const signInHandle = () => {
        firebaseSignIn(userInfo)
            .then((res) => {
                setIsSuccess(1)
                dispatch(signIn(res))
                setVisible(true)
            })
            .catch((e) => {
                setResText(e.toString())
                setIsSuccess(2)
                setVisible(true)
            })
    }

    const navigateToSignUp = () => {
        navigation.navigate(NavigationPathEnum.signUp)
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
                    placeholder='Password'
                    style={signInStyles.textInput}
                    onChangeText={(text) => handleTextInputs(text, 'password')}
                />
            </View>
            <View style={signInStyles.signUpView}>
                <ApproveButton text={'Sign In'} onPress={signInHandle} />
            </View>
            <BottomText
                text={"You don't have any account!"}
                clickText={'Sign Up'}
                onPress={navigateToSignUp}
            />

        </View>
    )
}

export default SignIn