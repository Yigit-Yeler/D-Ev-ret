import { View, Text, TextInput } from 'react-native'
import React, { useState } from 'react'
import { createPostStyles } from '../styles/createPostStyles'
import { textInputStyles } from '../components/styles/textInputStyles'
const CreatePost = () => {
    const [text, setText] = useState({
        'title': '',
        'desc': '',
        'adress': ''
    })

    const handleTextInputs = (value, name) => {
        let updatedValue = { [name]: value };
        setText(text => ({
            ...text,
            ...updatedValue
        }));
        console.log(text)
    }

    return (
        <View style={createPostStyles.main}>
            <Text>CreatePost</Text>
            <TextInput
                style={textInputStyles.textInput}
                onChangeText={(text) => handleTextInputs(text, 'title')}
            />
            <TextInput
                style={textInputStyles.textInput}
                onChangeText={(text) => handleTextInputs(text, 'desc')}
            />
            <TextInput
                style={textInputStyles.textInput}
                onChangeText={(text) => handleTextInputs(text, 'adress')}
            />
        </View>
    )
}

export default CreatePost