import { View, Text, TextInput, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import { signUp } from '../styles/signUpStyles'
import ApproveButton from '../components/ApproveButton'
import { firebaseSignUp } from '../../core/firebase'
import { NavigationPathEnum } from '../../core/enum/navigationPathEnum'
import BottomText from '../components/BottomText'


const SignUp = ({ navigation }) => {
    // console.log(firebase.auth) // Undefined
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

            firebaseSignUp(userInfo, navigation)
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
        navigation.navigate('SignIn')
    }

    return (
        <View style={signUp.main}>
            <View style={signUp.logo}>

            </View>

            <TextInput
                placeholder='Name'
                style={signUp.textInput}
                onChangeText={(text) => handleTextInputs(text, 'name')}
            />
            <TextInput
                placeholder='Surname'
                style={signUp.textInput}
                onChangeText={(text) => handleTextInputs(text, 'surname')}
            />
            <TextInput
                placeholder='E-mail'
                style={signUp.textInput}
                onChangeText={(text) => handleTextInputs(text, 'email')}
            />
            <TextInput
                placeholder='Password'
                style={signUp.textInput}
                onChangeText={(text) => handleTextInputs(text, 'password')}
            />
            <TextInput
                placeholder='Password Again'
                style={signUp.textInput}
                onChangeText={(text) => { setRePassword(text) }}
            />

            <View style={signUp.signUpView}>
                <ApproveButton text={'Sign Up'} onPress={signUpHandle} />
            </View>

            <BottomText text={'Have you already an acount?'} clickText={'Sign In'}
                onPress={navigateToSignIn} />

        </View>
    )
}

export default SignUp