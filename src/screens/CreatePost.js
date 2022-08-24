import { View, Text, TextInput } from 'react-native'
import React, { useState } from 'react'
import { createPostStyles } from '../styles/createPostStyles'
import { textInputStyles } from '../components/styles/textInputStyles'
import MyDropDownButton from '../components/MyDropDownButton'
const CreatePost = () => {
    const [text, setText] = useState({
        'title': '',
        'desc': '',
        'adress': ''
    })
    const [furnishedValue, setFurnishedValue] = useState(null);
    const [roomsValue, setRoomsValue] = useState(null);

    const furnished = [
        { label: 'Eşyalı', value: '1' },
        { label: 'Eşyasız', value: '2' },
    ];

    const rooms = [
        { label: '1+0', value: '1' },
        { label: '1+1', value: '2' },
        { label: '2+1', value: '3' },
        { label: '3+1', value: '4' },
    ];

    const handleTextInputs = (value, name) => {
        let updatedValue = { [name]: value };
        setText(text => ({
            ...text,
            ...updatedValue
        }));
        console.log(text)
    }

    const handleDropDownF = (value) => {
        setFurnishedValue(value)
    }

    const handleDropDownR = (value) => {
        setRoomsValue(value)
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
            <View style={createPostStyles.dropDownButtonsView}>
                <MyDropDownButton data={furnished} value={furnishedValue} handleDropDown={handleDropDownF} />
                <MyDropDownButton data={rooms} value={roomsValue} handleDropDown={handleDropDownR} />
            </View>

        </View>
    )
}

export default CreatePost