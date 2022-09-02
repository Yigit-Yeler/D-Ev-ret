import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { bottomTextStyles } from './styles/bottomTextStyles'

const BottomText = ({ text, clickText, onPress }) => {
    return (
        <View style={bottomTextStyles.main}>
            <Text style={bottomTextStyles.text}>{text}</Text>
            <TouchableOpacity
                onPress={() => {
                    onPress()
                }}
            >
                <Text style={bottomTextStyles.clickText}> {clickText}</Text>
            </TouchableOpacity>
        </View>
    )
}

export default BottomText