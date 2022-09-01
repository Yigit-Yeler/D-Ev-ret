import { View, Text, TextInput, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import { signUp } from '../styles/signUpStyles'
import ApproveButton from '../components/ApproveButton'
import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth';



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
            createUserWithEmailAndPassword(getAuth(), userInfo.email, userInfo.password).then(() => {
                console.log('olduuu')
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

    return (
        <View style={signUp.main}>
            <View style={signUp.logo}>

            </View>

            <View style={signUp.textInputView}>
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
            </View>

            <View style={signUp.signUpView}>
                <ApproveButton text={'Sign Up'} onPress={signUpHandle} />
            </View>

        </View>
    )
}

export default SignUp