import { View, Text, TextInput, TouchableOpacity } from 'react-native'
import React from 'react'
import { signUp } from '../styles/signUpStyles'
const SignUp = () => {
    return (
        <View style={signUp.main}>
            <View style={signUp.logo}>

            </View>

            <View style={signUp.textInputView}>
                <TextInput placeholder='Email' style={signUp.textInput} />
                <TextInput placeholder='Email' style={signUp.textInput} />
                <TextInput placeholder='Email' style={signUp.textInput} />
                <TextInput placeholder='Email' style={signUp.textInput} />
                <TextInput placeholder='Email' style={signUp.textInput} />
            </View>

            <View style={signUp.signUpView}>
                <TouchableOpacity style={signUp.signUpButton}>
                    <Text>Sign Up</Text>
                </TouchableOpacity>
            </View>

        </View>
    )
}

export default SignUp