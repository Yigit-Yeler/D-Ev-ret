import { View, Text, TextInput, TouchableOpacity } from 'react-native'
import React, { useEffect, useState } from 'react'
import { signUpStyles } from '../styles/signUpStyles'
import ApproveButton from '../components/ApproveButton'
import { firebaseSignUp } from '../../core/firebase'
import { NavigationPathEnum } from '../../core/enum/navigationPathEnum'
import { useDispatch } from 'react-redux'
import { signUp } from '../store/slices/authSlice'
import BottomText from '../components/BottomText'
import { modalHandle } from '../../core/myModal/ModalHandle'

const SignUp = ({ navigation }) => {
    // console.log(firebase.auth) // Undefined
    const dispatch = useDispatch()

    const [isSuccess, setIsSuccess] = useState(0)
    const [resText, setResText] = useState('')
    const [visible, setVisible] = useState(true)

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
            navigation.navigate(
                NavigationPathEnum.bottomTab,
                { screen: NavigationPathEnum.home }
            )
        }
    }

    const signUpHandle = () => {
        if (userInfo.password == rePassword) {
            console.log("Correct")
            firebaseSignUp(userInfo)
                .then((res) => {
                    setIsSuccess(1)
                    dispatch(signUp(res))
                    setVisible(true)
                })
                .catch((e) => {
                    setResText(e.toString())
                    setIsSuccess(2)
                    setVisible(true)
                })
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
        navigation.navigate(NavigationPathEnum.signIn)
    }

    return (
        <View style={signUpStyles.main}>
            <View style={signUpStyles.logo}>

            </View>
            {
                modalHandle(resText, visible, isSuccess, modalEvents)
            }

            <TextInput
                placeholder='Name'
                style={signUpStyles.textInput}
                onChangeText={(text) => handleTextInputs(text, 'name')}
            />
            <TextInput
                placeholder='Surname'
                style={signUpStyles.textInput}
                onChangeText={(text) => handleTextInputs(text, 'surname')}
            />
            <TextInput
                placeholder='E-mail'
                style={signUpStyles.textInput}
                onChangeText={(text) => handleTextInputs(text, 'email')}
            />
            <TextInput
                placeholder='Password'
                style={signUpStyles.textInput}
                onChangeText={(text) => handleTextInputs(text, 'password')}
            />
            <TextInput
                placeholder='Password Again'
                style={signUpStyles.textInput}
                onChangeText={(text) => { setRePassword(text) }}
            />

            <View style={signUpStyles.signUpView}>
                <ApproveButton text={'Sign Up'} onPress={signUpHandle} />
            </View>

            <BottomText text={'Have you already an acount?'} clickText={'Sign In'}
                onPress={navigateToSignIn} />

        </View>
    )
}

export default SignUp