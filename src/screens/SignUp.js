import { View, Text, TextInput, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
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
    const [a, setA] = useState()
    const [visible, setVisible] = useState(false)

    const [rePassword, setRePassword] = useState('')
    const [userInfo, setUserInfo] = useState({
        'name': '',
        'surname': '',
        'email': '',
        'password': ''
    })

    const signUpHandle = () => {
        // console.log(createUserWithEmailAndPassword())
        if (userInfo.password == rePassword) {
            console.log("Correct")
            setA(firebaseSignUp(userInfo, navigation))
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
        dispatch(signUp([userInfo, navigation]))
        // setVisible(true)
    }

    return (
        <View style={signUpStyles.main}>
            <View style={signUpStyles.logo}>

            </View>
            <SuccessModal
                isVisible={visible}
                onPress={() => {
                    setVisible(false)
                }}
            />
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