import { View, Text, TouchableOpacity, TextInput } from 'react-native'
import React, { useState } from 'react'
import { signIn } from '../styles/signInStyles'

const SignIn = ({ navigation }) => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const signInHandle = () => {
        let signInDatas = {
            "email": email,
            "password": password
        }
    }

    return (
        <View style={signIn.main}>
            <View style={signIn.logo}>

            </View>

            <View style={signIn.textInputView}>
                <TextInput
                    placeholder='E-mail'
                    style={signIn.textInput}
                    onChangeText={(text) => { setEmail(text) }}
                />
                <TextInput
                    placeholder='Password'
                    style={signIn.textInput}
                    onChangeText={(text) => { setPassword(text) }}
                />
            </View>

            <View style={signIn.signUpView}>
                <TouchableOpacity
                    style={signIn.signUpButton}
                    onPress={() => signInHandle()}
                >
                    <Text>Sign In</Text>
                </TouchableOpacity>
            </View>

        </View>
    )
}

export default SignIn