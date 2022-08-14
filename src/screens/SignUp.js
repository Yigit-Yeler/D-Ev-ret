import { View, Text, TextInput, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import { signUp } from '../styles/signUpStyles'
const SignUp = () => {

    const [name, setName] = useState('')
    const [surname, setSurname] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [rePassword, setRePassword] = useState('')

    return (
        <View style={signUp.main}>
            <View style={signUp.logo}>

            </View>

            <View style={signUp.textInputView}>
                <TextInput
                    placeholder='Name'
                    style={signUp.textInput}
                    onChangeText={(text) => { setName(text) }}
                />
                <TextInput
                    placeholder='Surname'
                    style={signUp.textInput}
                    onChangeText={(text) => { setSurname(text) }}
                />
                <TextInput
                    placeholder='E-mail'
                    style={signUp.textInput}
                    onChangeText={(text) => { setEmail(text) }}
                />
                <TextInput
                    placeholder='Password'
                    style={signUp.textInput}
                    onChangeText={(text) => { setPassword(text) }}
                />
                <TextInput
                    placeholder='Password Again'
                    style={signUp.textInput}
                    onChangeText={(text) => { setRePassword(text) }}
                />
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