import { View, Text, Image, TextInput } from 'react-native'
import React from 'react'
import { updateProfileStyles } from '../styles/updateProfileStyles'
import { textInputStyles } from '../components/styles/textInputStyles'
import ApproveButton from '../components/ApproveButton'
const UpdateProfile = () => {
    return (
        <View style={updateProfileStyles.main}>
            <View style={updateProfileStyles.infoView}>
                <Image
                    style={updateProfileStyles.profileImg}
                    source={require('../../assets/adaptive-icon.png')}
                />
                <TextInput style={textInputStyles.textInput} />
                <TextInput style={textInputStyles.textInput} />
                <TextInput style={textInputStyles.textInput} />
                <ApproveButton text={'Save'} />
            </View>
        </View>
    )
}

export default UpdateProfile