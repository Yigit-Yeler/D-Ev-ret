import { View, Text, TouchableOpacity, TextInput } from 'react-native'
import React, { useState } from 'react'
import { signIn } from '../styles/signInStyles'
import ApproveButton from '../components/ApproveButton'
import { firebaseSignIn } from '../../core/firebase'

const SignIn = ({ navigation }) => {
    const [userInfo, setUserInfo] = useState({
        'email': '',
        'password': ''
    })

    const handleTextInputs = (value, name) => {
        let updatedValue = { [name]: value };
        setUserInfo(userInfo => ({
            ...userInfo,
            ...updatedValue
        }));
        console.log(userInfo)
    }

    const signInHandle = () => {
        console.log('Sign In')
        firebaseSignIn(userInfo, navigation)
    }

    return (
        <View style={signIn.main}>
            <View style={signIn.logo}>

            </View>

            <View style={signIn.textInputView}>
                <TextInput
                    placeholder='E-mail'
                    style={signIn.textInput}
                    onChangeText={(text) => handleTextInputs(text, 'email')}
                />
                <TextInput
                    placeholder='Password'
                    style={signIn.textInput}
                    onChangeText={(text) => handleTextInputs(text, 'password')}
                />
            </View>

            <View style={signIn.signUpView}>
                <ApproveButton text={'Sign In'} onPress={signInHandle} />
            </View>

        </View>
    )
}

export default SignIn