import { View, Text, TextInput, TouchableOpacity } from 'react-native'
import React, { useEffect, useState } from 'react'
import { signUpStyles } from '../styles/signUpStyles'
import ApproveButton from '../components/ApproveButton'
import { firebaseSignUp } from '../../core/firebase'
import { NavigationPathEnum } from '../../core/enum/navigationPathEnum'
import { useDispatch, useSelector } from 'react-redux'
import { signIn, signUp } from '../store/slices/authSlice'
import BottomText from '../components/BottomText'
import ErrorModal from '../../core/myModal/ErrorModal'
import SuccessModal from '../../core/myModal/SuccessModal'

const SignUp = ({ navigation }) => {
    // console.log(firebase.auth) // Undefined
    const dispatch = useDispatch()
    const user = useSelector(state => state.auth.user)
    const [isSuccess, setIsSuccess] = useState(0)
    const [a, setA] = useState(0)
    const [visible, setVisible] = useState(true)

    const [rePassword, setRePassword] = useState('')
    const [userInfo, setUserInfo] = useState({
        'name': '',
        'surname': '',
        'email': '',
        'password': ''
    })

    useEffect(() => {
        // console.log(isSuccess)
    }, [isSuccess])


    const modalHandle = () => {
        if (isSuccess == 1) {
            return (
                <SuccessModal
                    isVisible={visible}
                    onPress={() => {
                        setIsSuccess(0)
                        setVisible(false)
                    }}
                />
            )
        }
        else if (isSuccess == 2) {
            return (
                <ErrorModal
                    isVisible={visible}
                    onPress={() => {
                        setIsSuccess(0)
                        setVisible(false)
                    }}
                />
            )
        }
    }

    const signUpHandle = () => {
        // console.log(createUserWithEmailAndPassword())
        if (userInfo.password == rePassword) {
            console.log("Correct")
            firebaseSignUp(userInfo)
                .then((res) => {
                    console.log(res)
                    dispatch(signUp(res))
                    setIsSuccess(1)
                    setVisible(true)
                })
                .catch((e) => {
                    setIsSuccess(2)
                    console.log(e)
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
        // navigation.navigate('SignIn')
        // setVisible(true)
    }

    return (
        <View style={signUpStyles.main}>
            <View style={signUpStyles.logo}>

            </View>
            {
                modalHandle()
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