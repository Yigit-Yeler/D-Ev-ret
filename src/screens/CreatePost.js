import { View, Text, TextInput, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import { createPostStyles } from '../styles/createPostStyles'
import { textInputStyles } from '../components/styles/textInputStyles'

import MyDropDownButton from '../components/MyDropDownButton'
import ApproveButton from '../components/ApproveButton'
const CreatePost = () => {
    const [text, setText] = useState({
        'title': '',
        'desc': '',
        'adress': '',
        'isFurnished': '',
        'room': ''
    })

    const furnished = [
        { label: 'Eşyalı', value: 'Eşyalı' },
        { label: 'Eşyasız', value: 'Eşyasız' },
    ];

    const rooms = [
        { label: '1+0', value: '1+0' },
        { label: '1+1', value: '1+1' },
        { label: '2+1', value: '2+1' },
        { label: '3+1', value: '3+1' },
    ];

    const handleTextInputs = (value, name) => {
        let updatedValue = { [name]: value };
        setText(text => ({
            ...text,
            ...updatedValue
        }));
    }

    const handleDropDownF = (value) => {
        let updatedValue = { 'isFurnished': value };
        setText(text => ({
            ...text,
            ...updatedValue
        }));
        console.log(text)
    }

    const handleDropDownR = (value) => {
        let updatedValue = { 'room': value };
        setText(text => ({
            ...text,
            ...updatedValue
        }));
    }

    const submitPost = () => {
        console.log("submitttt")
    }

    return (
        <View style={createPostStyles.main}>
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
            <View style={createPostStyles.dropDownButtonsView}>
                <MyDropDownButton data={furnished} value={text.isFurnished} handleDropDown={handleDropDownF} />
                <MyDropDownButton data={rooms} value={text.room} handleDropDown={handleDropDownR} />
            </View>
            <Text>CreatePost</Text>

            <ApproveButton onPress={submitPost} text={'Share'} />

        </View>
    )
}

export default CreatePost